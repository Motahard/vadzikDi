import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Modal, TextInput} from 'react-materialize';
import NavigationBar from "../navbar/navbar.component";
import {getMovingItems} from "../../redux/actions/movingItems";
import MovingAddItem from "../moving-add/moving-add.component";
import MovingTable from "../moving-table/moving-table.component";

function MovingPage({ user, items, dispatch }) {
  const history = useHistory();
  const [movingItemsToShow, setMovingItemsToShow] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  useEffect(() => {
    dispatch(getMovingItems());
  }, [dispatch]);

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
    setMovingItemsToShow(sortedItems);
  }, [items]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchValue.length === 0) {
      setMovingItemsToShow(items);
    }
    const searchingString = searchValue.toLowerCase().trim();
    const newItems = items.filter(item => {
      if (item.itemName.toLocaleLowerCase().includes(searchingString)
        || item.category.toLocaleLowerCase().includes(searchingString)) {
        return item;
      }
    });
    setMovingItemsToShow(newItems);
  };

  if(!user) {
    return <h1>Загрузка...</h1>
  }

  return (
    <div>
      <NavigationBar />
      <div style={{padding: '1rem'}}>
        <h3 style={{marginBottom: "3rem"}}>Записи о перемещении: </h3>
        <form onSubmit={handleSubmitSearch}>
          <TextInput onChange={handleSearch} id="search" value={searchValue} placeholder="Поиск..."/>
        </form>
        {
          user.admin && (<Modal
            actions={[
            ]}
            header="Добавление записи о перемещении"
            trigger={<Button fab className="red" large floating icon="+"/>}
          >
            <MovingAddItem/>
          </Modal>)
        }
        <MovingTable itemsToShow={movingItemsToShow} user={user}/>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.userState.user,
  items: state.movingItemsState.items
});

export default connect(mapStateToProps, null)(MovingPage);
