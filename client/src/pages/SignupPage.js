import SmallNav from "../components/smallNav";
import React, {useState} from "react";
import axios from "axios";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [college, setCollege] = useState("");
	const [major, setMajor] = useState("");
	const [year, setYear] = useState("");

  function handleCreateAccountButtonClick(){
    const userInfo = {
      firstName, lastName, email, username, password, college, major, year
    }
    async function AddAccount(){
      try{
        await axios.post("/api/", userInfo);
      } catch (error) {
        console.error("Error posting");
      }
    }
    AddAccount();
  };
  
  return (
    <div>
    <SmallNav/>
    <div class="container text-center overflow-hidden">
      <form style={{ paddingTop:'5%' }} >
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="firstname" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="lastname" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="text" placeholder="College" value={college} onChange={(e) => setCollege(e.target.value)} />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="text" placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)} />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
          <div class="col"></div>
        </div>
        <div class="row mb-2">
          <div class="col"></div>
          <button class="col-3 rounded bg-primary text-white px-6 py-2 mb-1" style={{border:'none'}} onClick={handleCreateAccountButtonClick}>Create account</button>
          <div class="col"></div>
        </div>
        <div class="row mb-2">
          <div class="col"></div>
          <a class="col-2" href="/login" style={{ textDecoration: 'none' }} >Login</a>
          <div class="col"></div>
        </div>
      </form>
    </div>
    </div>    
  );
}
export default SignupPage;