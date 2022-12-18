import React, {useEffect} from 'react';
import 'aos/dist/aos.css'
import './styles.css'
import AOS from 'aos';
import AuthProvider from './authContext';
import AppWrapper from './Containers/AppWrapper'

function App() {
  useEffect(() =>
  {

    AOS.init({
      duration: 600,
      debounceDelay: 100,
      mirror: true,
      easing: "ease",
      once: true,
      offset: 35
    });
    
  }, [])
  return (
    <div className="app">
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </div>
  );
}

export default App;
