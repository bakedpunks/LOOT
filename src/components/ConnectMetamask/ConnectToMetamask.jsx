import React, { PureComponent } from "react";
import metamaskIcon from "./metamask.svg";

import Web3 from 'web3';

//import { Entity, Scene } from "aframe-react";
import "./styles.css";
import "aframe";
import {Entity, Scene} from 'aframe-react';

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
        <img class="img-fluid" src="/images/main.logo.png" />
        <hr className="my-4" />
        <img class="img-fluid" src="/images/map.view.png" />



      </div>
      <hr className="my-4" />

      <a-scene embedded >
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
      <div className="container">
        <hr className="my-4" />
            Metagascar &copy; 2021 Metagascar Project Inc. All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
