import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const RePasswordRef = useRef();

  const navigate = useNavigate()

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (pw) => {
    return (
      /[a-z]/.test(pw) &&
      /[0-9]/.test(pw) &&
      pw.length > 4
    );
  };

  function validate() {
    if (usernameRef.current.value.length < 3) {
      alert("Username is not valid");
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
      return false;
    }
    if (!validateEmail(emailRef.current.value)) {
      alert("Email is not valid");
      emailRef.current.focus();
      emailRef.current.style.outlineColor = "red";
      return false;
    }

    if (!validatePassword(passwordRef.current.value)) {
      alert(
        "Password is not valid. It must be at least 5 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character."
      );
      passwordRef.current.focus();
      passwordRef.current.style.outlineColor = "red";
      return false;
    }

    if (passwordRef.current.value != RePasswordRef.current.value) {
      alert("Passwords do not match");
      return;
    }

    return true;
  }

  function handRegister(event) {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }

    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.message == "User registered successfully!") {
        navigate('/login');
        usernameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        RePasswordRef.current.value = '';
      }
      if(data.message == "Failed! Username is already in use!" || data.message == "Failed! Email is already in use!") {
        alert(data.message)
      }
    })
  }
  function handGoLogin(event) {
    event.preventDefault()
    navigate('/login')
  }
  return (
    <div className="base-container mt-20">
      <h1 className="text-7xl text-center font-extrabold text-purple-700">Register</h1>
      <form className="max-w-sm mx-auto mt-6">
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your name
          </label>
          <input
            ref={usernameRef}
            type="text"
            id="text"
            className="shadow-sm input input-bordered input-success block w-full p-2.5 "
            placeholder="Enter name..."
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="shadow-sm input input-bordered input-success   block w-full p-2.5 "
            placeholder="Enter email..."
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Create password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="shadow-sm input input-bordered input-success   block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Re enter password
          </label>
          <input
            ref={RePasswordRef}
            type="password"
            id="password"
            className="shadow-sm input input-bordered input-success   block w-full p-2.5 "
            required
          />
        </div>
        <div className="flex gap-5">
        <button
          type="submit"
          className=" text-white btn btn-outline btn-secondary"
          onClick={handRegister}
        >
          Register new account
        </button>
        <button
          type="submit"
          className=" text-white btn btn-outline btn-secondary"
          onClick={handGoLogin}
        >
          Login
        </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
