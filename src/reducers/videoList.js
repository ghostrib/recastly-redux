import Redux from 'redux';

var videoListReducer = (state = [], action) => {
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
