import React from "react";

export default function Home() {
  return (
    <>
      <div className="bg-light text-center p-5">
        <h1 className="display-5">Fresh Microgreens Delivered</h1>
        <p className="lead">Locally grown. Organic. Delivered to your door.</p>
        <a href="#shop" className="btn btn-success">
          Shop Now
        </a>
      </div>

      <div className="container py-5" id="shop">
        <h2 className="mb-4 text-center">Available Microgreens</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200?text=Sunflower+Microgreens"
                className="card-img-top"
                alt="Sunflower Microgreens"
              />
              <div className="card-body">
                <h5 className="card-title">Sunflower Microgreens</h5>
                <p className="card-text">
                  Crunchy, nutty flavor. Perfect for salads or sandwiches.
                </p>
                <p>
                  <strong>$5.99 / box</strong>
                </p>
                <a href="#" className="btn btn-success w-100">
                  Order Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200?text=Radish+Microgreens"
                className="card-img-top"
                alt="Radish Microgreens"
              />
              <div className="card-body">
                <h5 className="card-title">Radish Microgreens</h5>
                <p className="card-text">
                  Spicy kick and rich in nutrients. Great in wraps.
                </p>
                <p>
                  <strong>$6.49 / box</strong>
                </p>
                <a href="#" className="btn btn-success w-100">
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/400x200?text=Pea+Shoots"
                className="card-img-top"
                alt="Pea Shoots"
              />
              <div className="card-body">
                <h5 className="card-title">Pea Shoots</h5>
                <p className="card-text">
                  Sweet and tender shoots, rich in vitamins A, C, and K.
                </p>
                <p>
                  <strong>$5.49 / box</strong>
                </p>
                <a href="#" className="btn btn-success w-100">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
