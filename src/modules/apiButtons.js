import UserService from "../services/UserService";

const CALL_METHOD = 'CALL_METHOD';

const apiReducer = (state = [], action) => {
  return state;
};

export default apiReducer;


export const sendRequestOnMethod = () => {
  console.log(`[${UserService.getUsername()}] calls for api method`);
  return {
    type: CALL_METHOD,
    payload: {
      request: {
        url: `/Protected/method`,
        method: 'POST',
      },
    },
  }
};

export const sendRequestOnMethodWithAuthorization = () => {
  console.log(`[${UserService.getUsername()}] calls for api method`);
  return {
    type: CALL_METHOD,
    payload: {
      request: {
        url: `/Protected/methodRequiringAuthorization`,
        method: 'POST',
      },
    },
  }
};
