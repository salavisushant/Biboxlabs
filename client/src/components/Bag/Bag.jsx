import "./bag.css";

import { useState, useEffect, useRef } from "react";
import {useDraggable} from './useDragable'



const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <div className="card" ref={cardRef}>
      {children}
    </div>
  );
};

export const Bag = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getBag()
    },[])


        const getBag = async () => {
        let res = await fetch("https://bibox-app.herokuapp.com/bag")
        let data = await res.json();
            console.log(data.bag);
            localStorage.setItem("count", data.bag.length);
        console.log(data.bag.length);
        setList(data.bag);
    }

    return (
        <div className="bagDiv">
            {
                list.map((e) =>(
                    <DraggableCard className="dragCard" key={e._id}>
                        <img className="dragImg" src={e.image} alt="" />
                       
                    </DraggableCard>
                ))
            }
      </div>
   
    )

    
    
}