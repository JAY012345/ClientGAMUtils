import React from "react";
import HomePage from "../Components/HomePage";
import "../CSS/dashboard.css";

const Dashboard = () => {
  return (
    <React.Fragment>
      <HomePage />
      <div className="container">
        <div className="containerDashboard">
          <div class="container px-4 px-lg-5">
            <h2 class="text-center mt-0">Our Services</h2>
            <hr class="divider" />
            <div class="row gx-4 gx-lg-5">
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-gem fs-1 text-primary"></i>
                  </div>
                  <h3 class="h4 mb-2">Email Signature</h3>
                  <p class="text-muted mb-0">
                    Our themes are updated regularly to keep them bug free!
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-laptop fs-1 text-primary"></i>
                  </div>
                  <h3 class="h4 mb-2">Add Users</h3>
                  <p class="text-muted mb-0">
                    All dependencies are kept current to keep things fresh.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-globe fs-1 text-primary"></i>
                  </div>
                  <h3 class="h4 mb-2">Email Label</h3>
                  <p class="text-muted mb-0">
                    You can use this design as is, or you can make changes!
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-heart fs-1 text-primary"></i>
                  </div>
                  <h3 class="h4 mb-2">Update Users</h3>
                  <p class="text-muted mb-0">
                    Is it really open source if it's not made with love?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
