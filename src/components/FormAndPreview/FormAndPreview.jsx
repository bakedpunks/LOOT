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
    };
  }



  Load_New_Image= async (e)=>{
      this.state.punkid =e.target.value;
      //if(this.state.punkid<1001 || this.state.punkid>8000){
        //this.state.punkid = 1001
        //window.alert('Select Home Number From 1001 to 8000');
      //}
      this.props.punksOfferedForSale(this.state.punkid);
      var s = this.state.punkid+"";
      while (s.length < 4) s = "0" + s;

      var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
      this.setState({
        cryptoBunkImageURL : newImageUrl

      })
    //  window.alert('Not Available: Home Owner ' + tmp);

    }

  componentDidMount = async () => {

    window.scrollTo(0, 0);
    console.log(this.props);
    let punkid = new URLSearchParams(this.props.location.search).get( "punkid" );
    if(punkid === '' || punkid === null || punkid === undefined)punkid = "1001";
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
<h5 class="card-title">Home Owner {this.props.punkOwner}</h5>
<h5 class="card-title">{this.props.lotSize}</h5>
<h5 class="card-title">{this.props.homeSize}</h5>
<p >Virtual Reality URL {this.props.homeUrl}</p>
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
