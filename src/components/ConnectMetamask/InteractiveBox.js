import React from "react";
import { Entity } from "aframe-react";
import "aframe-event-set-component";

// See https://www.npmjs.com/package/aframe-event-set-component

export default props => (
  <Entity
    {...props}
    primitive="a-box"
    event-set__click="material.color: red; scale: 2 2 2"
    event-set__mouseenter="material.color: blue"
    event-set__1="_event: mouseleave; material.color: red"
  />
);
