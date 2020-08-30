import React, {Fragment, Suspense, lazy, useState, useEffect} from 'react';

import './bootstrap.css'
import Footer from "./Components/layout/Footer";

const Navbar = lazy(() => import( "./Components/layout/Navbar"));
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const WelcomePage = lazy(() => import('./Components/sections/Welcome /WelcomePage'))
const AboutMe = lazy(() => import('./Components/sections/About Me/AboutMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))


function App() {


    return (
        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                    <div>
                        <Navbar/>

                    </div>
            </Suspense>
            <Suspense fallback={<div>loading...</div>}>
                <WelcomePage/>

            </Suspense>
            <Suspense fallback={<div>loading...</div>}>
                <AboutMe/>
            </Suspense>
            <Suspense fallback={<div>loading...</div>}>
                <Skills/>
            </Suspense>

            <Suspense fallback={<div>loading...</div>}>
                <Projects/>
            </Suspense>

            <Footer/>


        </Fragment>
    );
}

export default App;
