import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import EventsIndex from "./components/EventsIndex";
import EventsNew from "./components/EventsNew";
import reducer from "./reducers/index";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const middleWare = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWare));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement
);
