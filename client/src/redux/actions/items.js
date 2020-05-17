import axios from 'axios';

export function addItem(item) {
  return dispatch => {
    axios.post("/api/items", item)
      .then(res => {
        dispatch({
          type: "ADD_ITEM",
          payload: res.data
        })
      })
      .catch(err => console.log(err.message));
  }
}

export function getItems() {
  return (dispatch) => {
    axios.get("/api/items")
      .then(res => {
        const items = res.data;
        dispatch({
          type: "SET_ITEMS",
          payload: items
        })
      })
      .catch(err => console.log(err.message));
  };
}

export function editItem(item) {
  return dispatch => {
    axios.put("/api/items", item)
      .then(res => {
        console.log(res);
        dispatch({
          type: "UPDATE_ITEM",
          payload: res.data
        })
      })
      .catch(err => console.log(err.message));
  }
}

export function removeItem(itemId) {
  return dispatch => {
    axios.delete("/api/items", {
      params: {
        itemId
      }
    })
      .then(res => {
        dispatch({
          type: "REMOVE_ITEM",
          payload: res.data._id
        })
      })
      .catch(err => console.log(err.message));
  }
}
