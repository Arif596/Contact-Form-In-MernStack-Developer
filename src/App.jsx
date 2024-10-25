import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
function App() {
  const [formValues, setFormValues] = useState({
    name: "",
    pnumber: "",
    address: "",
    state: "",
    city: "",
    message: "",
  });

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandle = async () => {
    if (
      formValues.name === "" ||
      formValues.pnumber === "" ||
      formValues.address === "" ||
      formValues.state === "" ||
      formValues.city === "" ||
      formValues.message === ""
    ) {
      alert("All fields are required");
    } else {
      await axios
        .post("http://localhost:3000/api/v1/post", formValues)
        .then((res) => {
          console.log(res);
        });
      setFormValues({
        name: "",
        pnumber: "",
        address: "",
        state: "",
        city: "",
        message: "",
      });
    }
  };

  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="card-contact p-2">
        <h1>Contact Form</h1>
        <hr />
        <div className="cont-form d-flex flex-column justify-content-between">
          <div>
            <h5>Enter your Name</h5>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formValues.name}
              onChange={changeHandle}
            />
          </div>
          <div>
            <h5>Enter your Phone Number</h5>
            <input
              type="text"
              name="pnumber"
              placeholder="Enter Your Phone Number"
              value={formValues.pnumber}
              onChange={changeHandle}
            />
          </div>
          <div>
            <h5>Enter your Address</h5>
            <textarea
              placeholder="Enter Your Address"
              name="address"
              value={formValues.address}
              onChange={changeHandle}
            />
          </div>
          <div className="import-data d-flex justify-content-between">
            <div>
              <h5>State</h5>
              <input
                id="imp"
                type="text"
                placeholder="Enter your state"
                name="state"
                value={formValues.state}
                onChange={changeHandle}
              />
            </div>
            <div>
              <h5>City</h5>
              <input
                id="imp"
                type="text"
                placeholder="Enter your city"
                name="city"
                value={formValues.city}
                onChange={changeHandle}
              />
            </div>
          </div>
          <div>
            <h5>Enter Message</h5>
            <textarea
              placeholder="Enter Message"
              name="message"
              value={formValues.message}
              onChange={changeHandle}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={submitHandle}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
