import "./todo.css";
import CatEars from '../../assets/CatEars.png';
import { useState } from 'react';

function Todo() {
    const [div, setDiv] = useState([]);

    function handleCreate(){
        const newdiv = {
            id: div.length
        }
        setDiv((prevdiv) => [...prevdiv, newdiv])
        console.log(newdiv)
        console.log(div);
        
    }
    function handleDelete(id){
        const newdiv = div.reduce((acc, elem) =>{
            if(elem.id !== id) acc.push(elem)
                return acc
        },[]);
        setDiv(newdiv)
    }

    return (
        <div className="Todo">
            <button className="createButton" onClick={handleCreate}>Create</button>
            <div className="container">
                {div.map((elem) => {
                    return (
                        <div key={elem.id} className="containerElem">
                            <img className="catEars" src={CatEars} alt="Cat Ears" />
                            <div className="eyes">
                            <div className="eye">
                                <div className="eyeIn">
                                </div>
                            </div>
                            <div className="eye">
                                <div className="eyeIn">
                                </div>
                            </div>
                            </div>
                            <p>{`ID: ${elem.id}`}</p>
                            <button onClick={() => handleDelete(elem.id)} className="deleteButton">Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo;

