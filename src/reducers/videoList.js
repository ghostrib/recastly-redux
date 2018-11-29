import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  console.log(" ")
  console.log("%cREDUCER", "font-size:14px; color:pink")
  console.log("C! |VIDEO LIST REDUCER| ");
  console.log("state =>", state);
  console.log("action =>", action);
  console.log(" ")
  //TODO: define a reducer for the videoList field of our state.
  let newState = [];
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      newState = [...action.videos];
      return newState;
    default:
      return state;
  }
};

export default videoListReducer;
