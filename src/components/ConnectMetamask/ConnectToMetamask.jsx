import React from "react";
import metamaskIcon from "./metamask.svg";


const items = []
const itemsonchain = []

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
const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div>
    <div className="jumbotron">
      <h1 className="display-5">
        Binance Loot
      </h1>
      <p className="lead">
      First Loot Project On Binance Smart Chain With 60k Mint Limit.

      <hr className="my-4" />
      What is Loot? Loot is randomized adventurer gear generated and stored on-chain or off-chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.
      <hr className="my-4" />
      Telegram : <a href="https://t.me/binancelootchat" >https://t.me/binancelootchat</a>
      <hr className="my-4" />
      Twitter : <a href="https://twitter.com/Binanceloot" >https://twitter.com/Binanceloot</a>
      <hr className="my-4" />
      Become a Binance Loot Collector. Buy, sell and trade safely.
      <hr className="my-2" />
      Off Chain Loot Marketplace : <a href="https://app.nftrade.com/assets/bsc/0xfcca24751641d16fb1b5c8cadc4f7ddaad9e841d" >NFTrade.com</a>
      <hr className="my-2" />
      On Chain Loot Marketplace : <a href="https://app.nftrade.com/assets/bsc/0xda87c744715cb764545c2efc47b2bc48c8dd63ae" >NFTrade.com</a>
      <hr className="my-4" />
      #BinanceSmartChain
      #Binance
      #BNB
      #Ethereum
      #NFTCommunity
      #Lootproject
      #mint
      #loot

      <hr className="my-4" />
      Hurry up only 60k To Be Minted. Only 0.02 bnb cost

      </p>
      <hr className="my-4" />
      <p className="lead">
          Contract Address : <a href="https://bscscan.com/token/0xda87c744715cb764545c2efc47b2bc48c8dd63ae" >0xda87c744715cb764545c2efc47b2bc48c8dd63ae</a>
      </p>

      <hr className="my-4" />
      <button
        onClick={connectToMetamask}
        className="btn btn-primary d-flex align-items-center"
        style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
      >
        Connect Wallet
      </button>
    </div>
    <hr className="my-4" />
    Binance Loot Remaining - Minted 212 of 60000
    <hr className="my-2" />
    <div class="progress">
      <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
      aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" style={{width: "1%"}} >
        1% Complete
      </div>
    </div>
    <hr className="my-2" />
    <a href="https://docs.google.com/spreadsheets/d/1bZ0pilH90pMiXZgzkofQTg57nqiE1m9Jp1gnH9UeHLA/edit?usp=sharing">Loot Rarity</a> — Loot attributes and rarities sheet by @AustinGreen
    <hr className="my-4" />
    <div class="container">
        Example Bags On Chain
      <hr className="my-2" />
      <div className="row">
          {itemsonchain}
      </div>
      <hr className="my-4" />
        Example Bags Off Chain
      <hr className="my-2" />
      <div className="row">
          {items}
      </div>
        <hr className="my-4" />
            Binance Loot @ 2021 Binance Loot Project Inc. All rights reserved.
        <hr className="my-4" />
    </div>

    </div>

  );
};

export default ConnectToMetamask;
