import SmallNav from "../components/smallNav";
import React, {useState} from "react";
import axios from "axios";


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginButtonClick(){
    console.log(username, password);
    async function login(){
      try{
        await axios.get("/api/");
      } catch (error) {
        console.error("Invalid username or password");
      }
    }
    login();
  };
  
  return (
    <div>
      <SmallNav/>
      <div class="container text-center overflow-hidden">
        <form style={{ paddingTop:'15%' }} >
          <div class="row mb-4">
            <div class="col"></div>
            <input class="col-3 rounded" type="username" placeholder="Username or email" value={username} onChange={(e) => setUsername(e.target.value)} />
            <div class="col"></div>
          </div>
          <div class="row mb-4">
            <div class="col"></div>
            <input class="col-3 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div class="col"></div>
          </div>
          <div class="row mb-2">
            <div class="col"></div>
            <button class="col-1 rounded bg-primary text-white px-3 py-3 mb-1" style={{border:'none'}} onClick={handleLoginButtonClick}>LOGIN</button>
            <div class="col"></div>
          </div>
        </form>

          <div class="row mb-2">
            <div class="col"></div>
            <a class="col-2" href="/sign-up" style={{ textDecoration: 'none' }} >Register now</a>
            <div class="col"></div>
          </div>
      </div>
    </div>
  );
}
export default LoginPage;