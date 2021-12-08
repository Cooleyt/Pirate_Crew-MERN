import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


const PirateCard = (props) => {
    const {name, imgURL, position, treasures, phrase, pegLeg, eyePatch, handHook} = props.data;

    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/pirates/delete/${_id}`)
            .then(res => {
                
                console.log(res);
                props.setLoaded(prevState => ! prevState);
            })
            .catch(err => console.log(err));
    }


    return(
        <div className = "PirateCard">
                <h4>
                <h3><Link to = {`/pirates/${props.data._id}`} class="text-dark" href="#">{name}</Link></h3>
                <img src ={imgURL} alt ="name"/>
                <p><i>Position:{position}</i></p>
                <p>Treasures:{treasures}</p>
                <p>Catch Phrase:{phrase}</p>
                <p>Peg Leg:{pegLeg}</p>
                <p>Eye Patch:{eyePatch}</p>
                <p>Hand Hook:{handHook}</p>
                </h4>
            <button className="delete btn-danger" onClick = {() => onDeleteHandler(props.data._id)}>Walk the Plank</button>
        </div>
    )
}

export default PirateCard;