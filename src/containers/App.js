import React, { Component } from 'react';
import Pickers from '../components/Pickers';
import Posts from '../components/Posts';
import {fetchPostsIfNeeded} from '../actions';
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const {posts} = this.props;
    return(
      <div>
        <Pickers/>
        <Posts posts={posts}/>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  const {selectedSubreddit, postsBySubreddit} = state;
  const {items: posts} = postsBySubreddit;
  return {
    selectedSubreddit,
    postsBySubreddit,
    posts
  };
}

export default connect(mapStateToProps)(App);