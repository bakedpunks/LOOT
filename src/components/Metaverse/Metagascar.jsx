import React, { PureComponent } from "react";

import Web3 from 'web3';


//import { Entity, Scene } from "aframe-react";

import 'aframe';
import 'aframe-event-set-component'; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import 'networked-aframe';
import adapter from 'webrtc-adapter';
import { Server } from "socket.io";
import {mirror} from "aframe-mirror-component";


import db  from "../../database";

const io = require('socket.io')();

function mouseEnter(control) {
  console.log("mouseEnter: ", control);
}

function mouseLeave(control) {
  console.log("mouseLeave: ", control);
}


const items = []

for (let j = 0; j < 20; j++) {
  for (let k = 1; k < 11; k++) {
      let nftNumber = ((j*20)+k).valueOf();
      const home = db[nftNumber];
      var text_value = "value: " + home.address + "; side: front" ;
      var position = (k*2) + " 0.5 " + (j*2);
      var position_street = (k) + " 0.02 " + ((j*2) + 0.5);
      var position_text = (k*2) + " 1 " + (j*2);

      items.push(<a-image src="#street" width="1" height="1" position={position_street} rotation="90 0 0" ></a-image>);
      position_street = (k+10) + " 0.02 " + ((j*2) + 0.5);
      items.push(<a-image src="#street" width="1" height="1" position={position_street} rotation="90 0 0" ></a-image>);

      items.push(<a-image src="#wall" width="1" height="1" position={position} ></a-image>);
      items.push(<a-entity text={text_value} position={position_text} scale="1 1 1" side="double" ></a-entity>);
      position = (k*2) + " 0.5 " + ((j*2) + 1);
      position_text = (k*2) + " 1 " + ((j*2) + 1);
      home = db[nftNumber + 10];
      text_value = "value: " + home.address + "; side: front; align: right" ;
      items.push(<a-image src="#wall" width="1" height="1" position={position} ></a-image>);
      items.push(<a-entity text={text_value} position={position_text} scale="1 1 1" rotation="0 180 0" ></a-entity>);
  }
}

const Metagascar = ({ connectToMetamask }) => {
  return (

    <a-scene networked-scene="serverURL:  https://view.metagascar.com/wsapp; app: metagascar; room: metagascar; connectOnLoad: true; onConnect: onConnect; adapter: easyrtc; audio: false; video: false; debug: true;" >
        <a-assets>
          <img id="wall" src="https://view.metagascar.com/images/house.png" />
          <img id="street" src="https://view.metagascar.com/images/line.street.png" />
          <template id="my-template">
            <a-entity>
              <a-sphere color="#f00"></a-sphere>
            </a-entity>
          </template>
        </a-assets>
        <a-entity environment="ground: noise; preset: forest; lightPosition: 1 5 -2; groundColor: green; ground: flat; groundTexture: walkernoise;dressing: mushrooms; dressingAmount: 100; playArea: 440;"></a-entity>
       {items}

        <a-entity id="player" network="template:#my-template;" camera wasd-controls look-controls >
        </a-entity>
    </a-scene>

  );
};

export default Metagascar;
