import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {

    const {register, handleSubmit, formState:{errors} } = useForm()

    const handleRegisteration =(data) =>{
        console.log("after rregister:", data)

    }
  return (
    <div>
      This is Register
      <form onSubmit={handleSubmit(handleRegisteration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true})} className="input" placeholder="Email" />
            {errors.email?.type==='required'&& <p className="text-red-600">Eamil is required</p>}
          
          {/* password */}
          <label className="label">Password</label>
          <input type="password"{...register('password',{required: true,
            minLength:6,
            pattern : /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=<>])[A-Za-z\d@$!%*?&^#()_\-+=<>]{8,}$/,

          })} className="input" placeholder="Password" />

          {
            errors.password?.type ==='required' && <p className="text-red-600">Password is required</p>
          }
          {
            errors.password?.type ==='minLength'&&<p className="text-red-600">password must be 6 characters or length</p>
          }
          {
            errors.password?.type==='pattern'&&<p className="text-red-600">password must have uppercase, at least one lowercase, at least on number, and at least on specil characters</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
