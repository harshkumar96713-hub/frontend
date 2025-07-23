import React from "react";
import "../css/stats.css";
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6  p-5">
          <h1 className=" mb-5 fs-2">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="mb-5 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="mb-5 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a className="anchor" href="#" style={{ textDecoration: "none" }}>
              Our philosophies
            </a>
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="mb-5 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="mb-5 text-muted">
            With initiatives like{" "}
            <a className="anchor" href="#" style={{ textDecoration: "none" }}>
              Nudge
            </a>{" "}
            and{" "}
            <a className="anchor" href="#" style={{ textDecoration: "none" }}>
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            className="mt-5 ms-5"
            src="/media/images/ecosystem.png"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a className="anchor mx-5" href="#"style={{ textDecoration: "none" }}>
              Explore our products <i class="fas fa-arrow-right"></i>
            </a>
            <a className="anchor" href="#"style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
