import { LOGIN, LOGOUT } from './actions';

const reducers = (state, {type, payload}) => {
  switch(type) {
    case LOGIN:
      // copy
      // add new value
      // return new state
      return {
        ...state,
        user: {...payload},
        logged_in: true
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        logged_in: false
      };
    // case ADD1:
    //   return {
    //     ...state,
    //     count: ( state.count ? state.count + 1 : 1 )
    //   };
    default:
      return state;
  }
};

export default reducers;