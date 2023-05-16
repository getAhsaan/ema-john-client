import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div>
      <form
        onSubmit={handleSignUp}
        className="bg-grey-lighter min-h-screen flex flex-col"
      >
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 text-white"
              name="fullname"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4 text-white"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4 text-white"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4 text-white"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            />
            <input
              type="submit"
              value="Sign Up"
              className="btn text-white  w-full text-center py-3 rounded bg-green hover:bg-green-dark focus:outline-none my-1"
            />

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="no-underline border-b border-blue text-blue hover:text-orange-400"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
