import React, { FunctionComponent } from "react";

export interface Project {
  id: number;
  name: string;
  header: string;
}

interface ListProps {
  list: Array<Project>;
}

const List: FunctionComponent<ListProps> = (props) => {
  const { list } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>项目名</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.header}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
