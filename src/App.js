import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
import Content from './components/Content.js'
import ControlSidebar from './components/ControlSidebar.js';


function App() {
  return (
    <div className="app">
      <div class="wrapper">
        <Header/>
        <Sidebar/>
        <Content/>
        <Footer/>
        <ControlSidebar/>
      </div>
      </div>
  );
}

export default App;
