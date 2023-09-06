import FormGroup from "./FormGroup";

import { useRef } from "react"
 
const Form = (props) => {
const usernameRef = useRef()
const emailRef = useRef()
const passRef = useRef()
const passConf = useRef()

const submitFormHandler = (e) => {
    e.preventDefault()

    props.submit(usernameRef.current.value  , emailRef.current.value, passRef.current.value, passConf.current.value)
}

  return (
    <form
    onSubmit={submitFormHandler}
     className="flex flex-col border-2 rounded-lg p-5">
        <FormGroup
         label="Username" 
         placeholder="Please enter your username" 
         errorMessage={props.username.errorMessage}
         id="username"
         type="text"
         ref={usernameRef}
         error={props.username.error}/>

        <FormGroup
         label="Email" 
         placeholder="Please enter your email "  
         errorMessage={props.email.errorMessage} 
         id="email"
         type="text"
         ref={emailRef}
         error={props.email.error}/>

        <FormGroup
         label="Password" 
         placeholder="Please enter your password"   
         errorMessage={props.password.errorMessage} 
         id="password"
         type="password"
         ref={passRef}
         error={props.password.error}/>

        <FormGroup
         label="Confirm Password" 
         placeholder="Please confirm your password"   
         errorMessage={props.confirmPassword.errorMessage} 
         id="confirmPassword" 
         type="password"
         ref={passConf}
         error={props.confirmPassword.error}/>
         

        <button className="bg-green-500 text-white p-2 rounded mt-2">
            Sumbit
        </button>
        </form>
  )
}

export default Form