import { connect } from "react-redux";
import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import EventsNew from "./EventsNew";

import { readEvents } from "../actions";

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents = () =>
    _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </>
    );
  }
}

// eventsというstate
const mapStateToProps = (state) => ({ events: state.events });

// 関数とする必要があるが、readEvents は関数なので、この書き方で問題ない
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
