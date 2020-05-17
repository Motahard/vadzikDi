import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from "react-redux";
import {removeItem} from "../../redux/actions/items";
import {Button, Modal} from "react-materialize";
import DashboardEditItem from "../dashboard-edititem/dashboard-edititem.component";

const iconStyles = {
  cursor: "pointer"
};

const DashboardTableRow = ({ item, user, index }) => {
  const dispatch = useDispatch();
  const {count, personName, itemName, category, date, outgo} = item;

  const removeItemHandle = () => {
    const confirmDiss = window.confirm("Вы уверены?");
    if (confirmDiss) {
      dispatch(removeItem(item._id));
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{personName}</td>
      <td>{itemName}</td>
      <td>{category}</td>
      <td>{count}</td>
      <td>{outgo}</td>
      <td>{count - outgo}</td>
      <td>{date}</td>
      { user.admin && (<td>
        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="red">Отмена</Button>
          ]}
          header="Редактирование"
          trigger={<EditIcon style={iconStyles} color={"primary"}/>}
        >
          <DashboardEditItem item={item}/>
        </Modal>
        <DeleteIcon onClick={removeItemHandle} style={iconStyles} color={"secondary"}/>
      </td>) }
    </tr>
  )
};

export default DashboardTableRow;
