const initState = {
  posts: [
    {
      id: "1",
      title: "I Love God",
      body:
        "lorema adufvha piovh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, excepturi repellendus voluptatum et eius sit, ipsa, facere commodi ea consectetur tempora sapiente sed officiis? Provident unde accusamus delectus veniam earum.aio [fouavhofuhv aufvhpoaufhv uah v"
    },
    {
      id: "2",
      title: "I Love His Word",
      body:
        "lorema adlorema adufvha piovh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, excepturi repellendus voluptatum et eius sit, ipsa, facere commodi ea consectetur tempora sapiente sed officiis? Provident unde accusamus delectus veniam earum.aio [fouavhofuhv aufvhpoaufhv uahufvha piovh aio [fouavhofuhv aufvhpoaufhv uah v"
    },
    {
      id: "3",
      title: "I Love Jesus",
      body:
        "lorema alorema adufvha piovh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, excepturi repellendus voluptatum et eius sit, ipsa, facere commodi ea consectetur tempora sapiente sed officiis? Provident unde accusamus delectus veniam earum.aio [fouavhofuhv aufvhpoaufhv uahdufvha piovh aio [fouavhofuhv aufvhpoaufhv uah v"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      let newPost = state.posts.filter(post => {
        return action.id !== post.id;
      });
      return {
        ...state,
        posts: newPost
      };

    default:
      return state;
  }
  // if ((action.type = "DELETE_POST")) {
  //   let newPost = state.posts.filter(post => {
  //     return action.id !== post.id;
  //   });
  //   return {
  //     ...state,
  //     posts: newPost
  //   };
  // }
  // return state;
};

export default rootReducer;
