/* eslint-disable prettier/prettier */

export const initialState = {
    data:null,
    loading: false,
    success: null,
};

export const apiReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'CREATE_EMPLOYEE_SUCCESS':
          return { ...state, success: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: true };
      default:
        return state;
    }
  };
