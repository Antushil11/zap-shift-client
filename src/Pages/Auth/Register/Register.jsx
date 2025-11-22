import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {


    const {register, handleSubmit, formState:{errors} } = useForm()

    const {registerUser,updateUserProfile} = useAuth()

    const handleRegisteration =(data) =>{
        // console.log("after rregister:", data.photo[0]);
        const profileImg = data.photo[0]

        
        registerUser(data.email, data.password)
        .then(result =>{
        
             console.log(result.user)

             const formData = new FormData();
             formData.append('image', profileImg);
              
             const  image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
             axios.post(image_API_URL,formData)
             .then(res =>{
              console.log('after image upload', res.data.data.url)

              //update user profile
              const userProfile ={
                displayName : data.name,                
                photoURL : res.data.data.url,
              
                
              }
              updateUserProfile(userProfile)
              .then(result =>{
                console.log("userprofile Done ",result)
              })
              .catch(error =>{
                console.log(error)
              })

             })
             

        })
        .catch(error =>{
          console.log(error)
        })

    }
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
       <h2 className="text-3xl font-bold text-center">Wellcome to Zap Shift</h2>
        <p className="text-center">Please Register</p>
      <form  className="card-body"  onSubmit={handleSubmit(handleRegisteration)}>
        <fieldset className="fieldset">

          {/* Name */}
          <label className="label">Name</label>
          <input type="text" {...register('name', {required: true})} className="input" placeholder="Enter Your Name" />
            {errors.name?.type==='required'&& <p className="text-red-600">Name is required</p>}
          
          {/* photo/image*/}
          <label className="label">photo</label>
          <input type="file" {...register('photo', {required: true})} className="file-input" placeholder="your photo" />
            {errors.photo?.type==='required'&& <p className="text-red-600">photo is required</p>}
          
          {/* email */}
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
        <p>New to Zap Shift
            <Link className="text-blue-400 underline ml-2" to={'/login'}>Login</Link>
          </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
