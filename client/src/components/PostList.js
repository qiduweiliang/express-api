import React, { Component } from 'react';
import axios from 'axios'

export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    }
  }
  componentWillMount() {
    console.log('hello will axios');
    //Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
       posts: res.data.posts
     });
     console.log(this.state.posts);
   });
    // 再此处发 Ajax 请求，
    // 请求服务器端的 json 数据
  }
  render() {
    let posts = this.state.posts.map( (item,i) => <p key={i}>第{i+1}条{item.title}</p>)
    return(
      <div>
       <h1> PostList</h1>
        { posts }
      </div>
    );
  }
}
