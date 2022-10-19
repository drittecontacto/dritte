import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import WhatGPT3 from './containers/whatDritte/WhatGPT3';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';

function App() {
  return (
    
    <div className="App">
    <div className="gradient__bg">
    <Navbar />
    <Header />
  </div>

   <WhatGPT3 />
   {/* <Features /> */}
   <Footer />
</div>
  );
}

export default App;
