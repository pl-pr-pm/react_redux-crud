import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import EventsIndex from "./components/EventsIndex";
import reducer from "./reducers/index";
import thunk from "redux-thunk";

const middleWare = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWare));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  rootElement
);
