import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().min(18).max(65).integer().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});


function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  /*const [formState,setFormState] = useState({}); 

  const changeHandler = (event) => {
    setFormState({...formState, [event.target.name]: event.target.value });
  };*/

  const submitForm = (data) => {
    console.log(data)
    alert("Form filled successfully")
  }  

  /*const submitHandler = (data) => {
    //event.preventDefault();
    console.log(data)
    const config ={
      SecureToken : "f31517e2-4155-45cf-9dfa-a549930b5b34",
      To : formState.email,
      From : "19bcs039@ietdavv.edu.in",
      Subject : "Registration Successful",
      Body : `Welcome ${formState.firstName}, You have been registered.
              To complete payment, pay using the following link.
              {Payment Link} `,
    };
    if(window.Email) {
      window.Email.send(config).then(() => alert("Form submitted successfull. Check your mail for further process."));
    }

    //console.log(data);
    //alert("Form Submitted Successfully. Check your mail for payment.");
  };*/
  return (
    <div className="Form">
      <div className="title">Yoga Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(handleSubmit(submitForm))}>
          <input type="text" name="firstName" /*value={formState.firstName} onChange={changeHandler}*/ ref={register} placeholder="First Name..."/>
          <p> {errors.firstName && "First Name should be provided"} </p>
          
          <input type="text" name="lastName" /*value={formState.lastName} onChange={changeHandler}*/ placeholder="Last Name..." ref={register}/>
          <p> {errors.lastName && "Last Name should be provided"} </p>
          
          <input type="text" name="age" /*value={formState.age} onChange={changeHandler}*/ placeholder="Age..." ref={register} />
          <p> {errors.age && "Age should be between 18 and 65"} </p>
          
          <input type="text" name="email" /*value={formState.email} onChange={changeHandler}*/ placeholder="Email..." ref={register}/>
          <p> {errors.email && "Email Id should be provided"} </p>
      
          <select id="time" name="time">
            <option value="6-7AM">6 AM - 7 AM</option>
            <option value="7-8AM">7 AM - 8 AM</option>
            <option value="8-9AM">8 AM - 9 AM</option>
            <option value="5-6PM">5 PM - 6 PM</option>
          </select>
          <br/>
          <input type="password" name="password" /*value={formState.password} onChange={changeHandler}*/ placeholder="Password..." ref={register}/>
          <p> {errors.password && "Password should have 8 to 15 characters"} </p>
          
          <input type="password" name="confirmPassword" /*value={formState.confirmPassword} onChange={changeHandler} */placeholder="Confirm Password..." ref={register}/>
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;