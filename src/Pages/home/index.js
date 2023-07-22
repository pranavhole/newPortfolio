import React from 'react';
import {
    ScrollContainer,
    ScrollPage,
    Animator,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn,
} from 'react-scroll-motion';
import Project from './project';
import { FiMail } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { TiSocialLinkedin } from 'react-icons/ti'
import headerImage from '../../img/hea.jpeg'
import './style.css'

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const handelContactClick = (url) => {
        const win = window.open(url, '_blank')
        win.focus()
    }
    const work = [
        {
            name: "project 1",
            link: '#',
            class: 'card1',
            imar: headerImage,
            description: 'dkjkfjknfkenfknjfnrjkfnkbrgh'
        },
        {
            name: "project 1",
            link: '#',
            class: 'card2',
            imar: headerImage,
            description: 'dkjkfjknfkenfknjfnrjkfnkbrgh'
        },
        {
            name: "project 1",
            link: '#',
            class: 'card3',
            imar: headerImage,
            description: 'dkjkfjknfkenfknjfnrjkfnkbrgh'
        }
    ]
    return (
        <>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <div className='image-container'>
                            <img src={headerImage} />
                            <div className='black-background'></div>
                        </div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                        <div className='name'>
                            <h2 className='first'>
                                Pranav
                            </h2>
                        </div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
                        <div className='name'>
                            <h2 className='Last'>
                                Hole
                            </h2>
                        </div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
                        <div className='position'>
                            <h2 className='Last'>
                                Full-Stack Devloper
                            </h2>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage >
                    <Animator animation={ZoomInScrollOut}>
                        <div className='section-title'>
                            Portfolio
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage >
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))} >
                        <div className='portfolio-content'>
                            {
                                work?.map((work, index) => {
                                    return (
                                        <a href={work?.link} target="_blank" key={work?.name}>
                                            <Project
                                                key={index}
                                                imgSrc={work.imar}
                                                topic={work.name}
                                                description={work.description}
                                            />
                                        </a>

                                    )
                                }
                                )
                            }
                        </div>

                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <Animator animation={ZoomInScrollOut}>
                        <div className='section-title about-me'>
                            About Me
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
                        <div className='background-image-container'>
                            <img src={headerImage} alt="snjsfn" />
                            <div className='black-background'></div>
                        </div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
                        <div className='details'>
                            <h2 className='greatting'>Hello</h2>
                            <p className='bio'>
                                I am a passionate 3rd-year Electrical Engineering student at Government College of Engineering, Amravati, specializing in Full Stack React Development and freelancing. With a strong commitment to crafting seamless web applications and prioritizing exceptional user experiences, I take pride in collaborating with clients to bring their ideas to life. My freelancing experience has honed my technical skills and problem-solving abilities, enabling me to deliver high-quality solutions within deadlines. In addition to my freelancing work, I actively contribute to the college community as a core team member of Prajwalan, the prestigious tech fest, and as a co-lead of Google Developer Student Clubs (GDSC). My portfolio showcases my expertise and dedication, and I eagerly look forward to connecting and collaborating on impactful projects. Thank you for visiting!
                            </p>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={5}>
                    <Animator animation={ZoomInScrollOut}>
                        <div className='section-title contact'>
                            Contact
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={5}><div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100%",
                    padding: '10px'
                }}>
                    <span style={{ fontSize: '40px' }}>
                        <Animator animation={MoveOut(-1000, 0)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 'clamp(22px,7vw,40px)',
                                padding: '10px'
                            }}
                                onClick={() => handelContactClick('url')}>
                                <SiInstagram color='white' className='contact-list-icon' />
                                <p>_pranav.hole_</p>
                            </div>
                        </Animator>
                        <Animator animation={MoveOut(1000, 0)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 'clamp(22px,7vw,40px)',
                                padding: '10px'
                            }}
                                onClick={() => handelContactClick('https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttNmKlQKGTFtpCNLtQxtsxqpzHKqJdqGDHVrzbVMCQgCJNwwPsnKgJkwfqVQqJkLVbMmL')}>
                                <FiMail color='white' className='contact-list-icon' />
                                <p>pranavhole050610@gmail.com</p>
                            </div>
                        </Animator>
                        <Animator animation={MoveOut(-1000, 0)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 'clamp(22px,7vw,40px)',
                                padding: '10px'
                            }}
                                onClick={() => handelContactClick('https://github.com/pranavhole')}>
                                <FiGithub color='white' className='contact-list-icon' />
                                <p>pranavhole</p>
                            </div>
                        </Animator>
                        <Animator animation={MoveOut(1000, 0)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 'clamp(22px,7vw,40px)',
                                margin: '10px'
                            }}
                                onClick={() => handelContactClick('https://www.linkedin.com/in/pranav-hole-642a46278/')}>
                                <TiSocialLinkedin color='white' className='contact-list-icon' />
                                <p>pranavhole050610@gmail.com</p>
                            </div>
                        </Animator>
                    </span>
                </div>

                </ScrollPage>



            </ScrollContainer>
        </>
    )
}

export default Home