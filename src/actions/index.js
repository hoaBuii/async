export const selectSubreddit = (subreddit) => ({
    type:'SELECT_SUBREDDIT',
    subreddit
})

const receivePosts = (subreddit, json) => ({
    type: 'RECEIVE_POSTS',
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

const shouldFetchPosts = (state, subreddit) => {
    const posts = state?.postsBySubreddit[subreddit];

    if(!posts) {
        return true;
    }

    return false;
};

const fetchPosts = subreddit => (dispatch) => {
    //Here has a method requestPosts()
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)));

};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
    if(shouldFetchPosts(getState(), subreddit)) {
        return dispatch(fetchPosts(subreddit));
    }
}