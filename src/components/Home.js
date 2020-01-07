import React, { Component } from "react";
// import axios from "axios";
import Pokeball from "../pokeball.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Home extends Component {
  // state = {
  //   posts: []
  // };

  // componentDidMount() {
  //   axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0, 10)
  //     });
  //   });
  // }
  render() {
    const { posts } = this.props;
    const postLists = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <img src={Pokeball} alt="A Pokeball" />
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet..</div>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postLists}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
