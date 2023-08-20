import React from 'react';

export default function Info(props){
    return(
            <div className="card col-sm-6 m-3" style={{'width':'16rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.des}</p>
                </div>
            </div>
    )
}