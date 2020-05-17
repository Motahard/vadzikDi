import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import { useHistory } from 'react-router-dom';
import { Button, Modal, TextInput } from 'react-materialize';
import NavigationBar from "../navbar/navbar.component";
import DashboardTable from "../dashboard-table/dashboard-table.component";
import DashboardAddItem from "../dashboard-additem/dashboard-additem.component";
import {getItems} from "../../redux/actions/items";

function DashboardPage({ user, dispatch, items }) {
  const history = useHistory();
  const [itemsToShow, setItemsToShow] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    setItemsToShow(items);
  }, [items]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchValue.length === 0) {
      setItemsToShow(items);
    }
    const searchingString = searchValue.toLowerCase().trim();
    const newItems = items.filter(item => {
      if (item.personName.toLocaleLowerCase().includes(searchingString)
        || item.itemName.toLocaleLowerCase().includes(searchingString)
        || item.category.toLocaleLowerCase().includes(searchingString)) {
        return item;
      }
    });
    setItemsToShow(newItems);
  };

  if(!user) {
    return <h1>Загрузка...</h1>
  }

  return (
    <div>
      <NavigationBar />
      <div style={{padding: '1rem'}}>
        <h3 style={{marginBottom: "3rem"}}>Записи о приходе: </h3>
        <form onSubmit={handleSubmitSearch}>
          <TextInput onChange={handleSearch} id="search" value={searchValue} placeholder="Поиск..."/>
        </form>
        <DashboardTable user={user} itemsToShow={itemsToShow}/>
      </div>
      {
        user.admin && (<Modal
          actions={[
        ]}
          header="Добавление записи о приходе"
          trigger={<Button fab className="red" large floating icon="+"/>}
        >
          <DashboardAddItem/>
        </Modal>)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.userState.user,
  items: state.itemsState.items
});

export default connect(mapStateToProps, null)(DashboardPage);
