import React from "react";

import formatName from '../../shared/utils/formatName';
import formatEmail from "../../shared/utils/formatEmail";
import formatDate from "../../shared/utils/formatDate";
import "./PersonListItem.css";

const PersonListItem = (props) => {
    return (
        <li className="collection-item avatar" style={{backgroundColor: props.data.gender === 'female' ? "#ffebee" : "#fff"}}>
            <img src={props.data.photo} alt="person" className="circle" />
            <span className="title">{formatName(props.data.name)}</span>
            <p><i className="material-icons">email</i>{formatEmail(props.data.email)}</p>
            <p><i className="material-icons">cake</i>{formatDate(props.data.dob)}</p>
        </li>
    )
}

export default PersonListItem;