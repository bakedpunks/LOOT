import React from "react";
import metamaskIcon from "./metamask.svg";

import Web3 from 'web3';



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
        <img class="img-fluid" src="/images/banner.png" />
        <hr className="my-4" />
        Twitter : <a href="https://twitter.com/metagascar_com" >https://twitter.com/metagascar_com</a>

        <hr className="my-4" />

        Activities :
        Education, Entertainment, Business Meeting, Physical Training, Art Show, Date Night, Building, Designing …
        <hr className="my-4" />
        Jobs :
        Educator, Physical Trainer, Judge, Lawyer, Juror, Accountant, Entertainer, Metagascar Home Shopping Network, News Reporter ...
        <hr className="my-4" />
        Smart Contracts
        <hr className="my-1" />
        Metagascar Properties on Ethereum
        https://etherscan.io/token/0xf286e4955557361a7d245358b0d47a3f5c735b2e
        <hr className="my-4" />
        Metagascar Properties on Polygon
        https://polygonscan.com/token/0xff0d44586aa09047e32b28f0452e40c90bd679fe
        <hr className="my-4" />
        Metahuman on Polygon
        https://polygonscan.com/token/0x666659a8ca809c431ce9479a261b9f03cb372016
        <hr className="my-4" />
        Metaperson on Polygon
        https://polygonscan.com/token/0x0bb090051e2f3da6271edab60a6daa9806c58a90
        <hr className="my-4" />
        LA Punks on Polygon - the role attribute of “LA Punks” indicates the type of job the owner of this NFT can perform in Metagascar. If you own more than one “LA Punk” with a specific role, you are considered to be a hiring manager.
        https://opensea.io/collection/la-punks
        <hr className="my-4" />
        Gastonian Punks on Polygon, The owner of Gastonian Punks NFT is considered to be a naturalized Citizen of Metagascar, Citizens of Metagascar are called Gastonians. All Gasntonians can participate in Jury Trials as a Juror.  As a Gastonian Punk you can also Vote in a Presidential primary election in Metagascar.
        https://opensea.io/collection/gastonian-punks
        <hr className="my-4" />
        Gastonian Punks OG on Polygon, The owner of Gastonian Punks OG are natives of Metagascar, they are also Citizens of Metagascar and can participate in  Jury Trials as a Juror. As a Gastonian Punks OG you can run for president of Metagascar. As a Gastonian Punks OG you can also Vote for Presidential elections in Metagascar.
        https://opensea.io/collection/gastonian-punks-1
        <hr className="my-4" />
        Metagascar $GAS Token Binance Smart Chain
        https://bscscan.com/token/0x9183278e4c99bf2178c9ec0c06897d06e579f82c
        <hr className="my-4" />
        Google Sheets
        <hr className="my-1" />
        Metagascar Properties with street names and URL link to Social Virtual Reality Experience hosted on Mozilla Hubs, developed using Spoke, Blender and Sketchfab.
        https://docs.google.com/spreadsheets/d/15F9EiYA7qVLy1OwwIACgJmLK0K6Kkr4t92C3FJlIAX8/edit?usp=sharing
        <hr className="my-4" />
        Metagascar Metahuman - detail description of avatar stored on-chain
        https://docs.google.com/spreadsheets/d/1Xw8_Y1CfjH9UZ-5q9brYiYqrsc7Oq-5Jj4S9-FymOVY/edit?usp=sharing
        <hr className="my-4" />
        Metagascar Metaperson - simple description of avatar stored on-chain
        https://docs.google.com/spreadsheets/d/1oRtiBK7-KLgEXgOIO8YjxZbdtPVX1waHSbhKlnJJMY4/edit?usp=sharing
        <hr className="my-4" />
        Social Media
        <hr className="my-1" />
        Twitter : https://twitter.com/metagascar_com
        Twitter : https://twitter.com/metagascar_
        Discord : https://discord.gg/p6y2v8xQp3
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
      </div>

      <div className="container">
        <hr className="my-4" />
            Metagascar &copy; 2021 Metagascar Project Inc. All rights reserved.
        <hr className="my-4" />
      </div>
    </div>

  );
};

export default ConnectToMetamask;
