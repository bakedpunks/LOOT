import React from "react";
import metamaskIcon from "./metamask.svg";


const items = []

for (let i = 0; i < 10; i++) {
        const rand = Math.floor(Math.random() * 9999);;
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
      Binance Loot NFT First Project On #BinanceSmartChain  Smart Chain

      <hr className="my-4" />
      What is Loot? Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.

      <hr className="my-4" />
      Telegram : https://t.me/binancelootchat
      Twitter : https://binanceloot.io

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
        Connect Metamask{" "}
        <img
          src={metamaskIcon}
          alt="metamask-icon"
          style={{ width: "2rem", marginLeft: "0.5rem" }}
        />
      </button>
    </div>
  );
};

export default ConnectToMetamask;
