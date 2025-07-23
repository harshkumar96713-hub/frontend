import React from "react";

function Eductaion() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <img src="/media/images/education.svg" className="mb-5" />
        </div>
        <div className="col-6">
          <h1 className="mb-4 fs-2">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a className="anchor " href="https://zerodha.com/varsity/" style={{ textDecoration: "none" }}>
            Varsity
            <i class="fas fa-arrow-right"></i>
          </a>

          <p className="text-muted mt-3 mb-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a className="anchor" href="https://tradingqna.com/" style={{ textDecoration: "none" }}>
            TradingQ&A
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Eductaion;
