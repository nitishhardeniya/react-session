import React from 'react';

const Card = (props) => {
    return <div className="card">
        <div className="title">
        {props.username}
        </div>
        <img className="img-circle" src={props.avatar} width={100} height={100} />
        <a href={props.profilePath} target="_blank" className="link">Profile</a>
    </div>
}

export default Card;