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
import  {FiMail} from 'react-icons/fi'
import {SiInstagram} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'
import {TiSocialLinkedin} from 'react-icons/ti'
import headerImage from '../../img/hea.jpeg'
import './style.css'

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const handelContactClick=(url)=>{
        const win = window.open(url,'_blank')
        win.focus()
    }
    const work = [
        {
            name: "project 1",
            link: '#',
            imar: headerImage
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
                                work?.map((work,index) => {
                                    return (
                                        <a href={work?.link} target="_blank" key={work?.name}>
                                            <div className='porfolio-card'>
                                                <div className='portfolio-image'>
                                                    <img src={work.imar} alt={work?.name}/>
                                                    <div className='portfolio-title'>
                                                        <h3>
                                                            {work?.name}
                                                        </h3>
                                                    </div>
                                                    <div className='count'>
                                                        {index}
                                                    </div>
                                                </div>
                                            </div>
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
                    <Animator animation={batch(Fade(),Sticky(),MoveOut(-1000,-400))}>
                        <div className='background-image-container'>
                            <img src={headerImage} alt="snjsfn"/>
                            <div className='black-background'></div>
                        </div>
                    </Animator>
                    <Animator animation={batch(Fade(),Sticky(),MoveOut(1000,500))}>
                        <div className='details'>
                            <h2 className='greatting'>Hello</h2>
                            <p className='bio'>
                            I am a 3rd-year Electrical Engineering student at Government College of Engineering, Amravati, specializing in Full Stack React Development and freelancing. With a passion for technology and coding, I take pride in crafting seamless web applications that prioritize exceptional user experiences.
                            </p>
                            <p className='bio'>
                            As a freelancer, I've had the privilege of working on diverse projects, collaborating with clients to bring their ideas to life. This experience has sharpened my technical skills and enhanced my problem-solving abilities, ensuring I deliver high-quality solutions within timelines. Alongside my freelancing endeavors, I actively contribute to the college community as a core team member of Prajwalan, the prestigious tech fest, and as a co-lead of Google Developer Student Clubs (GDSC). My portfolio showcases my expertise and dedication, and I'm excited to connect and collaborate on impactful projects. Thank you for visiting!
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
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:"100%",
                }}>
                    <span style={{fontSize:'40px'}}>
                    <Animator animation={MoveIn(-1000,0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={()=>handelContactClick('url')}>
                            <SiInstagram color='white' className='contact-list-icon'/>
                                <p>_pranav.hole_</p>
                        </div>
                    </Animator>
                    <Animator animation={MoveIn(-1000,0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={()=>handelContactClick('url')}>
                            <FiMail color='white' className='contact-list-icon'/>
                                <p>pranavhole050610@gmail.com</p>
                        </div>
                    </Animator> 
                    <Animator animation={MoveIn(-1000,0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={()=>handelContactClick('url')}>
                            <FiGithub color='white' className='contact-list-icon'/>
                                <p>pranavhole050610@gmail.com</p>
                        </div>
                    </Animator> 
                    <Animator animation={MoveIn(-1000,0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={()=>handelContactClick('url')}>
                            <TiSocialLinkedin color='white' className='contact-list-icon'/>
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