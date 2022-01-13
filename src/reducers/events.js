import _ from "lodash";

import { DELETE_EVENT, READ_EVENTS } from "../actions";

// events -> state.events
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
