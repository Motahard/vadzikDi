import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from "react-redux";
import {removeMoving} from "../../redux/actions/movingItems";
import {Button, Modal} from "react-materialize";
import MovingEdit from "../moving-edit/moving-edit.component";

const iconStyles = {
  cursor: "pointer"
};

const MovingTableRow = ({ item, user, index }) => {
  const dispatch = useDispatch();
  const {count, itemName, category, date, from, to, reason, time} = item;

  const removeItemHandle = () => {
    const confirmDiss = window.confirm("Вы уверены?");
    if (confirmDiss) {
      dispatch(removeMoving(item._id));
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{itemName}</td>
      <td>{category}</td>
      <td>{count}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{reason}</td>
      <td>{date}</td>
      <td>{time}</td>
      { user.admin && (<td>
        <Modal
          actions={[]}
          header="Редактирование"
          trigger={<EditIcon style={iconStyles} color={"primary"}/>}
        >
          <MovingEdit item={item}/>
        </Modal>
        <DeleteIcon onClick={removeItemHandle} style={iconStyles} color={"secondary"}/>
      </td>) }
    </tr>
  )
};

export default MovingTableRow;
