import React, { PureComponent } from "react";

import Web3 from 'web3';

//import { Entity, Scene } from "aframe-react";
import "aframe";
import "aframe-event-set-component"; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import "networked-aframe";

import "aframe-mirror-component";

const items = []
const itemsonchain = []
const itemschar = []
const itemsonchainmma = []

for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * 2000);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot/' + s + '.png';
        items.push(<div class="card col-md-4" ><img class="img-fluid"  src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot' + s + '.png';
        itemsonchain.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = Math.floor(Math.random() * 250);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot-characters/' + s + '.png';
        itemschar.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/mmaloot' + s + '.png';
        itemsonchainmma.push(<div class="card col-md-4" ><a href="https://app.nftrade.com/assets/bsc/0x48bf76b0dcc1326ae962b9301c40ee1ea399e186" ><img class="img-fluid" src={newImageUrl} /></a><div class="card-body"> <h5 class="card-title">NO {index} </h5></div></div>)
}
function mouseEnter(control) {
  console.log("mouseEnter: ", control);
}

function mouseLeave(control) {
  console.log("mouseLeave: ", control);
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

       <a-sphere aframe-mirror="resolution: 64; distance: 1000; interval: 200; repeat: true" segments-radius="24" segments-height="24" radius="1.5" position="0 2.5 4" ></a-sphere>

        <a-entity position="0 0 3.8" networked="template:#my-template;attachTemplateToLocal:false;" >
            <a-camera >
              <a-cursor />
            </a-camera>
        </a-entity>
    </a-scene>

  );
};

export default Metagascar;
