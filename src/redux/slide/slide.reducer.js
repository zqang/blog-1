import {SLIDE_DATA} from './slidedata';

const INITIAL_STATE = {
    slidedata: SLIDE_DATA
};

export const slideReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};
