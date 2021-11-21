import React from "react";

function UpcomingDate(props) {
    // props.date, props.time, props.petrSticker
    return ( 
        <tr>
            <td class= "date-entry"> {props.date} </td>
            <td class= "date-entry"> {props.time} </td>
            <td class= "date-entry"> {props.petrSticker} </td>
        </tr>
    );
}

export default UpcomingDate;