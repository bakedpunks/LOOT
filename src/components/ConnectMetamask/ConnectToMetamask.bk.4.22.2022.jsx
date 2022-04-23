import React, { PureComponent } from "react";
import metamaskIcon from "./metamask.svg";

import Web3 from 'web3';

//import { Entity, Scene } from "aframe-react";
import "./styles.css";
import "aframe";
import {Entity, Scene} from 'aframe-react';

import Environment from "./Environment";
import InteractiveBox from "./InteractiveBox";
import "aframe-event-set-component"; // NB: This enables event-set__click and such like, see https://www.npmjs.com/package/aframe-event-set-component
import AutoDetectControllers from "./AutoDetectControllers";
import "networked-aframe";

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


const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          Metagascar
        </h1>
        The Metaverse is open, and the rocketships of explorers have been dispatched! The first MetaIsland to be discovered by the Alpha Explorer "Meta" has been dubbed Metagascar. Here you will find a thriving community of unique MetaHumans who reside in their equally unique MetaHomes. On the island of Metagascar you will find various facet's of social activity including friendship, dating, and of course what island would be complete without messages in a bottle!
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
        <hr className="my-4" />

      </div>
      <hr className="my-4" />

      <a-scene
      class="aframebox"
      embedded
      >
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
         <AutoDetectControllers />

         <a-entity environment="preset: tron"></a-entity>

         <a-image src="#street" width="3" height="3" position="27 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="24 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="21 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="18 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="15 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="12 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="9 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="6 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="3 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="0 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="-3 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="-6 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="-9 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="-12 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="-15 0.02 -1.5" rotation="90 0 0" ></a-image>
         <a-image src="#street" width="3" height="3" position="-18 0.02 -1.5" rotation="90 0 0" ></a-image>



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
                   material="color: green" position="0 1 -5" scale="0.02 0.02 0.04" rotation="0 -65 0" >
         </a-entity>
         <a-entity obj-model="obj:#crate-obj"
                   material="color: green" position="20 1 -5" scale="0.02 0.02 0.04" rotation="0 -65 0" >
         </a-entity>

         <Entity geometry={{primitive: 'box', width: 5}} position="4 4 -5"/>

         <Entity primitive='a-box' color="red" position="0 0 -15"
         />
         <Entity primitive='a-sphere' color="green" position="-2 0 -3"/>
         <Entity primitive='a-cylinder' color="blue" position="2 0 -6" />

        <InteractiveBox position="1 2 -1" />

        <Entity
          primitive="a-box"
          color="red"
          position="0 0.5 -5"
          events={{
            click: connectToMetamask
          }}
          event-set__mouseenter="material.color: green"
          event-set__mouseleave="material.color: red"
        />

          <a-entity position="0 0 3.8" networked="template:#my-template;attachTemplateToLocal:false;" >
              <a-camera >
                <a-cursor />
              </a-camera>
          </a-entity>
      </a-scene>

      <div className="container">
        <hr className="my-4" />
            Metagascar &copy; 2021 Metagascar Project Inc. All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
