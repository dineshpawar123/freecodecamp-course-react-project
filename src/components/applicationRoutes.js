import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import ReactjsLibraryProjects from '../pages/home';
import Clock from '../pages/clock';
import DrumMachine from '../pages/drumMachine';
import Calculator from '../pages/calculator';
import QuoteMachine from '../pages/quoteMachine';
import MarkDownPreview from '../pages/markDownPreview';
import UserCrude from '../pages/userCrude';
import AboutMe from '../pages/aboutMe';
import Auth from '../pages/auth';

function ApplicationRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<ReactjsLibraryProjects />} />
                    <Route path="/quote" element={<QuoteMachine />} />
                    <Route path="/drum" element={<DrumMachine />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/previewer" element={<MarkDownPreview />} />
                    <Route path="/clock" element={<Clock />} />
                    <Route path="/crude" element={<UserCrude />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Router>
        </>
    )
}

export default ApplicationRoutes
