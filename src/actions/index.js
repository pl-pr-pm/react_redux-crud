import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";

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
