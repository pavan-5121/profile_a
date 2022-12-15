import Header from "./Component/Header";
import MainComponent from "./Component/Avatar/MainComponent";

import { TopHeader } from "./Component/StyleComponent";
import { useState } from "react";

import "./Component/style.css"

function App() {

const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {visible? <div style={{marginTop:'15%'}}><button className="button" onClick={()=>setVisible(false)} style={{verticalAlign:'middle'}}><span>CLICK ME </span></button></div>:
   <>
        <Header/>
      <TopHeader>
   {" CONGRATULATIONS APPI !!  :)"}
        </TopHeader>
    
      <MainComponent/>
      </>
}
    </div>
  );
}

export default App;
