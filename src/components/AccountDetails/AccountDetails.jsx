import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">Metagascar Metaverse</h1>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">
                Metagascar Contract Address : 0xf286e4955557361a7d245358b0d47a3f5c735b2e
            </p>
          </div>
        </div>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">Account address :</p>
            <h4>{accountAddress}</h4>
            <p className="lead">Account balance :</p>
            <h4>{accountBalance} ETH</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
