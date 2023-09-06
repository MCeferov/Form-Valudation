// ! Component 

import Form from "./Component/Form";

import {useState} from "react"

const App = () => {

  

const [username, setUsername] = useState({
  value:"",
  error:false,
  errorMessage:""
})

const [email, setEmail] = useState({
  value:"",
  error:false,
  errorMessage:""
})
const [password, setPassword] = useState({
  value:"",
  error:false,
  errorMessage:""
})

const [confirmPassword, setConfirmPassword] = useState({
  value:"",
  error:false,
  errorMessage:""
})

const submitUser = (username,email, password, confirmPassword) => {

  if(!username) {
   setUsername({
    value: "",
    error:true,
    errorMessage:"Please fill out this field"
  } )
  } else {
    setUsername({
      value: username,
      error:false,
      errorMessage:""
    })
  }

  if(!email) {
    setEmail({
      value: "",
      error: true,
      errorMessage:"Please fill out this field"
    })
  }else if(!email.includes("@") && email) {
    setEmail({
      value:"",
      error:true,
      errorMessage:"Please enter a valid email address",
    })
  }else {
    setEmail({
      value:email,
      error:false,
      errorMessage:""
    });
  }
  
  // if(password) {
  //   setPassword({
  //     value: password,
  //     error: false,
  //     errorMessage:""
  //   })
  // }else{
  //   setPassword({
  //     value:"",
  //     error:true,
  //     errorMessage:"Password"
  //   })
  // }

  // if(confirmPassword !== password) {
  //   setConfirmPassword({
  //     value:"",
  //     error: true,
  //     errorMessage:"Please confirm your password"
  //   })
  // }

  if (!password) {
    setPassword({
      value: "",
      error: true,
      errorMessage: "Please fill out this field",
    });
  } else {
    setPassword({
      value: password,
      error: false,
      errorMessage: "",
    });
  }

  if (!confirmPassword) {
    setConfirmPassword({
      value: "",
      error: true,
      errorMessage: "Please fill out this field",
    });
  } else {
    setConfirmPassword({
      value: password,
      error: false,
      errorMessage: "",
    });
  }

  if (!password && !confirmPassword) {
    setConfirmPassword({
      value: "",
      error: true,
      errorMessage: "Please fill out this field",
    });
  } else if (password !== confirmPassword) {
    setConfirmPassword({
      value: confirmPassword,
      error: true,
      errorMessage: "Make sure the passwords match",
    });
  } else {
    setConfirmPassword({
      value: confirmPassword,
      error: false,
      errorMessage: "",
});
}
}

  return (
    <div className="bg-blue-50 flex h-screen justify-center items-center">
      <div className="w-96">
       <h1 className="text-2xl font-medium text-center mb-5">
        Form Validation
       </h1>
       <Form submit={submitUser} username={username} email={email} password={password}  confirmPassword={confirmPassword} />
      </div>
      </div>
  )
}

export default App