import axios from "axios";
import { GETCAISSE1 } from "../ActionsTypes/Caisse1_action_type";

export const getCaisses1 = () => async (dispatch) => {
  try {
    await axios
      .get("/api/caisse/get")
      .then((res) =>
        dispatch({ type: GETCAISSE1, payload: res.data.allCaisses })
      );
  } catch (error) {
    console.log("Error", error);
  }
};

export const updateCaisse1 = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/api/caisse/update/${id}`, data);
    dispatch(getCaisses1());
  } catch (error) {
    console.log(error);
  }
};
