import { useState } from "react/cjs/react.development";
import Register from "./Components/Register";
import Signin from "./Components/Signin";
import initialization from "./Firebase/firebse.init";

initialization();
function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
    <div className="row">
      <div className="col-md-6 ">
       { toggle?<Signin/> :
        <Register/>}
      </div>
      <div className="col-md-6">
       <div className=" my-2 mx-2  p-3">
       <img className="img-fluid w-100" src="https://cdn.dribbble.com/users/542205/screenshots/5380805/media/71dcfb8fa5ef0c6f5459aa77f100fb7a.png?compress=1&resize=400x300" alt="" /> 
       </div>
      </div>
    </div>
   {toggle? <p className="text-info" onClick={ () => setToggle(false)} >Are you new? Please Register.</p> :
    <p className="text-info"  onClick={ () => setToggle(true)} >Already have an account.</p>}
    </div>
  );
}

export default App;
