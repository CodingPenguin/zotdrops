import { React, useState, useEffect } from "react";
import UpcomingDate from './UpcomingDate'
import axios from 'axios';

function DatesCalendar() {

    const [dates, setDates] = useState([])

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

    let formattedDates = []

    function getDropDates(){
        console.log('working')
        axios.get('http://127.0.0.1:5000/drops')
        .then((response) => {
            let serverData = []
          response = response['data']
          console.log(response)
          let today = new Date(),
          todayDate = (today.getMonth() + 1) + '/'  + today.getDate() + '/' + today.getFullYear();
          for (let i = 0; i < response.length; i++) {
            let dropDate = response[i]['_id']
            if (dropDate !== todayDate) {
                for (let j = 0; j < response[i]['drops'].length; j++) {
                    let dropName = response[i]['drops'][j]['dropper_name']
                    let dropTime = response[i]['drops'][j]['time']
                    serverData.push([dropDate, dropTime, dropName])
                }
            
            }
            
          }
          setDates(serverData)
        })
      }

    // [[dropDate, dropTime, dropperName], [dropDate, dropTime, dropperName], ...]
    // const getDrop = () => { 
    //     for (let index = 0; index < dates.length; index++) {
    //         let dropDate = dates[index]
            
    //         for (let innerIndex = 0; innerIndex < dates[index]["drops"].length; innerIndex++) {
    //             let dropTime = dates[index]["drops"][innerIndex]["time"]
    //             let dropperName = dates[index]["drops"][innerIndex]["dropper_name"]

    //             formattedDates.push([dropDate, dropTime, dropperName])
    //         }
    //     }
    // }

    // getDropDates()
    useEffect(getDropDates, [])
    let combinedDates = [];
    
    for (let i = 0; i < dates.length; i++) {
        combinedDates.push(<UpcomingDate date={dates[i][0]} time = {dates[i][1]} petrSticker = {dates[i][2]} />)
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