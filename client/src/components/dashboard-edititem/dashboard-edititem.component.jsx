import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {TextInput, Button, Select} from 'react-materialize'
import {editItem} from "../../redux/actions/items";

const DashboardEditItem = ({ item }) => {
  const dispatch = useDispatch();
  const initState ={
    _id: item._id,
    personName: item.personName,
    itemName: item.itemName,
    category: item.category,
    count: item.count.toString(),
    outgo: item.outgo.toString()
  };

  const [form, setForm] = useState(initState);

  useEffect(() => {
    setForm({
      _id: item._id,
      personName: item.personName,
      itemName: item.itemName,
      category: item.category,
      count: item.count.toString(),
      outgo: item.outgo.toString()
    });
  }, [item]);

  const handleSubmit = e => {
    e.preventDefault();
    const item = { ...form };
    if(item.count >= item.outgo) {
      dispatch(editItem(item));
      setForm(initState);
    }
  };

  const handleChange = e => {
    const {value, name} = e.target;
    setForm({...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={form.personName} onChange={handleChange} name="personName" type="text" required placeholder="ФИО ответственного"/>
      <TextInput value={form.itemName} onChange={handleChange} name="itemName" type="text" required placeholder="Наименование"/>
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
      <TextInput value={form.count} onChange={handleChange} name="count" type="number" required placeholder="Приход"/>
      <TextInput value={form.outgo} id="outgo" onChange={handleChange} name="outgo" type="number" required placeholder="Расход"/>
      <Button type="submit" modal="close">Обновить запись</Button>
    </form>
  )
};

export default DashboardEditItem;
