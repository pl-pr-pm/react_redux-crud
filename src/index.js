import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import EventsIndex from "./components/EventsIndex";
import EventsNew from "./components/EventsNew";
import EventsShow from "./components/EventsShow";
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
        <Route path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events/:id" component={EventsShow} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement
);
