import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import { useState } from 'react/cjs/react.development';
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Signin = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const googleHandleClick = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }
    const facebookHandleClick = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            /* const {displayName, photoURL, email} = result.user;
            const userInfo = {
                name: displayName,
                emai: email,
                image:photoURL
            }
            setUser(userInfo); */
        })
    }
    return (
        <div>
            <form  className="border  my-5 mx-3  p-3">
  <div className="row mb-3">
    <h5 className="text-info text-center">Please Sign in</h5>
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input  type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input  type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
<p>Try another sign in method.</p>
<button onClick={googleHandleClick} className='btn btn-danger'><i class="fab fa-google"></i> Google</button>
<button className='btn btn-primary text-light mx-2' onClick={facebookHandleClick}><i class="fab fa-facebook"></i> Facebook</button>
        </div>
    );
};

export default Signin;