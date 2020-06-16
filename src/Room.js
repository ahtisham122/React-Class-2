import React, {useState} from 'react';
import './Room.css';

function Room() {
  const [light, setlight] = useState(false);
  let [temp, settemp] = useState(25);

  return (
    <div className={`room ${light ? "bright" : "dark"}`}>
        <center>
            <h1>This Room is {light ? "Bright" : "Dark"}</h1>
            <br/>
            <button className="btn" onClick={() => {setlight(true)}}>ON</button>
            <button className="btn" onClick={() => {setlight(false)}}>OFF</button>
        </center>
        <center>
            <h1>Current Room Tumpreature Is {temp} C</h1>
            <br/>
            <button className="btn" onClick={() => {settemp(++temp)}}>+</button>
            <button className="btn" onClick={() => {settemp(--temp)}}>-</button>
        </center>
    </div>
  );
}

export default Room;