import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";


class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      addressTo: "",
      punkOwner: null,
    };
  }



  Load_New_Image= async (e)=>{
      this.state.punkid =e.target.value;
      this.props.punksOfferedForSale(this.state.punkid);
      var s = this.state.punkid+"";
      while (s.length < 4) s = "0" + s;


      var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
      this.setState({
        cryptoBunkImageURL : newImageUrl

      })



    }

  componentDidMount = async () => {

    window.scrollTo(0, 0);
    console.log(this.props);
    let punkid = new URLSearchParams(this.props.location.search).get( "punkid" );
    if(punkid === '' || punkid === null || punkid === undefined)punkid = "0";
    this.setState({ punkid });
    //this.props.punksOfferedForSale(punkid);


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

          <img
              src={this.state.cryptoBunkImageURL}
              class="img-thumbnail col-md-6"
              onClick={this.callViewPunkDetail}
              />
              <hr className="my-4" />
<h5 class="card-title">Home NO {this.state.punkid}</h5>
<h6 class="card-subtitle mb-2 text-muted">Price {this.state.cryptoBoyPrice} BNB</h6>
<p class="card-text">OWNER : {this.state.punkOwner}</p>

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
        BinanceLoot.io
      </div>
    );
  }
}

export default FormAndPreview;
