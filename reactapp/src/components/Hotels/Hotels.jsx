// Featured

import React, { Component } from "react";

// import context
import { RoomContext } from "./components/Context/Context";

// import components
import Room from ".Room/Room";


export default class Hotels extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />

        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
