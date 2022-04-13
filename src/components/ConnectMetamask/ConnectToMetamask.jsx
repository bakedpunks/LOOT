/* global AFRAME, THREE */

import React, { PureComponent } from "react";
import { Entity, Scene } from "aframe-react";
import "./styles.css";
import "aframe";
class ConnectToMetamask extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document
      .querySelector("a-scene")
      .addEventListener("loaded", this.onSceneLoad);

    AFRAME.registerComponent("add-number", {
      init: function() {
        this.el.addEventListener("click", this.onClick.bind(this));
      },
      onClick: function(e) {
        console.error("onClick");
      }
    });
  }
  onSceneLoad = () => {};
  render() {
    return (
      <a-scene cursor="rayOrigin: mouse" background="color: #FAFAFA">
        <a-assets>
          <a-asset-item
            id="model"
            src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948"
          />
        </a-assets>

        <Entity gltf-model={{ src: "#model" }} position="0 0 -5" />
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
        <a-cylinder
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
          shadow=""
        />
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
          shadow=""
          add-number=""
        />
      </a-scene>
    );
  }
}
export default ConnectToMetamask;
