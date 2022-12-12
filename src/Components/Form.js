import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required("Last Name should be provided"),
  age: yup.number().min(18).max(65).integer().required("Age should be between 18 and 65"),
  email: yup.string().email().required("Email Id should be provided"),
  password: yup.string().min(8).max(15).required("Password should have 8 to 15 characters"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    alert("Form Submitted Successfully. Check your mail for payment.");
  };
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input type="text" name="firstName" ref={register} placeholder="First Name..."/>
          <p> {errors.firstName && "First Name should be provided"} </p>
          
          <input type="text" name="lastName" placeholder="Last Name..." ref={register}/>
          <p> {errors.lastName && "Last Name should be provided"} </p>
          
          <input type="text" name="age" placeholder="Age..." ref={register} />
          <p> {errors.age && "Age should be between 18 and 65"} </p>
          
          <input type="text" name="email" placeholder="Email..." ref={register}/>
          <p> {errors.email && "Email Id should be provided"} </p>
          
          <input type="password" name="password" placeholder="Password..." ref={register}/>
          <p> {errors.password && "Password should have 8 to 15 characters"} </p>
          
          <input type="password" name="confirmPassword" placeholder="Confirm Password..." ref={register}/>
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;