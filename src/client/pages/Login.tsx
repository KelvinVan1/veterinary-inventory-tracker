const Login = () => {

  return(
    <section className=" bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        {/* Logo and app name */}
        <p className="flex items-center mb-6 text-2xl font-semibold text-white ">
          <img className="w-8 h-8 mr-2" src="../api/assets/images/cat.png" alt="logo"/>
          VetTrack  
        </p>
        {/* Login box */}
        <div className="font-bold w-full rounded-lg border max-w-md bg-gray-800 border-gray-700">
          <div className="px-10 py-8 text-white space-y-4">
            <h1 className="text-2xl">
            Sign in to your account
            </h1>
            <form onSubmit={() => console.log('placehold')} className="space-y-5">
              {/* Credentials */}
              <div>
                <label htmlFor="username" className="block pb-3 text-md">Username</label>
                <input type="text" id="username" placeholder="username" className="block border rounded-md w-full p-1.5 border-gray-700 bg-gray-600 text-gray-100"></input>
              </div>
              <div>
                <label htmlFor="Password" className="block pb-3 text-md">Password</label>
                <input type="password" id="password" placeholder="******" className="block border rounded-md w-full p-1.5 border-gray-700 bg-gray-600 text-gray-100"></input>
              </div>
              {/* Login */}
              <button type="submit" className="w-full border border-blue-700 bg-blue-600 rounded-md p-1">Login</button>
              {/* Reset */}
              <div className="text-sm space-y-0.5 font-light">
                <p>Forgot <a className="text-blue-500" href="#">username</a> / <a className="text-blue-500" href='#'>password</a>?</p>
                <p>Don&apos;t have an account yet? <a className="text-blue-500" href="#">Sign up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;