import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

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

  render() {
    const elements = this.props.cryptoBoys;

    const items = []


    for (const [index, value] of elements.entries()) {

      var s = index+"";
      while (s.length < 4) s = "0" + s;
      var newImageUrl = '/images/punks/punk-' + s + 'x4.png';
      var newLinkUrl = '/mint?punkid=' + index;
      items.push(<div class="card col-md-2" ><Link to={newLinkUrl} className="nav-link" ><img src={newImageUrl} /></Link><div class="card-body"> <h5 class="card-title">NO {index}</h5><p class="card-text"><small class="text-muted">OWNER {value}</small></p></div></div>)
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
      <p className="lead">
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-sm justify-content-center">
            {pages}
          </ul>
        </nav>
      </p>
      <hr className="my-4" />
      <div className="row">
        {itemsPage}
      </div>

        <hr className="my-4" />
        Askweedman.io
      </div>
    );
  }
}

export default AllCryptoBoys;
