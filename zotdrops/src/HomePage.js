import React from "react";
import DatesCalendar from './DatesCalendar';
import About from './About';
import AreYouPetr from './AreYouPetr';
import LiveDrop from './LiveDrop';

function HomePage() {
    return (
        <div>
            <LiveDrop />
            <DatesCalendar />
            <About />
            <AreYouPetr />
        </div>
    )
}

export default HomePage;