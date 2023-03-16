import React from "react";
import HomePage from "../Components/HomePage";
import "../CSS/emailSignature.css";

const SetVacation = () => {

  return (
    <React.Fragment>
      <HomePage />

      <div className="container">
        <div className="containerEmail">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div>
        <label htmlFor="startDate" className="form-label">Start Date:</label>
        <input type="date" className="form-control"id="startDate" name="start_date" required/>
      </div>
      <br></br>
      <div>
        <label htmlFor="endDate" className="form-label">End Date:</label>
        <input type="date"className="form-control" id="endDate" name="end_date" required/>
      </div>
<br></br>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message: </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
<br></br>
            <button type="submit" className="btn btn-primary">
              Set Vacation
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SetVacation;
