import React from "react";
import metamaskIcon from "./metamask.svg";


const items = []

for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * 2000);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot/' + s + '.png';
        items.push(<div class="card col-md-4" ><img src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}

const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div>
    <div className="jumbotron">
      <h1 className="display-5">
        Binance Loot
      </h1>
      <p className="lead">
      First Loot Project On Binance Smart Chain That Rewards Holders

      <hr className="my-4" />
      What is Loot? Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.

      <hr className="my-4" />
      Telegram : <a href="https://t.me/binancelootchat" >https://t.me/binancelootchat</a>
      <hr className="my-4" />
      Twitter : <a href="https://twitter.com/Binanceloot" >https://twitter.com/Binanceloot</a>
      <hr className="my-4" />
      Marketplace : <a href="https://app.nftrade.com/assets/bsc/0x2041481b4484851d03df3bddd6127bcb44b01bcf" >Marketplace</a>
      <hr className="my-4" />
      #BinanceSmartChain
      #Binance
      #BNB
      #Ethereum
      #NFTCommunity
      #Lootproject
      #mint
      #cryptopunks

      <hr className="my-4" />
      Hurry up only 60k To Be  Minted
      Only 0.01 bnb cost

      </p>
      <hr className="my-4" />
      <p className="lead">
          Contract Address : <a href="https://bscscan.com/token/0x2041481B4484851d03DF3BdDD6127bCB44b01Bcf" >0x20...1Bcf</a>
      </p>

      <hr className="my-4" />
      <button
        onClick={connectToMetamask}
        className="btn btn-primary d-flex align-items-center"
        style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
      >
        Connect Wallet
      </button>
    </div>
    <div class="container">
        Example Bags
      <hr className="my-4" />
      <div className="row">
          {items}
      </div>
    </div>

    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section >
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" class="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Laravel</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    </div>

  );
};

export default ConnectToMetamask;
