import React,{useState} from "react";
import "./App.css";
import DisplayCard from './DisplayCard';
 function App() {
   const [initialCount,changeCount] = useState("0");
   const [initialText,changeText] = useState("Say Allahu Akbar");
   const incrementListener = ()=>{
       changeCount((prev)=>{
         
         if(prev<100){
          prev++;
       }
       if(prev>34 && prev<=67){
        changeText((prev)=>{
           return "Say Alhamdulillah";
        })
      }
      if(prev>67){
        changeText(()=>{
          return "Say Subhanallah";
        })
        
      }
      
         return prev;
       });
       
   }
   const decrementListener = ()=>{
        changeCount((prev)=>{
          
          if(prev>0){
            prev--;
          }
          if(prev<=34){
            changeText((prev)=>{
              return "Say Allahu Akbar";
            });
          }
          else if(prev>34 && prev<=67){
            changeText(()=>{
              return "Say Alhamdulillah";
            });
          }
          else{
            changeText(()=>{
              return "Say Subhanallah";
            });
          
          }
          return prev;
        });
   }
   const resetListener = ()=>{
      changeCount((prev)=>{
        prev = 0;
        changeText((prev)=>{
          return "Say Allahu Akbar";
        })
        return prev;
      })
   }
  return (
    <div>
      <div className="container">
      <h1>Tasbeeh</h1>
      <p id="count">{initialCount}</p>
      <div className="btn-container">
        <button onClick={incrementListener}>+</button>
        <button onClick={decrementListener} >-</button>
      </div>
      <button onClick={resetListener}>Reset</button>
      
    </div>
    <DisplayCard count={initialCount} text={initialText}/>
    </div>
    
  );
}
export default App;
