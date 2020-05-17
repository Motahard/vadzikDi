import React, {useEffect, useState} from 'react';
import {Table} from "react-materialize";
import DashboardTableRow from "../dashboard-table-row/dashboard-table-row.component";
import MovingTableRow from "../moving-table-row/moving-table-row.component";

const MovingTable = ({itemsToShow, user}) => {
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
        <th data-field="itemName">
          Наименование
        </th>
        <th data-field="category">
          Категория
        </th>
        <th data-field="count">
          Количество
        </th>
        <th data-field="from">
          Откуда
        </th>
        <th data-field="to">
          Куда
        </th>
        <th data-field="reason">
          Причина
        </th>
        <th onClick={filterById} style={{ cursor: "pointer"}} data-field="date">
          Дата
        </th>
        <th data-field="time">
          Время
        </th>
        { user.admin && (<th data-field="actions">
          Действия
        </th>) }
      </tr>
      </thead>
      <tbody>
      { items.map((item, i) => (<MovingTableRow user={user} key={item._id} item={item} index={i}/>)) }
      </tbody>
    </Table>
  )
};

export default MovingTable;
