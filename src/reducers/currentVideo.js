import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  console.log(" ")
  console.log("%cREDUCER", "font-size:14px; color:plum")
  console.log("C! |CURRENT VIDEO REDUCER| ");
  console.log("state =>", state);
  console.log("action =>", action);
  console.log(" ")
  //TODO: define a reducer for the currentVideo field of our state.
  let newState = {};
  switch (action.type) {
    case 'CHANGE_VIDEO':
      if (action.video) {
        newState.currentVideo = action.video;
        return newState.currentVideo;
      } else {
        return newState;
      }
    default:
      return state;
  }
};

export default currentVideoReducer;
