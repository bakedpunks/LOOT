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
        Binance Loot NFT Marketplace
      </h1>
      <p className="lead">
        This is an NFT marketplace where you can claim, buy and sell your Binance Loot.
      </p>
      <hr className="my-4" />
      <p className="lead">
      What is Loot?
      Loot is randomized adventurer gear generated and stored on chain.
Stats, images, and other functionality are intentionally omitted for others to interpret.
Feel free to use Loot in any way you want.
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
