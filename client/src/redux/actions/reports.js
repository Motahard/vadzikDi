import axios from "axios";

export function getReportItems(category, date) {
  return dispatch => {
    axios.post("/api/reports", {category, date})
      .then(res => {
        console.log(res);
        dispatch({
          type: "REPORT_ITEMS",
          payload: res.data.result
        });
        dispatch({
          type: "REPORT_CATEGORY",
          payload: res.data.category
        });
      })
      .catch(err => console.log(err.message));
  }
}
