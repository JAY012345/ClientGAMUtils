import React from "react";
import HomePage from "../Components/HomePage";
import "../CSS/emailSignature.css";
import { useEffect } from "react";
import { useState } from "react";

const EmailLabel = () => {
  const [emailAdd, setEmailAdd] = useState();
  const [label, setLabel] = useState();
  const [submit, setSubmit] = useState(false);

  const onChangeLabelHandler = (event) => {
    setLabel(event.target.value);
    console.log(event.target.value);
  };

  const onChangeEmailHandler = (event) => {
    setEmailAdd(event.target.value);
    console.log(event.target.value);
  };
  function handleSubmit(event) {
    console.log("Helo submit");

    event.preventDefault();
    setSubmit(true);
    // event.preventDefault();
  }

  useEffect(() => {
    console.log("I am inside UseEffect");

    async function varify() {
      const emailBody = emailAdd;
      const labelBody = label;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "React Hooks POST Request Example",
          email: { emailBody },
          label: { labelBody },
        }),
      };
      if (submit) {
        setSubmit(false);
        const res = await fetch(
          "http://localhost:8080/createLabel",
          requestOptions
        );
        if (res.status == 200) {
          alert("Updated!");
        } else if (res.status == 401) {
          console.log("Something is wrong!");
        }
      }
    }

    varify();
  }, [submit]);

  return (
    <React.Fragment>
      <HomePage />

      <div className="container">
        <div className="containerEmail">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChangeEmailHandler}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="label" className="form-label">
                Email Label
              </label>
              <input
                onChange={onChangeLabelHandler}
                type="text"
                className="form-control"
                id="signature"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update Label
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailLabel;
