import React from "react";
import metamaskIcon from "./metamask.svg";


const items = []

for (let i = 0; i < 10; i++) {
        const rand = Math.floor(Math.random() * 9999);;
        var index = rand;
        var s = index+"";
        while (s.length < 4) s = "0" + s;
        var newImageUrl = '/images/punks/punk-' + s + 'x4.png';
        items.push(<img src={newImageUrl} alt={rand} />)
}

const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">
        BakedPunks NFT Marketplace
      </h1>
      <p className="lead">
        This is an NFT marketplace where you can claim, buy and sell your BakedPunks.
      </p>
      <hr className="my-4" />
      <p className="lead">
      What is a BakedPunk?
      BakedPunk is an unique one of a kind Non-Fungible Token (NFT) on Binance.
      By minting a BakedPunk, you become the proud owner of the very first punk NFT on the Binance network.
      What’s more is, there can only ever be 10,000 punks.
      When you decide to mint one, you will receive a unique-one-of-a-kind
      BakedPunk with proof of ownership stored on the Binance Smart Chain network. Who knows?
      Your very first BakedPunk NFT may be worth your first house or car!
      </p>
      <p className="lead">
      <div>
        {items}
      </div>
      </p>
      <hr className="my-4" />
      <p className="lead">
          Contract Address : <a href="https://bscscan.com/token/0xead759ec13b02c21ae87044f009ce97c1c72371f" >0xea...371f</a>
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
