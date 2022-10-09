import React,{useState} from 'react';
import './DisplayCard.css';
function DisplayCard(props){
  const [text,changeText] = useState('Say Allahuakbar');
  
  return(
    <div className="card">
      <p>{props.text}</p>
      </div>
  );
}
export default DisplayCard;