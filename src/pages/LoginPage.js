import SmallNav from "../components/smallNav";

function LoginPage() {
  return (
    <div>
      <SmallNav/>
      <div class="container text-center overflow-hidden">
        <form style={{ paddingTop:'15%' }}>
          <div class="row mb-4">
            <div class="col"></div>
            <input class="col-3 rounded" type="username" placeholder="Username or email" />
            <div class="col"></div>
          </div>
          <div class="row mb-4">
            <div class="col"></div>
            <input class="col-3 rounded" type="password" placeholder="Password" />
            <div class="col"></div>
          </div>
          <div class="row mb-2">
            <div class="col"></div>
            <button class="col-1 rounded bg-primary text-white px-3 py-3 mb-1" style={{border:'none'}}>LOGIN</button>
            <div class="col"></div>
          </div>
          <div class="row mb-2">
            <div class="col"></div>
            <a class="col-2" href="/sign-up" style={{ textDecoration: 'none' }} >Register now</a>
            <div class="col"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;