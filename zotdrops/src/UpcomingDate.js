import React from "react";

function UpcomingDate(props) {
    // props.date, props.time, props.petrSticker
    return ( 
        <div>
            <h4> 
            {props.date} {props.time} {props.petrSticker}
            </h4>
        </div>
    );
}

export default UpcomingDate;