import React, { Component } from 'react';
import Pickers from '../components/Pickers';
import Posts from '../components/Posts';
import {fetchPostsIfNeeded, selectSubreddit} from '../actions';
import { connect } from 'react-redux'

class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedSubreddit !== this.props.selectedSubreddit){
      const { dispatch, selectedSubreddit } = this.props;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange = (nextSubreddit) => {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  }

  render() {
    const {posts, selectedSubreddit} = this.props;
    return(
      <div>
        <h1>{selectedSubreddit}</h1>
        <Pickers value={selectedSubreddit} 
                 onChange={this.handleChange}
                 options={['reactjs','frontend']}/>
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