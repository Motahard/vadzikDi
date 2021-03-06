import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput, Button, Select } from 'react-materialize'
import {addMoving} from "../../redux/actions/movingItems";


const MovingAddItem = () => {
  const dispatch = useDispatch();
  const initState = {
    itemName: '',
    category: '',
    count: '',
    date: '',
    time: '',
    from: '',
    to: '',
    reason: ''
  };
  const [form, setForm] = useState(initState);

  const handleSubmit = e => {
    e.preventDefault();
    const item = { ...form };
    dispatch(addMoving(item));
    setForm(initState);
  };

  const handleChange = e => {
    const {value, name} = e.target;
    setForm({...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <TextInput id="count" value={form.count} onChange={handleChange} name="count" type="number" required placeholder="Количество"/>
      <TextInput value={form.reason} id="reason" onChange={handleChange} name="reason" type="text" required placeholder="Причина"/>
      <TextInput value={form.from} id="from" onChange={handleChange} name="from" type="text" required placeholder="Откуда"/>
      <TextInput value={form.to} id="to" onChange={handleChange} name="to" type="text" required placeholder="Куда"/>
      <TextInput value={form.date} id="date" onChange={handleChange} name="date" type="date" required placeholder="Дата"/>
      <TextInput value={form.time} id="time" onChange={handleChange} name="time" type="time" required placeholder="Время"/>
      <Button type="submit">Добавить новую запись</Button>
      <Button modal="close" type="button" className="red text-white" style={{marginLeft: '10px'}}>Закрыть</Button>
    </form>
  )
};

export default MovingAddItem;
