import React, { Component } from "react";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import Loot from './index.js';



class AllCryptoBoys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      cryptoBoys: null,
      currentPage: 0,
    };
  }

  componentDidMount = async () => {
  //  await this.props.setMintBtnTimer();
      window.scrollTo(0, 0);
      console.log(this.props);
      let pageid = new URLSearchParams(this.props.location.search).get( "pageid" );
      if(pageid === '' || pageid === null || pageid === undefined)pageid = "0";
      this.setState({ currentPage: pageid });
//      window.alert('Function ' + pageid);

  };
  loadPage = (e) => {
    e.preventDefault();
//    window.alert('Function ' + e.target.id);
    this.setState({ currentPage:  e.target.id });

  }
  callLoadMorePunks = (e) => {
    e.preventDefault();
    this.props.loadMorePunks();
  };
  callGoToPunk = (e) => {
    e.preventDefault();
//    window.alert("Non-Ethereum browser detected. You should consider trying MetaMask! " + e.target.id);
//    const history = useHistory();
//    history.push('/mint')
//    this.state.cryptoPunkIndex = e.target.value;
//    this.props.history.push("#/mint");
    //this.props.loadMorePunks();
  };
  callViewPunkDetail = (e) => {
    var s = e.target.id +"";
//    while (s.length < 4) s = "0" + s;
    var newImageUrl = '/images/loot/' + s + '.png';
//    window.alert(e.target.src);
//    window.alert(newImageUrl);

    e.target.src = newImageUrl;
  };
  render() {

    const address = "0x2B82e8ce7c9A882C4aFb10cCbc020F85C6749f8D";
    let loot = new Loot("https://bsc-dataseed1.binance.org");

    // get OG Loot balance
    const ogCount = loot.numberOfOGBagsInWallet(address);

    // get More Loot balance
    const moreCount = loot.numberOfMoreBagsInWallet(address);

    // get OG and More Loot balance
    const allCount = loot.numberOfBagsInWallet(address, false);

    var lootIds =  loot.lootIdsInWallet(address, false);

    var bag =  loot.bag(1000);
    console.log(bag);


    const elements = this.props.cryptoBoys;

    const items = []


    for (const [index, value] of elements.entries()) {

      var s = index+"";
      var newImageUrl = '/images/loot-characters/' + s + '.png';
      var newLinkUrl = '/mint?punkid=' + index;
      items.push(<div class="card col-md-4" ><img src={newImageUrl} id={index} onClick={this.callViewPunkDetail} /><div class="card-body"> <h5 class="card-title">NO {index}</h5><p class="card-text"><small class="text-muted">OWNER {value}</small></p></div></div>)
//      items.push(<Link to={newLinkUrl} className="nav-link" ><img src={newImageUrl} /></Link>)
    }
    const itemsPage = items.splice(this.state.currentPage*500, 500);
    const pages = []
    const numberofPages = this.props.cryptoBoys.length/500;
        for (let j=0;j<numberofPages;j++) {
          var newLinkUrl = 'loadPage';
          pages[j] = <li class="page-item"><form onSubmit={this.loadPage} value={j} className="pt-4 mt-1" id={j} ><button  id={j} >{j}</button></form></li>;
        }

    return (
      <div class="container">
      {bag.neck}
      <p className="lead">
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-sm justify-content-center">
            {pages}
          </ul>
        </nav>
      </p>
      <div class="container">
    <div className="row">
      {itemsPage}
    </div>
      </div>
        <hr className="my-4" />
        BinanceLoot.io
      </div>
    );
  }
}

export default AllCryptoBoys;
