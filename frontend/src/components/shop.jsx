import React from "react";

export default function Shop() {
  return (
    <>
      <div class="container py-5">
        <h2 class="mb-4 text-center">Available Microgreens</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/400x200?text=Sunflower+Microgreens"
                class="card-img-top"
                alt="Sunflower Microgreens"
              />
              <div class="card-body">
                <h5 class="card-title">Sunflower Microgreens</h5>
                <p class="card-text">
                  Crunchy, nutty flavor. Perfect for salads or sandwiches.
                </p>
                <p>
                  <strong>$5.99 / box</strong>
                </p>
                <a href="#" class="btn btn-success w-100">
                  Order Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/400x200?text=Radish+Microgreens"
                class="card-img-top"
                alt="Radish Microgreens"
              />
              <div class="card-body">
                <h5 class="card-title">Radish Microgreens</h5>
                <p class="card-text">
                  Spicy kick and rich in nutrients. Great in wraps.
                </p>
                <p>
                  <strong>$6.49 / box</strong>
                </p>
                <a href="#" class="btn btn-success w-100">
                  Order Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/400x200?text=Pea+Shoots"
                class="card-img-top"
                alt="Pea Shoots"
              />
              <div class="card-body">
                <h5 class="card-title">Pea Shoots</h5>
                <p class="card-text">
                  Sweet and tender shoots, rich in vitamins A, C, and K.
                </p>
                <p>
                  <strong>$5.49 / box</strong>
                </p>
                <a href="#" class="btn btn-success w-100">
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
