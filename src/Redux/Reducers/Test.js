// import * as actionTypes from "../constants/orderConstant";

// export const allOrdersReducer = (state = { orders: [] }, action) => {
//   switch (action.type) {
//     case actionTypes.ALL_ORDERS_REQUEST:
//       return {
//         loading: true,
//         orders: [],
//         order: [],
//       };

//     case actionTypes.ALL_ORDERS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         orders: action.payload,
//         order: action.order,
//       };

//     case actionTypes.ALL_ORDERS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         orders: [],
//         order: [],
//         error: action.payload,
//       };

//     case actionTypes.CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };


