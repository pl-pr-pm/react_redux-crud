import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENTS = "CREATE_EVENTS";
export const DELETE_EVENTS = "DELETE_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERY_STRING = "?token=token123";

// pureなオブジェクトのみ返却するため、非同期処理は組み込めない
// が、redux-thunkを利用することで Action に関数を定義できる
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`);

  dispatch({
    type: READ_EVENTS,
    response
  });
};

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(
    `${ROOT_URL}/events${QUERY_STRING}`,
    values
  );

  dispatch({
    type: CREATE_EVENTS,
    response
  });
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await axios.delete(`${ROOT_URL}/events/${id}`);
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: DELETE_EVENTS,
    id
  });
};
