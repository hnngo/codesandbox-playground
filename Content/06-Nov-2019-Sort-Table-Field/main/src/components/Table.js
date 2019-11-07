import React, { useState } from "react";
import data from "./data.json";
import SortButton from "./SortButton.js";

const Table = () => {
  const [sortedData, setSortedData] = useState(data);

  const renderTable = data => {
    return data.map(d => {
      return (
        <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.name}</td>
          <td>{d.age}</td>
          <td>{d.grade}</td>
        </tr>
      );
    });
  };

  const clickSort = (e, type) => {
    let innerText = e.target.parentNode.parentNode.innerHTML;
    innerText = innerText.slice(0, innerText.indexOf("<")).toLowerCase();

    let newSortedData;
    switch (innerText) {
      case "id":
        newSortedData = sortedData.sort((a, b) =>
          type === "up" ? a.id - b.id : b.id - a.id
        );
        setSortedData([...newSortedData]);
        break;
      case "name":
        newSortedData = sortedData.sort((a, b) =>
          type === "up"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
        setSortedData([...newSortedData]);
        break;
      case "age":
        newSortedData = sortedData.sort((a, b) =>
          type === "up" ? a.age - b.age : b.age - a.age
        );
        setSortedData([...newSortedData]);
        break;
      case "grade":
        newSortedData = sortedData.sort((a, b) =>
          type === "up" ? a.grade - b.grade : b.grade - a.grade
        );
        setSortedData([...newSortedData]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="table-container">
      <p className="header">Grade Table</p>
      <table>
        <thead>
          <tr>
            <td>
              ID
              <SortButton onClick={clickSort} />
            </td>
            <td>
              Name
              <SortButton onClick={clickSort} />
            </td>
            <td>
              Age
              <SortButton onClick={clickSort} />
            </td>
            <td>
              Grade
              <SortButton onClick={clickSort} />
            </td>
          </tr>
        </thead>
        <tbody>{renderTable(sortedData)}</tbody>
      </table>
    </div>
  );
};

export default Table;
