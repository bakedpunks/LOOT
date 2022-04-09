import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';



import db  from "../../database";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      addressTo: "",
      gasScore: "",
      gasScoreLot: "",
      gasScoreHome: "",
      gasTotal: "",
      homeStyle: "",
    };
  }


  Load_New_URL= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Undeveloped"){
      window.alert('Virtual Reality Undeveloped');
    }else{
      const newWindow = window.open(newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }

  Load_New_URLOpensea= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Unassigned"){
      window.alert('Home Owner Unassigned');
    }else{
      const newWindow = window.open('https://opensea.io/' + newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }
  Load_New_URLOSM= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Unassigned"){
      window.alert('Home Owner Unassigned');
    }else{
      const newWindow = window.open(newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }
  Load_New_Image= async (e)=>{
      this.state.punkid =e.target.value;
      if (e.target.value ==undefined) {
        this.state.punkid =e.target.id;
      }
//      window.alert(this.state.punkid);
      if(this.state.punkid<1 || this.state.punkid>8000){
        this.state.punkid = 1
      }
      var developedLand = 1;
      const home = db[this.state.punkid];

      if (home.homeurl != "Undeveloped"){
          developedLand = 6;
      }
      var tmpLotSize = home.lotsize + "";
      this.state.gasScoreLot = tmpLotSize.substring(9,tmpLotSize.indexOf(" Square Feet"));
      this.state.gasScoreLot = this.state.gasScoreLot * 3;

      this.state.gasScoreHome = home.homesize.substring(9,home.homesize.indexOf(" Square Feet"));
      this.state.gasScoreHome = this.state.gasScoreHome * 2

      this.state.gasScore = (8001-this.state.punkid) * 18 * developedLand;
      this.props.punksOfferedForSale(this.state.punkid);

      this.state.homeStyle = home.homestyle;

      var s = this.state.punkid+"";
      while (s.length < 4) s = "0" + s;

      var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
      this.setState({
        cryptoBunkImageURL : newImageUrl
      })

      this.state.gasTotal = this.state.gasScoreLot + this.state.gasScore  + this.state.gasScoreHome;
      //this.state.gasScore = this.props.lotSize.substring(9, this.props.lotSize.indexOf(" Square Feet"));
      //window.alert('Not Available: Home Owner ' + home.lotsize);

    }

  componentDidMount = async () => {

    window.scrollTo(0, 0);
    console.log(this.props);
    let punkid = new URLSearchParams(this.props.location.search).get( "punkid" );
    if(punkid === '' || punkid === null || punkid === undefined)punkid = "1";
    this.setState({ punkid });
    this.props.punksOfferedForSale(punkid);


  };

  callClaimPunkFromApp = (e) => {
    e.preventDefault();
    if(this.state.punkid < 1001){
      window.alert('Minting Not Available for Home NO ' + this.state.punkid);
    }else if(this.props.punkOwner != 'Unassigned'){
      window.alert('Minting Not Available for Home NO ' + this.state.punkid);
    }else{
      this.props.claimPunk(
        this.state.punkid
      );
    }
  };





  render() {

    //const elements = this.props.cryptoBoys;

    const items = []
    const itemsHomes = []
    const itemsBottomHomes = []
    const itemsBottom = []

    let startHouse = Math.floor(this.state.punkid/20);

    if(this.state.punkid%20 >1){

    }

    if (startHouse==0 )startHouse=0;
    else if(this.state.punkid%20 ==0 ){
      startHouse = startHouse-1;
      startHouse = (startHouse * 20);
    }
    else startHouse = (startHouse * 20);


    let houseNumber = 1;
    for (let j = startHouse; j< (startHouse+10).valueOf(); j++) {
        let nftNumber = (startHouse + houseNumber).valueOf();
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.north.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
        if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
        items.push(<div class={divClass} ><small>NFT NO {nftNumber} <hr className="my-1" /> {home.address} </small></div>)
        houseNumber +=1;
    }
    houseNumber = 1;
    for (let j = startHouse; j< (startHouse+10).valueOf(); j++) {

        let nftNumber = (startHouse + houseNumber).valueOf();
        var newLinkUrl = '/mint?punkid=' + nftNumber;
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.north.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        itemsHomes.push(<div class="col-sm m-0 p-0 bottom" ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>)
        houseNumber +=1;
    }
    houseNumber = 11;
    for (let j = startHouse+10; j< (startHouse+20).valueOf(); j++) {
        let nftNumber = (startHouse + houseNumber).valueOf();
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.south.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
        if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
        itemsBottomHomes.push(<div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /> <small><hr className="my-1" /> {home.address} </small></div>)
        houseNumber +=1;
    }

    houseNumber = 11;
    for (let j = startHouse+10; j< (startHouse+20).valueOf(); j++) {
        let nftNumber = (startHouse + houseNumber).valueOf();
        const home = db[nftNumber];
        var metalandImag = '/images/metaLand.south.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
        var title = 'Lot Size ' + home.lotsize;
        var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
        if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
        itemsBottom.push(<div class={divClass} ><hr className="my-1" /> <small>NFT {nftNumber} </small></div>)
        houseNumber +=1;
    }
    return (
      <div>
<div class="container  m-0 p-0">
<div class="row m-0 p-0">
      {items}
</div>
<div class="row m-0 p-0">
      {itemsHomes}
</div>
</div>
<div class="container m-0 p-0">
<div class="row m-0 p-0">
      {itemsBottomHomes}
</div>
<div class="row m-0 p-0">
      {itemsBottom}
</div>
</div>

        <div class="container">
        <div class="card col-md-12 text-center" >
                    <div class="card-body">
    <h6 class="card-subtitle mb-2">Enter NFT NO</h6>
    <div>
      <input
        required
        type="number"
        name="punkid"
        id="punkid"
        value={this.state.punkid}
        className="form-control"
        placeholder="Enter Home NO"
        onChange={(e) =>
          this.Load_New_Image(e)
        }
      />
    </div>
              <hr className="my-4" />
<h5 class="card-title">{this.props.homeAddress}, Metagascar</h5>
<h5 class="card-title">Home NO {this.state.punkid}</h5>
<h5 class="card-title">{this.props.lotSize}</h5>
<h5 class="card-title">{this.props.homeSize}</h5>
<h5 class="card-title">{this.state.homeStyle}</h5>
<p >Metaverse Link {this.props.homeUrl}</p>
<p >Home Owner {this.props.punkOwner}</p>
<p >Map Url {this.props.mapUrl}</p>
<hr className="my-4" />
<h5 class="card-title">Metagascar $GAS Rewards</h5>
<hr className="my-4" />
<p >Neighborhood {this.state.gasScore}</p>
<p >Lot Size {this.state.gasScoreLot}</p>
<p >Home Size {this.state.gasScoreHome}</p>
<p >Total {this.state.gasTotal}</p>
<p >
  <button
    id="mintBtn22"
    style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
    type="submit"
    className="btn mt-4 btn-block btn-outline-primary"
    value={this.props.homeUrl}
    onClick={(e) =>
      this.Load_New_URL(e)
    }
  >
    Metaverse
  </button>
</p>
<p >
  <button
    id="mintBtn22"
    style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
    type="submit"
    className="btn mt-4 btn-block btn-outline-primary"
    value={this.props.punkOwner}
    onClick={(e) =>
      this.Load_New_URLOpensea(e)
    }
  >
    Opensea
  </button>
</p>
<p >
  <button
    id="mintBtn22"
    style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
    type="submit"
    className="btn mt-4 btn-block btn-outline-primary"
    value={this.props.mapUrl}
    onClick={(e) =>
      this.Load_New_URLOSM(e)
    }
  >
    Map
  </button>
</p>


        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
          <div className="col-md-12">
            Mint Price 0.1 ETH
            <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Mint
              </button>
              </div>
            </div>
          </div>
        </form>
                    </div>
        </div>
        </div>

          <hr className="my-4" />
              Metagascar &copy; 2021 Metagascar Project Inc. All rights reserved.
          <hr className="my-4" />
      </div>
    );
  }
}

export default FormAndPreview;
