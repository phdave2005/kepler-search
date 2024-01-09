import React, { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Home from './home/home.js'
import Help from './help/help.js'
import About from './about/about.js'
import HelpIcon from './elements/help-icon/help-icon.js'
import Settings from './settings/user-settings.js'
import SettingsToggle from './elements/settings/settings-toggle.js'

const App = () => {
    const textMap = {
        en: {
            about: 'About DVP',
            aboutKepler: 'About Kepler'
        },
        es: {
            about: 'Acerca de DVP',
            aboutKepler: 'Acerca de Kepler'
        },
        fr: {
            about: 'À propos DVP',
            aboutKepler: 'À propos Kepler'
        },
        it: {
            about: 'Di DVP',
            aboutKepler: 'Di Kepler'
        }
    };
    const language =  window?.localStorage?.getItem("language-used") || 'en';
    const [state, setState] = useState({
        about: textMap[language].about,
        aboutKepler: textMap[language].aboutKepler
    });
    return (
        <BrowserRouter>
            <div className="App">
                <header className="flex-align-top">
                    <div className="ML4">
                        <h1 className="M0 P0">
                            <span>Kepler Stats</span>
                        </h1>
                    </div>
                    <div className="action-container MR4">
                        <HelpIcon />
                        <SettingsToggle />
                    </div>
                </header>
                <Routes>
                    <Route path="/kepler-stats" element={<Home />} />
                    <Route path="/kepler-stats/help" element={<Help />} />
                    <Route path="/kepler-stats/settings" element={<Settings />} />
                    <Route path="/kepler-stats/about" element={<About />} />
                </Routes>
                <footer className="flex-align-center">
                    <span className="ML4">
                        <a href="https://twitter.com/phdave2005?ref_src=twsrc%5Etfw" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                    </span>
                    <span>&copy;{new Date().getFullYear()} <a href="https://phdave.com" target="_blank" rel="noreferrer">PhDave LLC</a></span>
                    <span>
                        <a id="about-kepler" href="https://www.asterank.com/kepler" target="_blank" rel="noreferrer">{state.aboutKepler}</a>
                    </span>
                    <span className="MR4">
                        <Link id="about" to="/kepler-stats/about">{state.about}</Link>
                    </span>
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
