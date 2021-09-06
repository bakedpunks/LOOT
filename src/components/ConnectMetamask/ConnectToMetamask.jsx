import React from "react";
import metamaskIcon from "./metamask.svg";


const items = []

for (let i = 0; i < 2; i++) {
        const rand = Math.floor(Math.random() * 2000);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot/' + s + '.png';
        items.push(<img src={newImageUrl} alt={rand} />)
}

const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">
        Binance Loot
      </h1>
      <p className="lead">
      First Loot Project On Binance Smart Chain That Rewards Holders

      <hr className="my-4" />
      What is Loot? Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.

      <hr className="my-4" />
      Telegram : <a href="https://t.me/binancelootchat" >https://t.me/binancelootchat</a>
      <hr className="my-4" />
      Twitter : <a href="https://twitter.com/Binanceloot" >https://twitter.com/Binanceloot</a>
      <hr className="my-4" />
      Marketplace : <a href="https://app.nftrade.com/assets/bsc/0x2041481b4484851d03df3bddd6127bcb44b01bcf" >Marketplace</a>
      <hr className="my-4" />
      #BinanceSmartChain
      #Binance
      #BNB
      #Ethereum
      #NFTCommunity
      #Lootproject
      #mint
      #cryptopunks

      <hr className="my-4" />
      Hurry up only 60k To Be  Minted
      Only 0.01 bnb cost

      </p>
      <hr className="my-4" />
      <p className="lead">
      <div>
        {items}
      </div>
      </p>
      <hr className="my-4" />
      <p className="lead">
          Contract Address : <a href="https://bscscan.com/token/0x2041481B4484851d03DF3BdDD6127bCB44b01Bcf" >0x20...1Bcf</a>
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
  );
};

export default ConnectToMetamask;
