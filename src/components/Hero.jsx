import React from "react";

export default function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">uNotes</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">A web app that allows you to take notes!</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
