import React, { PureComponent } from "react";

import Web3 from 'web3';

//import { Entity, Scene } from "aframe-react";
import "aframe";
import "aframe-event-set-component"; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import "networked-aframe";

require('aframe-mirror-component');

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

    <a-scene>
      <a-assets>
        <img id="groundTexture" src="https://view.metagascar.com/images/floor.jpg" />
        <img id="skyTexture" src="https://view.metagascar.com/images/sky.jpg" />
      </a-assets>

      <a-box position="-5 20 5" height="40"></a-box>
      <a-cone mirror position="4 2.5 -4" height="5" ></a-cone>
      <a-box position="10 10 -8" height="20" color="#FF0000"></a-box>
      <a-box position="-10 10 16" height="20" color="#0000FF"></a-box>

      <a-entity position="5 5 5">
        <a-sphere position="5 5 5" mirror="resolution: 16; distance: 1000; interval: 250; repeat: true"></a-sphere>
        <a-animation attribute="rotation" from="0 0 0" to="0 360 0" repeat="forever" dur="5000" easing="linear"></a-animation>
      </a-entity>

      <a-entity position="5 5 5">
        <a-sphere position="5 5 5" color="#CA54B2"></a-sphere>
        <a-animation attribute="rotation" from="0 0 0" to="360 0 360" repeat="forever" dur="2000" easing="linear"></a-animation>
      </a-entity>


      <a-sphere mirror="resolution: 64; distance: 1000; interval: 200; repeat: true" segments-radius="24" segments-height="24" radius="1.5" position="0 2.5 4" ></a-sphere>

      <a-plane src="#groundTexture" rotation="-90 0 0" height="100" width="100"></a-plane>
      <a-light type="ambient" color="#445451"></a-light>
      <a-light type="point" intensity="2" position="2 4 4"></a-light>
      <a-sky height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"></a-sky>
    </a-scene>

  );
};

export default Metagascar;
