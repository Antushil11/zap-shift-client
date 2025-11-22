import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const {signInUser} = useAuth();

  const handleLogin = (data) => {
    console.log(' from submit',data);
    signInUser(data.email, data.password)
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })


  };

  return (
    <div>
      
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center">Wellcome Back</h2>
        <p className="text-center">Please Login</p>
        <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {required:true})}
              className="input"
              placeholder="Email"
            />
            {
                errors.email?.type === 'required' && <p className="text-red-600">Email is Required</p>
            }

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {required: true, minLength: 6})}
              className="input"
              placeholder="Password"
            />
            {
                errors.password?.type == 'minLength' && <p className="text-red-600">password has been at lest 6 character</p>
            }

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>New to Zap Shift
            <Link className="text-blue-400 underline ml-2" to={'/register'}>Register</Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
