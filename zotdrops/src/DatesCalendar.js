import React from "react";
import UpcomingDate from './UpcomingDate'

function DatesCalendar() {

    let mockObj = {
        "_id": "11/20/21",
        "drops": [
            {
                'time': '12:00',
                'dropper_name': 'petr',
                'location_name': 'dbh',
                'location_coordinates': {
                    'latitude': 'north',
                    'longitude': 'west'
                }

            }
        ]
    }

    let dates = [mockObj, mockObj, mockObj]
    let formattedDates = []

    // [[dropDate, dropTime, dropperName], [dropDate, dropTime, dropperName], ...]
    const getDrop = () => { 
        for (let index = 0; index < dates.length; index++) {
            let dropDate = dates[index]["_id"]
            
            for (let innerIndex = 0; innerIndex < dates[index]["drops"].length; innerIndex++) {
                let dropTime = dates[index]["drops"][innerIndex]["time"]
                let dropperName = dates[index]["drops"][innerIndex]["dropper_name"]

                formattedDates.push([dropDate, dropTime, dropperName])
            }
        }
    }

    getDrop()

    let combinedDates = [];

    for (let i = 0; i < formattedDates.length; i++) {
        combinedDates.push(<UpcomingDate date={formattedDates[i][0]} time = {formattedDates[i][1]} petrSticker = {formattedDates[i][2]} />)
    }

    return ( 
        <>
            <h2>Upcoming Drops</h2>
            <table class="drop-table">
                <thead>
                    <th scope = "col" class = "table-header"> Date</th>
                    <th scope = "col" class = "table-header"> Time</th>
                    <th scope = "col" class = "table-header"> Name</th>
                </thead> 
                <tbody>
                    {combinedDates}
                </tbody>
            </table>
        </>
    );
}

export default DatesCalendar;
