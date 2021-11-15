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

  Load_New_Image= async (e)=>{
      this.state.punkid =e.target.value;
      if(this.state.punkid<1 || this.state.punkid>8000){
        this.state.punkid = 1
        //window.alert('Select Home Number From 1001 to 8000');
      }

      const home = db[this.state.punkid];
      var tmpLotSize = home.lotsize + "";
      this.state.gasScore = tmpLotSize.substring(9,tmpLotSize.indexOf(" Square Feet"));
      this.props.punksOfferedForSale(this.state.punkid);
      var s = this.state.punkid+"";
      while (s.length < 4) s = "0" + s;

      var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
      this.setState({
        cryptoBunkImageURL : newImageUrl
      })



//      this.state.gasScore = this.props.lotSize.substring(9, this.props.lotSize.indexOf(" Square Feet"));
      //this.state.gasScore = (8000/this.state.punkid) * 3;
      window.alert('Not Available: Home Owner ' + home.lotsize);

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
    this.props.claimPunk(
      this.state.punkid
    );
  };





  render() {



    return (
      <div>

      <hr className="my-4" />
        <div class="container">
        <div class="card col-md-12 text-center" >
                    <div class="card-body">
    <h6 class="card-subtitle mb-2">Mint Price 0.1 ETH</h6>

              <hr className="my-4" />
<h5 class="card-title">{this.props.homeAddress}, Metagascar</h5>
<h5 class="card-title">Home NO {this.state.punkid}</h5>
<h5 class="card-title">{this.props.lotSize}</h5>
<h5 class="card-title">{this.props.homeSize}</h5>
<p >Metaverse Link {this.props.homeUrl}</p>
<p >Home Owner {this.props.punkOwner}</p>
<p >Gas Score {this.state.gasScore}</p>
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
    Opensea Owner
  </button>
</p>

                    </div>
        </div>
        </div>

        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
          <div className="col-md-12">
            <div>
              <label htmlFor="punkId">Enter Home ID</label>
              <input
                required
                type="number"
                name="punkid"
                id="punkid"
                value={this.state.punkid}
                className="form-control"
                placeholder="Enter Punk Id"
                onChange={(e) =>
                  this.Load_New_Image(e)
                }
              />
            </div>
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

        <hr className="my-4" />
        metagascar.com
      </div>
    );
  }
}

export default FormAndPreview;
