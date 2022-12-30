import React from "react";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden" style={{color:"blue"}}>Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
