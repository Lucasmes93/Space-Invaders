import './App.css';
import {Routes, Route} from "react-router-dom";
import BG from './Assets/Background/bg.mp4'
import Home from "./Component/Home/Home";
import GameWindow from "./Containers/GameWindow";
import GameWindowLvl2 from "./Containers/GameWindowLvl2";
import GameOver from "./Component/GameOver/GameOver";



function App() {


  return (
    <>
        <video className='BG' autoPlay loop muted>
            <source src={BG} type='video/mp4' />
        </video>
        {/*on rajoute process.env.PUBLIC_URL pour permetre a react router de fonctioner sur un vrai site*/}
        <Routes basename={process.env.PUBLIC_URL}>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/game" element={<GameWindow/>}/>
            <Route path="/gameover" element={<GameOver/>}/>
            <Route path="/gamelvl2" element={<GameWindowLvl2/>}/>
        </Routes>
    </>
  );
}

export default App;
