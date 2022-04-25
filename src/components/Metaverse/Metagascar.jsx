import React, { PureComponent } from "react";

import Web3 from 'web3';


//import { Entity, Scene } from "aframe-react";

import 'aframe';
import 'aframe-event-set-component'; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import 'networked-aframe';

import {mirror} from "aframe-mirror-component";


import db  from "../../database";

function mouseEnter(control) {
  console.log("mouseEnter: ", control);
}

function mouseLeave(control) {
  console.log("mouseLeave: ", control);
}


const items = []
const items_walls = []
const items_houses = []

for (let k = 1; k < 10; k++) {
    let nftNumber = (k).valueOf();
    const home = db[nftNumber];
    var text_value = "value: " + home.address + " " + position + ";" ;
    var position = (k) + " 0.02 " + (0);
    var position_street = (k) + " 0.02 " + (0.5);
    var position_text = (k) + " 1 " + (0);
    items.push(<a-image src="#street" width="1" height="1" position={position_street} rotation="90 0 0" ></a-image>)
    items_walls.push(<a-image src="#wall" width="1" height="1" position={position} ></a-image>)
    items_houses.push(<a-entity text={text_value} position={position_text} scale="1 1 1" ></a-entity>)
}

const Metagascar = ({ connectToMetamask }) => {
  return (

    <a-scene >
        <a-assets>
          <img id="wall" src="https://view.metagascar.com/images/brick.wall.png" />
          <img id="street" src="https://view.metagascar.com/images/line.street.png" />
          <template id="my-template">
            <a-entity>
              <a-sphere color="#f00"></a-sphere>
            </a-entity>
          </template>
        </a-assets>
        <a-entity environment="preset: tron"></a-entity>
       {items}

       {items_walls}
       {items_houses}

        <a-entity position="0 0 3.8" network="template:#my-template;attachTemplateToLocal:false;" >
            <a-camera >
              <a-cursor />
            </a-camera>
        </a-entity>
    </a-scene>

  );
};

export default Metagascar;
