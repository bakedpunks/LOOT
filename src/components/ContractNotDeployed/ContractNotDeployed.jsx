import React from "react";

const ContractNotDeployed = () => {
  return (
    <div className="jumbotron">
      <h3>BakedPunks Contract Not Deployed To This Network.</h3>
      <hr className="my-4" />
      <p className="lead">
        Please Connect Metamask to Binance Smart Chain Network.  
        <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" >Connecting MetaMask to Binance Smart Chain</a>

      </p>
    </div>
  );
};

export default ContractNotDeployed;
