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

    <a-scene background="color:#fff;">

      <a-entity id="camera_main" camera look-controls wasd-controls position="0 1.5 0">
        <a-entity position="0 0 -0.5" geometry="primitive:torus; radius:0.3; radiusTubular: 0.03;" material="color:rgb(30, 230, 30);"></a-entity>
      </a-entity>

      <a-entity id="mirror"
                scale="1.0 1.0 1.0"
                rotation="0 0 0"
                position="0.0 1.5 -0.75"
                geometry="primitive:plane; width:1.6; height:2.0"
                aframe-mirror="color:#777; textureWidth:512; textureHeight:512;">
      </a-entity>

      <a-entity id="box"
                position="0.0 0.5 3"
                material="color:blue;"
                animation="property:position; to:0 2.5 3; loop:true; dur:1000; dir:alternate; easing:easeInOutQuad;"
                geometry="primitive:box; width:0.5; height:0.5; depth:0.5;">
      </a-entity>

      <a-entity id="ground"
                scale="1.0 1.0 1.0"
                rotation="-90 0 0"
                position="0.0 0.0 0.0"
                geometry="primitive:circle; radius:10;"
                material="color:rgb(255, 76, 64);">
      </a-entity>
    </a-scene>

  );
};

export default Metagascar;
