import {createStore} from "redux";
import {allReducers} from "./reducer/index";
export const createMyStore = () =>//i will call this while store creation
{
   return createStore(allReducers);
}