// import axios from "axios";
// import * as actionTypes from "../constants/orderConstant";

// export const getAllOrders = () => async (dispatch) => {
//     try {
//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             },
//         };

//         dispatch({ type: actionTypes.ALL_ORDERS_REQUEST });

//         const { data } = await axios.get(`/api/v1/admin/orders`, config);

//         dispatch({
//             type: actionTypes.ALL_ORDERS_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: actionTypes.ALL_ORDERS_FAIL,
//             paylaod: error.response.data.error,
//         });
//     }
// };


