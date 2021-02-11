import React from "react";

const List = (props) => {
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
