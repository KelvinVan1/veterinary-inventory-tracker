import { useEffect, useState } from 'react';

const Startup = () => {
  const [loading, setLoading] = useState(true);
  const [configStatus, setConfigStatus] = useState(false);
  const [dbState, setDbState] = useState(0);

  // Determines if the config file exists
  const checkConfig = async () => {
    try{
      if(configStatus === false){
        const request = await fetch('/api/config');
        const response = await request.json();
        if(response.status === 1) {
          setConfigStatus(true);
        }
        setLoading(false);
      }
    } catch {
      await new Promise(resolve => setTimeout(resolve, 1000));
      checkConfig();
    }
  };

  // Checks to see if the database has been connected to
  const checkDB = async () => {
    const request = await fetch('/api/status');
    const response = await request.json();
    if(response.status === 0) {
      await fetch('/api/load');
    }
    else setDbState(1);
  };

  // Ensures that a config file does exist and if so we can change what we render
  useEffect(() => {
    checkConfig();
  }, []);

  // Checks on the status of the db and start up if not already once config loads
  useEffect(() => {
    if(configStatus === true){
      checkDB();
    }
  }, [configStatus]);

  // Handles redirecting to the login page after the db is setup and online
  useEffect(() => {
    if(dbState === 1){
      window.location.href += 'Login';
    }
  }, [dbState]);

  return(
    <section className=" bg-gray-900">
      {
        loading &&
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
          <h1 className="text-white 2xl">Loading Please Wait...</h1>
        </div>
      }
      
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <p className="flex items-center mb-6 text-2xl font-semibold text-white ">
          VetTrack Setup
        </p>

        {/* Setup Section */}
        <div className="font-bold w-full rounded-lg border max-w-md bg-gray-800 border-gray-700">
          <div className="px-10 py-8 text-white space-y-4">
            <h1 className="text-2xl">
              Configuration settings
            </h1>
            <form onSubmit={() => console.log('placehold')} className="space-y-5">
              <div>
                <label htmlFor="mongoURI" className="block pb-3 text-md">Mongo URI</label>
                <input type="text" id="mongoURI" placeholder="URI HERE" className="block border rounded-md w-full p-1.5 border-gray-700 bg-gray-600 text-gray-100"></input>
              </div>
              <button type="submit" className="w-full border border-blue-700 bg-blue-600 rounded-md p-1">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;