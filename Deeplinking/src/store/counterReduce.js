/* eslint-disable prettier/prettier */
export const initialSate = {
    count: 1,
    data: null,
};

export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
        case 'RESET':
            return {
                count: state.count = 1,
            };
        case 'DATA-FETCH':
            return {
                state,
                data: action.payload,
            };
        default:
            return state;
    }
};
