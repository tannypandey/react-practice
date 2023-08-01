import Batman from "./images/1.jpeg";
import Superman from "./images/2.jpeg";
import GreenLantern from "./images/4.jpeg";
import TheHuntress from "./images/5.jpeg";
import TheFlash from "./images/3.jpeg";
import HarleyQuinn from "./images/6.jpeg";
import Deadshot from "./images/7.jpeg";
import CountVertigo from "./images/8.jpeg";
import Robin from "./images/9.jpeg";
import Nightwing from "./images/10.jpeg";
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from "./App";



const images = {
      Batman,
      Superman,
      GreenLantern,
      TheHuntress,
      TheFlash,
      HarleyQuinn,
      Deadshot,
      CountVertigo,
      Robin,
      Nightwing
}
export default images;


root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>  
  </React.StrictMode>
)