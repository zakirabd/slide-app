import { CHANGE_STATE_MAIN, CHANGE_STATE_MERGE_MAIN, RESET_STATE_MAIN } from './types';
import * as API from '../APIKey';
import axios from 'axios';
const env = window._env;

export const fetchPresentations = () => dispatch => {
  axios
    .get(`${API.MAIN_API}presentation=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'presentations', value: response.data},   
      })
    )
    .catch(err => console.log(err));
};

export const fetchSlides = () => dispatch => {
  axios
    .get(`${API.MAIN_API}slide=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'slides', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const insertOnlineOrder = (onlineOrder) => async (dispatch) => {
  let resp = {status:"fail"};
  return await  axios
  .post(`${API.MAIN_API}onlineOrder=insert`, onlineOrder).
  then(response => {
      resp.status = "success";
      dispatch({
        type: RESET_STATE_MAIN,
        payload: "onlineOrder"
      })
      console.log(response.data)
      return resp;
     
  })
   .catch(err =>{ resp.status="catch"; return resp;  console.log(err)});
}

export const fetchLinks = () => dispatch => {
  axios
    .get(`${API.MAIN_API}links=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'links', value: response.data}
      })
    )
    .catch(err => console.log(err));
};


//change input actions
  export const changeStateMain = (itemObject) => (dispatch) => { 
    dispatch({
      type: CHANGE_STATE_MAIN,
      payload: itemObject,
    });
  };
  export const resetStateMain = (name) => (dispatch) => {
    dispatch({
      type: RESET_STATE_MAIN,
      payload: name,
    });
  };
  export const changeStateMergeMain = (itemObject) => {
    return {
      type: CHANGE_STATE_MERGE_MAIN,
      payload: itemObject,
    };
  };

 