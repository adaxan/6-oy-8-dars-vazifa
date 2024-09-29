import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate()


  function validate() {
    if (usernameRef.current.value.length < 3) {
      alert("Username is not valid");
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
      return false;
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
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      if(data.id) {
        navigate('/Home');
        usernameRef.current.value = '';
        passwordRef.current.value = '';
      }
      if(data.message == "User Not found." || data.message == "Invalid Password!") {
        alert(data.message)
      }
    })
  }
  function handGoRegister(event) {
    event.preventDefault();
    navigate('/')
  }
  return (
    <div className="mt-40">
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
            className="shadow-sm input input-bordered input-info block w-full p-2.5  "
            placeholder="Enter name..."
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="shadow-sm input input-bordered input-info block w-full p-2.5 "
            required
          />
        </div>
        <div className="flex gap-5">
        <button
          type="submit"
          className="text-white btn btn-outline btn-secondary"
          onClick={handRegister}
        >
          Login
        </button>
        <button
          type="submit"
          className=" text-white btn btn-outline btn-secondary"
          onClick={handGoRegister}
        >
          Register
        </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
