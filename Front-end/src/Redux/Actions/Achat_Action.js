import axios from "axios";
import { GETPRODUCT } from "../ActionsTypes/Achat_action_type";

export const getProducts = () => async (dispatch) => {
  try {
    await axios
      .get("/api/achat/get")
      .then((res) =>
        dispatch({ type: GETPRODUCT, payload: res.data.allProducts })
      );
  } catch (error) {
    console.log("Error", error);
  }
};

export const addProducts = (data) => async (dispatch) => {
  try {
    await axios
      .post("/api/achat/create", data)
      .then((res) => dispatch(getProducts()));
  } catch (error) {
    console.log(error);
  }
};

export const updateProducts = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/api/achat/update/${id}`, data);
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await fetch("/api/achat/delete/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }).then((res) => dispatch(getProducts()));
  } catch (error) {
    console.log(error);
  }
};
