import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
          {/* TODO change icons, make em work */}
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-12">
            <h5>Platform</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  GitHub
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  License
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Source Code
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
