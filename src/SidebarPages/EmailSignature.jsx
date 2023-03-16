import React from "react";
import HomePage from "../Components/HomePage";
import "../CSS/emailSignature.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

const EmailSignature = () => {
  const [emailAdd, setEmailAdd] = useState();
  const [signature, setsignature] = useState();
  const [submit, setSubmit] = useState(false);

  const onChangesignatureHandler = (event) => {
    setsignature(event.target.value);
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
      const signatureBody = signature;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "React Hooks POST Request Example",
          email: { emailBody },
          signature: { signatureBody },
        }),
      };
      if (submit) {
        console.log("Api");
        setSubmit(false);
        const res = await fetch(
          "http://localhost:8080/updateSignature",
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
              <signature
                htmlFor="exampleInputEmail1"
                className="form-signature"
              >
                Email address
              </signature>
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
              <signature htmlFor="signature" className="form-signature">
                Email signature
              </signature>
              <input
                type="text"
                className="form-control"
                id="signature"
                onChange={onChangesignatureHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update Signature
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailSignature;
