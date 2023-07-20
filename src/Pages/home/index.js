import React from 'react';
import {
    ScrollContainer,
    ScrollPage,
    Animator,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    StickyIn,
    ZoomIn,
} from 'react-scroll-motion';
import { FiMail, FiGithub } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { TiSocialLinkedin } from 'react-icons/ti';
import headerImage from '../../img/hea.jpeg';
import './style.css';

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

    const handleContactClick = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    };

    const work = [
        {
            name: 'project 1',
            link: '#',
            imar: headerImage,
        },
    ];

    return (
        <>
            <ScrollContainer>
                {/* ...ScrollPage and other content... */}

                <ScrollPage page={5}>
                    <Animator animation={ZoomInScrollOut}>
                        <div className='section-title contact'>Contact</div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={5}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <span style={{ fontSize: '40px' }}>
                            <Animator animation={MoveIn(-1000, 0)}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onClick={() => handleContactClick('url')}
                                >
                                    <SiInstagram color='white' className='contact-list-icon' />
                                    <p>_pranav.hole_</p>
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(-1000, 0)}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onClick={() => handleContactClick('url')}
                                >
                                    <FiMail color='white' className='contact-list-icon' />
                                    <p>pranavhole050610@gmail.com</p>
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(-1000, 0)}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onClick={() => handleContactClick('url')}
                                >
                                    <FiGithub color='white' className='contact-list-icon' />
                                    <p>github.com/pranavhole050610</p>
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(-1000, 0)}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onClick={() => handleContactClick('url')}
                                >
                                    <TiSocialLinkedin color='white' className='contact-list-icon' />
                                    <p>linkedin.com/in/pranav-hole</p>
                                </div>
                            </Animator>
                        </span>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </>
    );
};

export default Home;
