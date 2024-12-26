import React from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4">
        <h1>Welcome To Lannapoly</h1>
        <p>information technology</p>
      </main>
      <main className="container mt-4">
          <Home/>
      </main>
      <Footer />
    </div>
  );
}


export default App;