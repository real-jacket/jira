import React, { useState, useEffect } from "react";
import { getProjectsRequest } from "../../services/projectList";
import { useDebounce } from "../../utils/hooks";
import List from "./List";
import SearchPane from "./SearchPane";

const ProjectList = () => {
  const [headerOptions, setHeaderOptions] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getProjectsRequest().then((res) => {
      setList(res);
      const options = [...new Set(res.map((item) => item.header))];
      setHeaderOptions(options);
    });
  }, []);

  const [params, setParams] = useState({
    name: "",
    header: "",
  });

  const debounceParams = useDebounce(params, 500);

  useEffect(() => {
    getProjectsRequest(debounceParams).then((res) => {
      setList(res);
    });
  }, [debounceParams]);

  const change = (value) => {
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
