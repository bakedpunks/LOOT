import React, { useState, useEffect } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import MyCryptoBoyNFTDetails from "../MyCryptoBoyNFTDetails/MyCryptoBoyNFTDetails";
import Loading from "../Loading/Loading";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import Web3 from "web3";

import { useContext } from 'react';

const MyCryptoBoys = ({
  accountAddress,
  cryptoBoys,
  balanceOf,
  selectedpunkid,
  totalTokensOwnedByAccount,
  loadMorePunks,
  myPunks,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoBoys, setMyCryptoBoys] = useState([]);
  const [state, setState] = useState(0);
  //const [items, setItems] = useState([]);

  function onPressCard() {
    //Alert.alert('You selected the card!');
      window.alert('Loading Punks');
  }
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  useEffect(() => {
    if (cryptoBoys.length !== 0) {
      if (cryptoBoys[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_boys = cryptoBoys.filter(
      (cryptoboy) => cryptoboy.currentOwner === accountAddress
    );
    setMyCryptoBoys(my_crypto_boys);
  }, [cryptoBoys]);

  const elements = cryptoBoys;

  const items = []
//  const items = []

  for (const [index, value] of elements.entries()) {
    if(accountAddress == value){
          var s = index+"";
          var newImageUrl = '/images/loot-characters/' + s + '.png';
          var newLinkUrl = '/mint?punkid=' + index;
      items.push(<div class="card col-md-4" ><img src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5><p class="card-text">OWNER {value}</p></div></div>)
    }
  }

  let query = useQuery();




//  const totalTokensOwnedByAccountLoot = loot.methods.totalSupply();

  return (
    <div >
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of Metagascar Homes Minted {totalTokensOwnedByAccount} / 8000
          </h5>
        </div>
      </div>
      <hr className="my-4" />
      <div class="card col-md-12 text-center">
        <div class="card-body">
          <h5 class="card-title">You Own {balanceOf} Home(s)</h5>
        </div>
      </div>
        <div class="container">
      <div className="row">
        {items}
      </div>
        </div>

      <hr className="my-4" />
      Metagascar.com
    </div>
  );
};


export default MyCryptoBoys;
