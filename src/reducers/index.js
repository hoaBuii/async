import React from 'react';
import { combineReducers } from 'redux';



// key: value
// selectedSubreddit: action.subreddit
const selectedSubreddit = (state='reactjs', action) => {
    switch(action.type){
        case 'SELECT_SUBREDDIT':
            return action.subreddit;
        default:
            return state;
    }
}

const postsBySubreddit = (state={}, action) => {
    switch(action.type){
        case 'REQUEST_POSTS':
        case 'RECEIVE_POSTS':
            return {
                ...state,
                isFetching: false,
                items: action.posts
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit
});

export default rootReducer;