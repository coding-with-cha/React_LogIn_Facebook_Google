import logo from './logo.svg';
import './App.css';
import GoogleLogin from "./components/GoogleLogin";
import FacebookLogin from "./components/FacebookLogin";
import image from './waiting-room.png'
function App() {
  return (
    <div className="App">
      <GoogleLogin />
      <br/><br/>
      <hr/>
      <br/><br/>
      <FacebookLogin />
      <br/><br/>
      <img src={image} style={{width: '400px', height: '500px', paddingTop:"10%"}}/>
    </div>
  );
}

export default App;
