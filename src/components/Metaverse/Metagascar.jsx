import React, { PureComponent } from "react";

import Web3 from 'web3';


//import { Entity, Scene } from "aframe-react";

import 'aframe';
import 'aframe-event-set-component'; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import 'networked-aframe';

import {mirror} from "aframe-mirror-component";

function mouseEnter(control) {
  console.log("mouseEnter: ", control);
}

function mouseLeave(control) {
  console.log("mouseLeave: ", control);
}


const items = []
for (let i = 0; i < 3; i++) {
        var index = 10 + i;
        var position = "0 0.02 " + index;
        items.push(<a-image src="#street" width="3" height="3" position={position} rotation="90 0 0" ></a-image>)
}
const Metagascar = ({ connectToMetamask }) => {
  return (

    <a-scene >
        <a-assets>
          <img id="wall" src="https://view.metagascar.com/images/brick.wall.png" />
          <img id="street" src="https://view.metagascar.com/images/line.street.png" />
          <a-asset-item id="crate-obj" src="https://view.metagascar.com/images/obj/modernvilla.obj"></a-asset-item>
          <a-asset-item id="crate-mtl" src="https://view.metagascar.com/images/obj/modernvilla.mtl"></a-asset-item>
          <template id="my-template">
            <a-entity>
              <a-sphere color="#f00"></a-sphere>
            </a-entity>
          </template>
        </a-assets>
       {items}
       <a-entity environment="preset: tron"></a-entity>

       <a-image src="#street" width="3" height="3" position="24 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="21 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="18 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="15 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="12 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="9 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="6 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="3 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="0 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-3 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-6 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-9 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-12 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-15 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-18 0.02 -3" rotation="90 0 0" ></a-image>
       <a-image src="#street" width="3" height="3" position="-21 0.02 -3" rotation="90 0 0" ></a-image>



       <a-image src="#wall" width="3" height="3" position="25 0 3" ></a-image>
       <a-image src="#wall" width="3" height="3" position="25 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="26.5 0 1.5" rotation="0 90 0" ></a-image>

       <a-image src="#wall" width="3" height="3" position="20 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="15 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="10 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="5 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="0 0 0" ></a-image>

       <a-image src="#wall" width="3" height="3" position="-5 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="-10 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="-15 0 0" ></a-image>
       <a-image src="#wall" width="3" height="3" position="-20 0 0" ></a-image>


       <a-entity obj-model="obj:#crate-obj"
                 material="color: green" position="0 0 -4.5" scale="0.02 0.02 0.04" rotation="0 -82 0" >
       </a-entity>
       <a-entity obj-model="obj:#crate-obj"
                 material="color: blue" position="15 0 -4.5" scale="0.02 0.02 0.04" rotation="0 -82 0" >
       </a-entity>

       <a-sphere mirror="resolution: 64; distance: 1000; interval: 200; repeat: true" segments-radius="24" segments-height="24" radius="1.5" position="0 2.5 4" ></a-sphere>

       <a-entity id="mirror"
                 scale="1.0 1.0 1.0"
                 rotation="0 0 0"
                 position="0.0 1.5 -0.75"
                 geometry="primitive:plane; width:1.6; height:2.0"
                 mirror >
       </a-entity>

        <a-entity position="0 0 3.8" network="template:#my-template;attachTemplateToLocal:false;" >
            <a-camera >
              <a-cursor />
            </a-camera>
        </a-entity>
    </a-scene>

  );
};

export default Metagascar;
