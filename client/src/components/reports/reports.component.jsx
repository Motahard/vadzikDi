import React, {useState} from "react";
import { connect } from 'react-redux';
import NavigationBar from "../navbar/navbar.component";
import {Select, Container, Button} from "react-materialize";
import {getReportItems} from "../../redux/actions/reports";
import ReportTable from "../reports-table/report-table.component";

const ReportsPage = ({ items, dispatch, categoryBack }) => {
  const [form, setForm] = useState({
    category: '',
    date: ''
  });

  const handleChange = e => {
    e.preventDefault();
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { category, date } = form;
    if (!category || !date) {
      return;
    }
    dispatch(getReportItems(category, date));
  };

  return(
    <div className="center">
      <NavigationBar/>
      <Container style={{ marginTop: "2rem" }}>
        <form onSubmit={handleSubmit}>
          <Select name="category" onChange={handleChange} value={form.category}>
            <option disabled value="" id="null">
              Выберите категорию...
            </option>
            <option id="dashboard" value="items">
              Прибытие
            </option>
            <option id="moving" value="moving">
              Перемещение
            </option>
          </Select>
          <Select name="date" onChange={handleChange} value={form.category}>
            <option disabled value="" id="null">
              Выберите период...
            </option>
            <option id="day" value="day">
              За сегодня
            </option>
            {/*<option id="week" value="week">*/}
            {/*  Эта неделя*/}
            {/*</option>*/}
            <option id="month" value="month">
              Этот месяц
            </option>
            {/*<option id="period" value="period">*/}
            {/*  Этот квартал*/}
            {/*</option>*/}
            <option id="year" value="year">
              За год
            </option>
          </Select>
          <Button type="submit" style={{ width: "100%" }}>Показать</Button>
        </form>
      </Container>
      { items.length > 0 &&  <ReportTable itemsToShow={items} category={categoryBack} user={{ admin:false }}/>}
    </div>
  )
};

const mapStateToProps = state => ({
  items: state.reportState.items,
  categoryBack: state.reportState.category
});

export default connect(mapStateToProps, null)(ReportsPage);
