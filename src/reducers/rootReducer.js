const initState = {
  posts: [
    {
      id: "1",
      title: "I Love God",
      body: "lorema adufvha piovh aio [fouavhofuhv aufvhpoaufhv uah v"
    },
    {
      id: "2",
      title: "I Love His Word",
      body: "lorema adufvha piovh aio [fouavhofuhv aufvhpoaufhv uah v"
    },
    {
      id: "3",
      title: "I Love Jesus",
      body: "lorema adufvha piovh aio [fouavhofuhv aufvhpoaufhv uah v"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if ((action.type = "DELETE_POST")) {
    let newPost = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPost
    };
  }
  return state;
};

export default rootReducer;
