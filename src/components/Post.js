import React from "react";
import { connect, useDispatch } from "react-redux";
import { deletePost } from "../actions/postActions";

function Posts(props) {
  const dispatch = useDispatch();

  const { post } = props;
  const handleClick = () => {
    dispatch(deletePost(post.id));
    props.history.push("/");
  };

  const individualPost = post ? (
    <div className="post" key={post.id}>
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
      <div className="center">
        <button className="btn grey" onClick={() => handleClick()}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading Posts..</div>
  );

  return (
    <>
      <div className="container">
        <h4>{individualPost}</h4>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

export default connect(mapStateToProps)(Posts);
