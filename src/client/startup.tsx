import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

const Startup = () => {
  const [loading, setLoading] = useState(true);
  const [configStatus, setConfigStatus] = useState(false);
  const [dbState, setDbState] = useState(0);

  const checkConfig = async () => {
    try{
      if(configStatus === false){
        const request = await fetch('/api/config');
        const response = await request.json();
        setLoading(false);
        if(response.status === 1) setConfigStatus(true);
      }
    } catch {
      await new Promise(resolve => setTimeout(resolve, 1000));
      checkConfig();
    }
  };

  const checkDB = async () => {
    const request = await fetch('/api/status');
    const response = await request.json();
    if(response.status === 0) {
      await fetch('/api/load');
    }
      
    setDbState(1);
  };

  // Ensures that a config file does exist and if so we can change what we render
  useEffect(() => {
    checkConfig();
  }, []);

  // Checks on the status of the db and start up if not already
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
        <h1 className="text-white 2xl">VetTrack Setup</h1>
      </div>
    </section>
  );
};

export default Startup;