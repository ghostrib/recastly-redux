import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  let newState = {};
  switch (action.type) {
    case 'CHANGE_VIDEO':
      console.log(action)
      newState.currentVideo = action.video;
      return newState.currentVideo;
    default:
      return state;
  }
};

export default currentVideoReducer;
