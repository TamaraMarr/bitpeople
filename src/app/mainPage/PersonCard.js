import React from "react";
import formatName from "../../shared/utils/formatName";
import formatEmail from "../../shared/utils/formatEmail";
import formatDate from "../../shared/utils/formatDate";

const PersonCard = (props) => {
    return (

        <div className="col s12 m4 l4 xl4">
            <div className="card" style={{backgroundColor: props.data.gender === 'female' ? "#ffebee" : "#fff"}}>
                <div className="card-image">
                    <img src={props.data.photo} alt="person" />
                    <span className="card-title">{formatName(props.data.name)}</span>
                </div>
                <div className="card-content">
                    <p><i className="material-icons">email</i>{formatEmail(props.data.email)}</p>
                    <p><i className="material-icons">cake</i>{formatDate(props.data.dob)}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonCard;