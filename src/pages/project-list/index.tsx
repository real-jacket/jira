import React, { useState, useEffect } from "react";
import { getProjectsRequest } from "../../services/projectList";
import { useDebounce } from "../../utils/hooks";
import List, { Project } from "./List";
import SearchPane, { FormField } from "./SearchPane";

const ProjectList = () => {
  const [headerOptions, setHeaderOptions] = useState<Array<string>>([]);
  const [list, setList] = useState<Array<Project>>([]);

  useEffect(() => {
    getProjectsRequest().then((res: Array<Project>) => {
      setList(res);
      const options = [...new Set(res.map((item) => item.header))];
      setHeaderOptions(options);
    });
  }, []);

  const [params, setParams] = useState<FormField>({
    name: "",
    header: "",
  });

  const debounceParams = useDebounce<FormField>(params, 500);

  useEffect(() => {
    getProjectsRequest(debounceParams).then((res) => {
      setList(res);
    });
  }, [debounceParams]);

  const change = (value: FormField) => {
    setParams({
      ...params,
      ...value,
    });
  };

  return (
    <>
      <SearchPane
        value={params}
        headerOptions={headerOptions}
        onChange={change}
      ></SearchPane>
      <List list={list}></List>
    </>
  );
};

export default ProjectList;
