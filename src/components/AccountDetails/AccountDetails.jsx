import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">Binance Loot NFT Marketplace</h1>
        <p className="lead">
          This is an NFT marketplace where you can Mint, Sell, Buy and Transfer Loot.
        </p>
        <hr className="my-4" />
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">
                Contract Address : 0x2041481B4484851d03DF3BdDD6127bCB44b01Bcf
            </p>
          </div>
        </div>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">Account address :</p>
            <h4>{accountAddress}</h4>
            <p className="lead">Account balance :</p>
            <h4>{accountBalance} BNB</h4>
            <hr className="my-4" />
            Telegram : <a href="https://t.me/binancelootchat" >https://t.me/binancelootchat</a>
            <hr className="my-4" />
            Twitter : <a href="https://twitter.com/Binanceloot" >https://twitter.com/Binanceloot</a>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
