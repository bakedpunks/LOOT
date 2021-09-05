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
      this.props.punksOfferedForSale(this.state.punkid);
      this.state.cryptoBoyPrice = this.state.salePrice
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


  //  window.alert('Function ' + this.props.cryptoBoyPrice);
    var s = punkid +"";
    while (s.length < 4) s = "0" + s;


    var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
    this.setState({
      cryptoBunkImageURL : newImageUrl

    })
//    this.state.punkid = new URLSearchParams(useLocation().search).get("punkid")
    await this.props.setMintBtnTimer();
  };

  callClaimPunkFromApp = (e) => {
    e.preventDefault();
    this.props.claimPunk(
      this.state.punkid
    );
  };

  callViewPunkDetail = (e) => {
    var s = this.state.punkid +"";
    while (s.length < 4) s = "0" + s;


    var newImageUrl = '/images/punks.v2/punk-' + s + '.png';

    if(newImageUrl === this.state.cryptoBunkImageURL){
      newImageUrl = '/images/punks/punk-' + s + 'x8.png';
    }
    this.setState({
      cryptoBunkImageURL : newImageUrl

    })

  };




  render() {



    return (
      <div>

        <div class="container">
        <div class="card col-md-12 text-center" >
                    <div class="card-body">
                          <img
                              src={this.state.cryptoBunkImageURL}
                              class="img-thumbnail col-md-6"
                              onClick={this.callViewPunkDetail}
                              />
                              <hr className="my-4" />
    <h5 class="card-title">Punk NO {this.state.punkid}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Price {this.state.cryptoBoyPrice} BNB</h6>
    <p class="card-text">OWNER : {this.state.punkOwner}</p>

                    </div>
        </div>
        </div>
        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
            <div className="col-md-12">
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
        Askweedman.io
      </div>
    );
  }
}

export default FormAndPreview;
