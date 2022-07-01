import {ORDER_CREATE_FAILS,ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS} from '../constants/orderConstant'
import axiosInstance from "../config";

export const createOrder =(order)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:ORDER_CREATE_REQUEST
        })
        const {
            userLogin: { userInfo },
          } = getState();
          console.log(userInfo.token);
          const config = {
            headers: {
              "Contnet-Type": "application/json",
              Authorization: `${userInfo.token}`,
            },
          };
          const {data} = await axiosInstance.post('/orders',order,config);
          dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:data
          })
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAILS,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          }); 
    }
}