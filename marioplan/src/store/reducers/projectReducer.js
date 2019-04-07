const initState = {
  projects: [
    { id: "1", title: "my name is bhavya tuteja", content: "blah blah blah1" },
    { id: "2", title: "my name is bhavya vohra", content: "blah blah blah2" },
    { id: "3", title: "my name is bhavya khatri", content: "blah blah blah3" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Projected created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create proejct error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
