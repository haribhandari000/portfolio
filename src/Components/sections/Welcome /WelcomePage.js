import React, {lazy, Suspense} from 'react';
import Fade from 'react-reveal/Fade';
import {Parallax} from "react-scroll-parallax";
const Coding = lazy(() => import( "./Coding"));

const WelcomePage = () => {
    const copy = 'HariBhandari'.split('');
    return (
        <body id="home" className="py-5 " style={{width: '100%', overflow: 'hidden'}}>
        <div className='primary-overlay text-white '>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-8 d-lg-block text-center">
                        <div className="root">
                        <span className="copy h1">
                        {copy.map((letter, i)=>(<Parallax key={i} x={[0,100 * (i - 3)]}  className="letter"
                        >{letter}</Parallax>))
                        }
                        </span>
                        </div>
                        <h1 className="display-2 mt-5 pt-5 text-center">

                        </h1>
                        <p className="welcome-page-font-size text-white ">Welcome to my Portfolio</p>
                        <a href="https://1drv.ms/w/s!AlhjcQhH4HlTgu96qRdZqE2NJP7Liw?e=3yIgVN " className="btn btn-outline-secondary btn-lg text-white">
                            <i className="fas fa-download"/> Download my CV
                        </a>
                        <a className="btn btn-outline-secondary btn-lg text-white mx-2" data-toggle="modal" data-target="#contactModal" href='#contactModal'>
                            <i className="fa fa-phone"/> Contact me
                        </a>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <Suspense fallback={<div>Loading</div>}>
                            {window.innerWidth >= 960 && <Fade bottom><Coding/></Fade>}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default WelcomePage;