import React, { Component } from "react";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import db  from "../../database";

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

    const elements = this.props.cryptoBoys;

    const items = []

    const itemsPage = items.splice(this.state.currentPage*500, 500);
    const pages = []
    const pagesTwo = []
    const pages3 = []
    const pages4 = []
    const pages5 = []
    const pages6 = []
    const numberofPages = this.props.cryptoBoys.length/500;
        for (let j=1;j<11;j++) {
            var newLinkUrl = 'loadPage';
            let nftNumber = j;
            const home = db[j];
            var metalandImag = '/images/metaLand.north.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
            var title = home.address + ' ' + home.lotsize;
            var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
            if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
            pages[j] = <div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>
        }
        for (let j=11;j<21;j++) {
            var newLinkUrl = 'loadPage';
            let nftNumber = j;
            const home = db[j];
            var metalandImag = '/images/metaLand.south.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
            var title = home.address + ' ' + home.lotsize;
            var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
            if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
            pagesTwo[j] = <div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>
        }
        for (let j=21;j<31;j++) {
            var newLinkUrl = 'loadPage';
            let nftNumber = j;
            const home = db[j];
            var metalandImag = '/images/metaLand.north.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
            var title = home.address + ' ' + home.lotsize;
            var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
            if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
            pages3[j] = <div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>
        }
        for (let j=31;j<41;j++) {
            var newLinkUrl = 'loadPage';
            let nftNumber = j;
            const home = db[j];
            var metalandImag = '/images/metaLand.south.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
            var title = home.address + ' ' + home.lotsize;
            var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
            if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
            pages4[j] = <div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>
        }
        for (let j=41;j<51;j++) {
            var newLinkUrl = 'loadPage';
            let nftNumber = j;
            const home = db[j];
            var metalandImag = '/images/metaLand.north.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
            var title = home.address + ' ' + home.lotsize;
            var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
            if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
            pages5[j] = <div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>
        }
        for (let j=51;j<61;j++) {
            var newLinkUrl = 'loadPage';
            let nftNumber = j;
            const home = db[j];
            var metalandImag = '/images/metaLand.south.' + home.drivewayStyle.replaceAll(" ", "") + '.png';
            var title = home.address + ' ' + home.lotsize;
            var divClass = 'col-sm m-0 p-0 bottom bg-primary text-center';
            if(nftNumber ==this.state.punkid )divClass = 'col-sm m-0 p-0 bottom bg-primary bg-secondary text-white text-center';
            pages6[j] = <div class={divClass} ><img width="100%" src={metalandImag} title={title} id={nftNumber} value={nftNumber} onClick={this.Load_New_Image} /></div>
        }
    return (
      <div class="container">
      <div class="container  m-0 p-0">
      <div class="row m-0 p-0">
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.top.l.png"  /></div>
            {pages}
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.top.png"  /></div>
      </div>
      <div class="row m-0 p-0">
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.l.png"  /></div>
            {pagesTwo}
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.png"  /></div>
      </div>
      <div class="row m-0 p-0">
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.top.l.png"  /></div>
            {pages3}
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.top.png"  /></div>
      </div>
      <div class="row m-0 p-0">
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.middle.l.png"  /></div>
            {pages4}
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.middle.png"  /></div>
      </div>
      <div class="row m-0 p-0">
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.top.l.png"  /></div>
            {pages5}
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.top.png"  /></div>
      </div>
      <div class="row m-0 p-0">
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.middle.l.png"  /></div>
            {pages6}
            <div class="col-sm m-0 p-0 bottom bg-primary text-center" ><img width="100%" src="/images/metaLand.link.center.middle.middle.png"  /></div>
      </div>
      </div>

      <hr className="my-4" />
      <a href="https://map.metagascar.com/#map=16/35.2026/-116.1401" ><img class="img-fluid" src="/images/mapview.osm.png" /></a>
      <hr className="my-4" />

        <hr className="my-4" />
            Metagascar &copy; 2021 Metagascar Project Inc. All rights reserved.
        <hr className="my-4" />
      </div>
    );
  }
}

export default AllCryptoBoys;
