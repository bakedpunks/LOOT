import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Web3 from "web3";

import CryptoPunks from "../abis/CryptoPunks.json";
import CryptoPunksMarket from "../abis/CryptoPunksMarket.json";

import AllCryptoBoys from "./AllCryptoBoys/AllCryptoBoys";
import FormAndPreview from "../components/FormAndPreview/FormAndPreview";
import AccountDetails from "./AccountDetails/AccountDetails";
import ContractNotDeployed from "./ContractNotDeployed/ContractNotDeployed";
import ConnectToMetamask from "./ConnectMetamask/ConnectToMetamask";
import Loading from "./Loading/Loading";
import Navbar from "./Navbar/Navbar";
import MyCryptoBoys from "./MyCryptoBoys/MyCryptoBoys";
import PunksForSale from "./PunksForSale/PunksForSale";
import BuyPunk from "./BuyPunk/BuyPunk";

import {useLocation} from "react-router-dom";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountAddress: "",
      accountBalance: "",
      selectedpunkid: "",
      punksforsalebuttonhtml: "Load Punks",
      cryptoBoysContract: null,
      cryptoBoysMarketContract: null,
      cryptoBoysCount: 0,
      cryptoPunksLoadCount: 0,
      cryptoPunksBuyLoadCount: 0,
      cryptoBoys: [],
      cryptoBoysForSale: [],
      loading: true,
      metamaskConnected: false,
      contractDetected: false,
      totalTokensMinted: 0,
      balanceOf: 0,
      salePrice: "0",
      totalTokensOwnedByAccount: 0,
      nameIsUsed: false,
      colorIsUsed: false,
      colorsUsed: [],
      lastMintTime: null,
      cryptoBoyPrice: 0,
      currentPage: 0,
    };
  }

  componentWillMount = async () => {
    await this.loadWeb3();
    await this.loadBlockchainData();
  };

  setMintBtnTimer = () => {
    const mintBtn = document.getElementById("mintBtn");
    if (mintBtn !== undefined && mintBtn !== null) {
      this.setState({
        lastMintTime: localStorage.getItem(this.state.accountAddress),
      });
      this.state.lastMintTime === undefined || this.state.lastMintTime === null
        ? (mintBtn.innerHTML = "Mint My Crypto Boy")
        : this.checkIfCanMint(parseInt(this.state.lastMintTime));
    }
  };

  checkIfCanMint = (lastMintTime) => {
    const mintBtn = document.getElementById("mintBtn");
    const timeGap = 300000; //5min in milliseconds
    const countDownTime = lastMintTime + timeGap;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = countDownTime - now;
      if (diff < 0) {
        mintBtn.removeAttribute("disabled");
        mintBtn.innerHTML = "Mint My Crypto Boy";
        localStorage.removeItem(this.state.accountAddress);
        clearInterval(interval);
      } else {
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        mintBtn.setAttribute("disabled", true);
        mintBtn.innerHTML = `Next mint in ${minutes}m ${seconds}s`;
      }
    }, 1000);
  };

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      //window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  loadBlockchainData = async () => {
    if (window.web3) {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        this.setState({ metamaskConnected: false });
      } else {
        this.setState({ metamaskConnected: true });
        this.setState({ loading: true });
        this.setState({ accountAddress: accounts[0] });
        let accountBalance = await web3.eth.getBalance(accounts[0]);
        accountBalance = web3.utils.fromWei(accountBalance, "Ether");
        this.setState({ accountBalance });
        this.setState({ loading: false });
        const networkId = await web3.eth.net.getId();
        const networkData = CryptoPunks.networks[networkId];
        if (networkData) {
          this.setState({ loading: true });
          const cryptoBoysContract = web3.eth.Contract(
            CryptoPunks.abi,
            networkData.address
          );
  	const cryptoBoysMarketContract = web3.eth.Contract(
            CryptoPunksMarket.abi,
            networkData.address
          );

          this.setState({ cryptoBoysContract });
          this.setState({ cryptoBoysMarketContract });
  	      this.setState({ contractDetected: true });

          const totalTokensOwnedByAccount2 = await cryptoBoysContract.methods
            .punksRemainingToAssign()
            .call();

          const balanceOf = await cryptoBoysContract.methods
            .balanceOf(this.state.accountAddress)
            .call();

          let punkOwners = [];
          this.state.cryptoBoys = punkOwners;
          this.state.cryptoBoysForSale = [];
          this.state.balanceOf  = balanceOf + "";
          this.state.totalTokensOwnedByAccount  = totalTokensOwnedByAccount2 + "";
          this.state.punksforsalebuttonhtml = "Load Punks";
          this.setState({totalTokensOwnedByAccount:this.state.totalTokensOwnedByAccount});
          this.setState({balanceOf:this.state.balanceOf});
          this.setState({cryptoBoys:this.state.cryptoBoys});
          this.setState({cryptoBoysForSale:this.state.cryptoBoysForSale});
          this.setState({punksforsalebuttonhtml:this.state.punksforsalebuttonhtml});
          this.setState({currentPage:this.state.currentPage});


          for (let i = 0; i < 10000; i++) {
              this.state.cryptoBoysForSale[i]=0x00;
          }
          for (let i = 0; i < 200; i++) {
            (async () => {
                await this.loadPunksForSale(i*50,(i*50)+50);
            })();
          }
          for (let i = 0; i < 10000; i++) {
              this.state.cryptoBoys[i]=0x00;
          }
          for (let i = 0; i < 200; i++) {
            (async () => {
                await this.loadMorePunks(i*50,(i*50)+50);
            })();
          }

  	       this.setState({ loading: false });
        } else {
          this.setState({ contractDetected: false });
        }
      }
    } else {
      //window.alert('Must Install Metamask and Add Binance Network');
    }
  };

  connectToMetamask = async () => {
    if (window.web3) {
      await window.ethereum.enable();
      this.setState({ metamaskConnected: true });
      window.location.reload();
    } else {
      window.alert('Must Install Metamask and Add Binance Network');
    }
  };

mintMyNFT = async (punkIndex, punkPrice) => {
  this.setState({ loading: true });
    this.state.cryptoBoysMarketContract.methods
      .offerPunkForSale(punkIndex, punkPrice)
      .send({ from: this.state.accountAddress })
      .on("confirmation", () => {
        localStorage.setItem(this.state.accountAddress, new Date().getTime());
        this.setState({ loading: false });
        window.location.reload();
      });
};


reservePunksForOwner = async (maxForThisRun) => {
  this.state.cryptoBoysContract.methods
    .reservePunksForOwner(maxForThisRun)
    .send({ from: this.state.accountAddress })
    .on("confirmation", () => {
      localStorage.setItem(this.state.accountAddress, new Date().getTime());
      this.setState({ loading: false });
      window.location.reload();
    });
}

offerPunkForSale = async (punkIndex, punkPrice) => {
  this.setState({ loading: true });


  const price = window.web3.utils.toWei(punkPrice.toString(), "Ether");
    this.state.cryptoBoysMarketContract.methods
      .offerPunkForSale(punkIndex, price)
      .send({ from: this.state.accountAddress })
      .on("confirmation", () => {
        localStorage.setItem(this.state.accountAddress, new Date().getTime());
        this.setState({ loading: false });
        window.location.reload();
      });
};
claimPunk = async (punkIndex) => {
  this.setState({ loading: true });
    this.state.cryptoBoysMarketContract.methods
      .getPunk(punkIndex)
      .send({ from: this.state.accountAddress})
      .on("confirmation", () => {
        localStorage.setItem(this.state.accountAddress, new Date().getTime());
        this.setState({ loading: false });
        window.location.reload();
      });
};
punksOfferedForSale = async (punkIndex) => {

  let punkOwner = await this.state.cryptoBoysContract.methods
    .punksOfferedForSale(punkIndex)
    .call();

    const price = window.web3.utils.fromWei(punkOwner.minValue +'', "Ether");
    this.setState({ cryptoBoyPrice: price });
    return price;
};

buyPunk = async (punkIndex, punkPrice) => {
  this.setState({ loading: true });
  const price = window.web3.utils.toWei(punkPrice.toString(), "Ether");
    this.state.cryptoBoysMarketContract.methods
      .buyPunk(punkIndex)
      .send({ from: this.state.accountAddress, value: price })
      .on("confirmation", () => {
        localStorage.setItem(this.state.accountAddress, new Date().getTime());
        this.setState({ loading: false });
        window.location.reload();
      });
};
transferPunk = async (addressTo, punkIndex) => {
  this.setState({ loading: true });
    this.state.cryptoBoysContract.methods
      .transferPunk(addressTo, punkIndex)
      .send({ from: this.state.accountAddress})
      .on("confirmation", () => {
        localStorage.setItem(this.state.accountAddress, new Date().getTime());
        this.setState({ loading: false });
        window.location.reload();
      });
};
loadMorePunks = async () => {
  let incAmt = 10000;
  for (let i = this.state.cryptoPunksLoadCount; i < this.state.cryptoPunksLoadCount + incAmt && i < 10000; i++) {
    let punkOwner = await this.state.cryptoBoysContract.methods
      .punkIndexToAddress(i)
      .call();
    this.state.cryptoBoys.push(punkOwner);
    this.forceUpdate();
  }
  this.state.cryptoPunksLoadCount += incAmt;
};

loadMorePunks = async (from, to) => {
  for (let i = from; i < to; i++) {
    let punkOwner = await this.state.cryptoBoysContract.methods
      .punkIndexToAddress(i)
      .call();
    this.state.cryptoBoys[i]=punkOwner;
  }
  this.forceUpdate();
};

loadPunksForSale = async () => {

//  const mintBtn = document.getElementById("mintBtn25");
//  mintBtn.disabled = true;
  for (let i = this.state.cryptoPunksBuyLoadCount; i < 10000; i++) {
    this.state.punksforsalebuttonhtml = "Loading " + i + " of 9999";
    let punkOwner = await this.state.cryptoBoysContract.methods
      .punksOfferedForSale(i)
      .call();
      const price = window.web3.utils.fromWei(punkOwner.minValue +'', "Ether");
        this.state.cryptoBoysForSale[i]=price;
        this.forceUpdate();
      this.state.cryptoPunksBuyLoadCount += 1;
  }
  this.state.punksforsalebuttonhtml = "Done Loading";

};

loadPunksForSale = async (from, to) => {

//  const mintBtn = document.getElementById("mintBtn25");
//  mintBtn.disabled = true;
  for (let i = from; i < to; i++) {
    let punkOwner = await this.state.cryptoBoysContract.methods
      .punksOfferedForSale(i)
      .call();
      const price = window.web3.utils.fromWei(punkOwner.minValue +'', "Ether");
      if(price != 0x00){
        this.state.cryptoBoysForSale[i]=price;
        this.forceUpdate();
      }
  }
  this.forceUpdate();

};
getPunkOwner = async (punkIndex) => {
    let punkOwner = await this.state.cryptoBoysContract.methods
      .punkIndexToAddress(punkIndex)
      .call();
  return punkOwner;
};


  render() {
    return (
      <div className="container">
        {!this.state.metamaskConnected ? (
          <ConnectToMetamask connectToMetamask={this.connectToMetamask} />
        ) : !this.state.contractDetected ? (
          <ContractNotDeployed />
        ) : this.state.loading ? (
          <Loading />
        ) : (
          <>
            <HashRouter basename="/">
              <Navbar />
              <Route
                path="/"
                exact
                render={() => (
                  <AccountDetails
                    accountAddress={this.state.accountAddress}
                    accountBalance={this.state.accountBalance}
                  />
                )}
              />
              <Route
                path="/mint"
                render={(props) => (
                  <FormAndPreview
                    {...props}
                    mintMyNFT={this.mintMyNFT}
                    buyPunk={this.buyPunk}
                    reservePunksForOwner={this.reservePunksForOwner}
                    offerPunkForSale={this.offerPunkForSale}
                    claimPunk={this.claimPunk}
                    transferPunk={this.transferPunk}
                    nameIsUsed={this.state.nameIsUsed}
                    colorIsUsed={this.state.colorIsUsed}
                    colorsUsed={this.state.colorsUsed}
                    setMintBtnTimer={this.setMintBtnTimer}
                    punksOfferedForSale={this.punksOfferedForSale}
                    cryptoBoyPrice={this.state.cryptoBoyPrice}
                    getPunkOwner={this.getPunkOwner}
                    getMyPunks={this.getMyPunks}
                    />
                  )}
              />
              <Route
                path="/marketplace"
                render={(props) => (
                  <AllCryptoBoys
                    {...props}
                    accountAddress={this.state.accountAddress}
                    cryptoBoys={this.state.cryptoBoys}
                    totalTokensMinted={this.state.totalTokensMinted}
                    changeTokenPrice={this.changeTokenPrice}
                    toggleForSale={this.toggleForSale}
                    buyCryptoBoy={this.buyCryptoBoy}
                    loadMorePunks={this.loadMorePunks}
                    currentPage={this.state.currentPage}
                  />
                )}
              />
              <Route
                path="/my-tokens"
                render={() => (
                  <MyCryptoBoys
                    loadMorePunks={this.state.loadMorePunks}
                    accountAddress={this.state.accountAddress}
                    cryptoBoys={this.state.cryptoBoys}
                    balanceOf={this.state.balanceOf}
                    selectedpunkid={this.state.selectedpunkid}
                    totalTokensOwnedByAccount={
                      this.state.totalTokensOwnedByAccount
                    }
                  />
                )}
              />
              <Route
                path="/forsale"
                render={() => (
                  <PunksForSale
                    accountAddress={this.state.accountAddress}
                    cryptoBoysForSale={this.state.cryptoBoysForSale}
                    totalTokensMinted={this.state.totalTokensMinted}
                    changeTokenPrice={this.changeTokenPrice}
                    toggleForSale={this.toggleForSale}
                    buyCryptoBoy={this.buyCryptoBoy}
                    loadMorePunks={this.loadMorePunks}
                    loadPunksForSale={this.loadPunksForSale}
                    punksforsalebuttonhtml={this.state.punksforsalebuttonhtml}
                  />
                )}
              />
              <Route
                path="/buypunk"
                render={(props) => (
                  <BuyPunk
                    {...props}
                    mintMyNFT={this.mintMyNFT}
                    buyPunk={this.buyPunk}
                    reservePunksForOwner={this.reservePunksForOwner}
                    offerPunkForSale={this.offerPunkForSale}
                    claimPunk={this.claimPunk}
                    transferPunk={this.transferPunk}
                    nameIsUsed={this.state.nameIsUsed}
                    colorIsUsed={this.state.colorIsUsed}
                    colorsUsed={this.state.colorsUsed}
                    setMintBtnTimer={this.setMintBtnTimer}
                    punksOfferedForSale={this.punksOfferedForSale}
                    cryptoBoyPrice={this.state.cryptoBoyPrice}
                    getPunkOwner={this.getPunkOwner}
                    getMyPunks={this.getMyPunks}
                    />
                  )}
              />
		</HashRouter>
	  </>
        )}
      </div>
    );
  }
}

export default App;
