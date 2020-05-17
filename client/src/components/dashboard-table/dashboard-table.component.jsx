import React, {useEffect, useState} from 'react';
import {Table} from "react-materialize";
import DashboardTableRow from "../dashboard-table-row/dashboard-table-row.component";

const DashboardTable = ({itemsToShow, user}) => {
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(itemsToShow);
  }, [itemsToShow]);

  const filterById = () => {
    setItems([...items].reverse());
  };

  if (!items) {
    return "Загрузка"
  }
  return (
    <Table centered={true}>
      <thead>
      <tr>
        <th data-field="id">
          #
        </th>
        <th data-field="personName">
          ФИО ответственного
        </th>
        <th data-field="itemName">
          Наименование
        </th>
        <th data-field="category">
          Категория
        </th>
        <th data-field="count">
          Приход
        </th>
        <th data-field="outgo">
          Расход
        </th>
        <th data-field="rest">
          Остаток
        </th>
        <th onClick={filterById} style={{ cursor: "pointer"}} data-field="date">
          Дата
        </th>
        { user.admin && (<th data-field="actions">
          Действия
        </th>) }
      </tr>
      </thead>
      <tbody>
      { items.map((item, i) => (<DashboardTableRow user={user} key={item._id} item={item} index={i}/>)) }
      </tbody>
    </Table>
  )
};

export default DashboardTable;
