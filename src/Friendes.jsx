import { useState } from "react";
import "./Frinedes.css";
import { useEffect } from "react";
import Friend from "./Friend";
export default function () {
  const [Friendes, setFriendes] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriendes(data));
  }, []);
  return (
    <div className="box">
     <h3>Frinends : {Friendes.length}</h3> 
          {
            Friendes.map(friend=> <Friend friend={friend}></Friend>)
          }
    </div>
  );
} 
