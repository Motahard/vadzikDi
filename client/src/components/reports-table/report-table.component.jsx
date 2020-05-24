import React, {useEffect, useState} from 'react';
import {Table} from "react-materialize";
import DashboardTableRow from "../dashboard-table-row/dashboard-table-row.component";
import MovingTableRow from "../moving-table-row/moving-table-row.component";

const ReportTable = ({itemsToShow, user, category}) => {
  const [items, setItems] = useState();
  const [itemsArrJsx, setItemsArrJsx] = useState([]);

  useEffect(() => {
    setItems(itemsToShow);
  }, [itemsToShow]);

  useEffect(() => {
    if (category === "moving") {
      const arr = itemsToShow.map((item, i) => (<MovingTableRow user={user} key={item._id} item={item} index={i}/>));
      setItemsArrJsx(arr);
    } else if (category === "items") {
      const arr = itemsToShow.map((item, i) => <DashboardTableRow user={user} key={item._id} item={item} index={i}/>);
      setItemsArrJsx(arr);
    }
  }, [itemsToShow, category]);

  const filterById = () => {
    setItems([...items].reverse());
  };

  if (!items) {
    return "Загрузка"
  }

  if (category === "moving") {
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
        </tr>
        </thead>
        <tbody>
        { itemsArrJsx }
        </tbody>
      </Table>
    )
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
      { itemsArrJsx }
      </tbody>
    </Table>
  )
};

export default ReportTable;
