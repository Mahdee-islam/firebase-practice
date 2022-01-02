import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import initialization from '../Firebase/firebse.init';
initialization();
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        if(e.target.value.length<6) {
            console.error('password should be 6 charecter')
        }
    }
    const handleRegistration = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const {email, displayName, photoURL} = result.user;
             const userInfo = {
                 name: displayName,
                 email: email,
                 image: photoURL
             }
             setUser(userInfo);
        })
        .catch(error => {
            setError(error.message);
        })
        
    }
    return (
        <div>
            <p>User email is : { user.email} </p>
            <p>{error}</p>
            <form onSubmit={handleRegistration}  className="border w-100  my-5 mx-3 p-3">
  <div className="row mb-3">
    <h5 className="text-info text-center">Please Register</h5>
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange}  type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
        </div>
    );
};

export default Register;