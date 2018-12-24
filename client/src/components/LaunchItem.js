import React from "react";

function LaunchItem({
  launch: {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    launch_date_local
  }
}) {
  return (
    <div className="card card-body mb3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: {mission_name}</h4>
          <p>Launch Date: {launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
}

export default LaunchItem;
