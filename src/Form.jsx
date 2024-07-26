import React, { useState } from "react";
import "./Form.css";
import image from "./assets/Image.png";
import image2 from "./assets/image2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  /*  const [firseName, setFiestName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState("");
  const [emailCheck, setEmailCheck] = useState("");

  const getFirstName = (e) => {
    setFiestName(e.target.value);
  };

  const getLastName = (e) => {
    setLastName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getTel = (e) => {
    setTel(e.target.value);
  };

  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  const validate = () => {
    if (!email && !firseName && !lastName && !tel && !message) {
      setErrors("Error");
    } else {
      setErrors("null");
    }
  };

  const emailValidate = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailCheck("The Email is Invalid");
    } else {
      setEmail("null");
    }
  };

  const submit = () => {
    if (errors === "null" && emailCheck === "null") {
      toast.success("submitted");
    } else if (
      (errors !== "null" && emailCheck === "null") ||
      (errors !== "null" && emailCheck !== "null")
    ) {
      toast.error("Fill all the fields in the form");
    } else if (errors === "null" && emailCheck !== "null") {
      toast.error("The email is incorrect");
    }
  };

  const final = () => {
    validate();
    emailValidate();
    submit();
  };*/

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5750ea01-2772-476b-8b25-ac3a17efe8a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("submitted");
    }
  };

  return (
    <div className="All">
      <div className="hedPart">
        <h1>
          Get in <span className="changeColour">touch</span>
        </h1>
        <p>Reach out, and let's create a universe of possibilities together!</p>
      </div>

      <div className="color-patch"></div>
      <div className="centerPart">
        <form className="leftPart" onSubmit={onSubmit}>
          <div className="leftHead">
            <h2>Let's connect constellations </h2>
            <p>
              Let's align our constellations! reach out and let the <br /> magic
              of collaboration illuminate our skies.
            </p>
          </div>

          <div className="Name">
            <div>
              <input
                className="inputBox"
                type="text"
                id="Lname"
                name="last name"
                placeholder="Last Name"
                //onChange={getLastName}
                required
              />
            </div>
            <div>
              <input
                className="inputBox"
                type="text"
                id="Fname"
                name="first name"
                placeholder="First Name"
                //onChange={getFirstName}
                required
              />
            </div>
          </div>

          <div className="otherData">
            <div>
              <input
                className="inputBox2"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                //onChange={getEmail}
                required
              />
            </div>
            <div>
              <input
                className="inputBox2"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                //onChange={getTel}
                required
              />
            </div>
            <div>
              <textarea
                className="inputBox3"
                id="message"
                name="message"
                placeholder="Message"
                // onChange={getMessage}
                required
              ></textarea>
            </div>
            <button type="submit">
              Send it to the moon{" "}
              <img src={image2} alt="rocket " className="image2" />
            </button>
          </div>
        </form>
        <div className="imageANDtext">
          <img src={image} alt="Astronaut " className="image" />
          <div className="text-overlay">
            “Two lunar months revealed Earth's fragile beauty against vast
            silence, transforming my view of our place in the universe.
            <br />
            Irinel Traista
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form;
