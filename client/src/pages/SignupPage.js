import SmallNav from "../components/smallNav";

function SignupPage() {
  return (
    <div>
    <SmallNav/>
    <div class="container text-center overflow-hidden">
      <form style={{ paddingTop:'5%' }}>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="firstname" placeholder="First name" />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="lastname" placeholder="Last name" />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="email" placeholder="Email" />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="username" placeholder="Username" />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="password" placeholder="Password" />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="text" placeholder="College" />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="text" placeholder="Major" />
          <div class="col"></div>
        </div>
        <div class="row mb-4">
          <div class="col"></div>
          <input class="col-3 rounded" type="text" placeholder="Year" />
          <div class="col"></div>
        </div>
        <div class="row mb-2">
          <div class="col"></div>
          <button class="col-3 rounded bg-primary text-white px-6 py-2 mb-1" style={{border:'none'}}>Create account</button>
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