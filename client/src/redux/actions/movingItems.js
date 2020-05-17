import axios from "axios";

export function getMovingItems() {
  return (dispatch) => {
    axios.get("/api/moving")
      .then(res => {
        const items = res.data;
        dispatch({
          type: "SET_MITEMS",
          payload: items
        })
      })
      .catch(err => console.log(err.message));
  };
}

export function addMoving(item) {
  return dispatch => {
    axios.post("/api/moving", item)
      .then(res => {
        dispatch({
          type: "ADD_MITEM",
          payload: res.data
        })
      })
      .catch(err => console.log(err.message));
  }
}

export function editMoving(item) {
  return dispatch => {
    axios.put("/api/moving", item)
      .then(res => {
        console.log(res);
        dispatch({
          type: "UPDATE_MITEM",
          payload: res.data
        })
      })
      .catch(err => console.log(err.message));
  }
}

export function removeMoving(movingId) {
  return dispatch => {
    axios.delete("/api/moving", {
      params: {
        movingId
      }
    })
      .then(res => {
        dispatch({
          type: "REMOVE_MITEM",
          payload: res.data._id
        })
      })
      .catch(err => console.log(err.message));
  }
}
