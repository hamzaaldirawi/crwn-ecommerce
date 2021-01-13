import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default: 
            return {...state}; // destructor SHOP_DATA because of error after convert it to object
    }
};
/*
used before using firebase 
const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return {...state}; // destructor SHOP_DATA because of error after convert it to object
    }
};

*/

export default shopReducer;