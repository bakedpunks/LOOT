import React from "react";
import metamaskIcon from "./metamask.svg";


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
        <a href="https://view.metagascar.com/metaLand.map.jsp" > <img class="img-fluid" src="/images/banner.png" /></a>
        <hr className="my-4" />
        Twitter : <a href="https://twitter.com/metagascar_com" >https://twitter.com/metagascar_com</a>

        <hr className="my-4" />
        Become a Loot Collector. Buy, sell and trade safely.
        <hr className="my-2" />
        Off Chain Loot Marketplace : <a href="https://app.nftrade.com/assets/bsc/0xfcca24751641d16fb1b5c8cadc4f7ddaad9e841d" >NFTrade.com</a>
        <hr className="my-2" />
        On Chain Loot Marketplace : <a href="https://app.nftrade.com/assets/bsc/0xda87c744715cb764545c2efc47b2bc48c8dd63ae" >NFTrade.com</a>
        <hr className="my-1" />
        <a href="https://docs.google.com/spreadsheets/d/1bZ0pilH90pMiXZgzkofQTg57nqiE1m9Jp1gnH9UeHLA/edit?usp=sharing">Loot Rarity</a> — Loot attributes and rarities sheet by @AustinGreen
        <hr className="my-1" />
        <p className="lead">
            Contract Address : <a href="https://bscscan.com/token/0xda87c744715cb764545c2efc47b2bc48c8dd63ae" >0xda87c744715cb764545c2efc47b2bc48c8dd63ae</a>
        </p>
        <hr className="my-2" />
        On Chain Mixed Martial Arts(MMA) Loot Marketplace : <a href="https://app.nftrade.com/assets/bsc/0x48bf76b0dcc1326ae962b9301c40ee1ea399e186" >NFTrade.com</a>
        <hr className="my-1" />
        <a href="https://docs.google.com/spreadsheets/d/1aP2LCB5VbnVTuCbhKAsZTIz2NAvSYMbg0k8y5oI0w58/edit?usp=sharing">Loot Rarity</a> — Loot attributes and rarities sheet by @AustinGreen
        <hr className="my-2" />
        On Chain Binance MetaHuman Marketplace : <a href="https://app.nftrade.com/assets/bsc/0x380af994527beb7e0fb12f81195fb6f02a07e125" >NFTrade.com</a>
        <hr className="my-1" />
        <a href="https://docs.google.com/spreadsheets/d/1k6HJZDNf4vDFJ9qkJspGn9jnd5mWYR6HkvE4m_3FL-k/edit?usp=sharing">Loot Rarity</a> — Loot attributes and rarities sheet by @AustinGreen
        <hr className="my-2" />
        On Chain Polygone MetaHuman Marketplace : <a href="https://opensea.io/collection/metahumanloot" >Opensea.com</a>
        <hr className="my-1" />
        <a href="#">Loot Rarity</a> — Loot attributes and rarities sheet by @AustinGreen
        <hr className="my-1" />
        <p className="lead">
            Contract Address : <a href="https://polygonscan.com/token/0x666659a8ca809c431ce9479a261b9f03cb372016" >0x666659a8ca809c431ce9479a261b9f03cb372016</a>
        </p>

        <hr className="my-4" />
        #BinanceSmartChain
        #Binance
        #BNB
        #Ethereum
        #NFTCommunity
        #Lootproject
        #mint
        #loot
        #Polygone
        #metagascar

        <hr className="my-4" />
        Hurry up only 60k To Be Minted. Only 0.02 bnb cost

        <hr className="my-4" />
        <a href="https://binanceloot.medium.com/how-to-mint-loot-nft-or-trade-on-nftrade-mint-your-very-first-loot-nft-on-binance-smart-chain-51c6fd1aceef">How To Mint Loot Nft or Trade On Nftrade Mint Your Very First Loot NFT On Binance Smart Chain</a>

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
        Example Bags Binance Loot Characters
        <hr className="my-2" />
        <div className="row">
            {itemschar}
        </div>
        <hr className="my-4" />
        Example Bags On Chain Mixed Martial Arts(MMA) Loot
        <hr className="my-2" />
        <div className="row">
            {itemsonchainmma}
        </div>
      </div>
      <div className="container">
        <hr className="my-4" />
            Binance Loot @ 2021 Binance Loot Project Inc. All rights reserved.
        <hr className="my-4" />
      </div>
    </div>

  );
};

export default ConnectToMetamask;
