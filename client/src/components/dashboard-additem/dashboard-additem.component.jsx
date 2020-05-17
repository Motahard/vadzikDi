import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput, Button, Select } from 'react-materialize'
import {addItem} from "../../redux/actions/items";


const DashboardAddItem = () => {
  const dispatch = useDispatch();
  const initState = {
    personName: '',
    itemName: '',
    category: '',
    count: '',
    outgo: ''
  };
  const [form, setForm] = useState(initState);

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const minutes = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    const addingDate = date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours()+":"+minutes;
    const item = { ...form, date: addingDate };
    if (item.count >= item.outgo) {
      dispatch(addItem(item));
      setForm(initState);
    }
  };

  const handleChange = e => {
    const {value, name} = e.target;
    setForm({...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={form.personName} onChange={handleChange} id="personName" name="personName" required type="text" placeholder="ФИО ответственного"/>
      <TextInput value={form.itemName} onChange={handleChange} id="itemName" name="itemName" type="text" required placeholder="Наименование"/>
      <Select
        name="category"
        onChange={handleChange}
        value={form.category}
      >
        <option
          disabled
          value=""
          id="null"
        >
          Выберите категорию...
        </option>
        <option id="oborydovanie" value="Оборудование">
          Оборудование
        </option>
        <option id="materials" value="Расходные материалы">
          Расходные материалы
        </option>
      </Select>
      <TextInput id="count" value={form.count} onChange={handleChange} name="count" type="number" required placeholder="Приход"/>
      <TextInput value={form.outgo} id="outgo" onChange={handleChange} name="outgo" type="number" required placeholder="Расход"/>
      <Button type="submit">Добавить новую запись</Button>
      <Button modal="close" type="button" className="red text-white" style={{marginLeft: '10px'}}>Закрыть</Button>
    </form>
  )
};

export default DashboardAddItem;
