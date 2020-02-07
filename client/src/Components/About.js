import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MemoryGame from '../Static/Images/memory-game.png';
import HyfQuiz from '../Static/Images/hyf-quiz.png';
import QuotesApp from '../Static/Images/quotes-app.png';
import Jo from '../Static/Images/jo-about.jpg';
import Jo1 from '../Static/Images/jo-about4.jpg';
import Jo2 from '../Static/Images/jo-about3.jpg';
import Carousel from 'react-bootstrap/Carousel';



class About extends Component {
    render() {
        return (
            <div className='aboutMe-container'>
                {/* <h1 className='name'> Johanna May Baguio </h1> */}
                <Header />
                <Carousel className='carousel-aboutme'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Milan, Italy</h3>
                            <p>Duomo di Milano, July,2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Vatican City</h3>
                            <p>Saint Peter's Square, July,2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Venice, Italy</h3>
                            <p>Grand Canal, July,2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className='aboutMe-details'>
                    <p className='aboutMe-1 aboutMe-text'>
                        I’m a 28 year old web developer with a <i> Bachelor’s degree in Informations and Communications Technology </i>. I recently earned my post - graduate units in programming at <i> Hack Your Future  </i>where I was able to hone my skills in programming using the languages REACT, JAVA SCRIPT, Etc. Throughout the entire program, I was able to create the following projects:  </p>
                    <div className='projects-container-abtme'>

                        <div className='card-container-aboutMe'>
                            <Card style={{ width: '18rem' }} className='card-projects'>
                                <Card.Img variant="top" src={QuotesApp} className='card-image' />
                                <Card.Body>
                                    <Card.Title>Quotes Generator</Card.Title>
                                    <Card.Text>
                                        An app that will definitely give you the encouragement you need in whatever it is that you may be going through in your job, personal relationships or basically in life. I hope this lightens up your day. :D
                                    </Card.Text>
                                    <a href='https://daily-dose-of-positivity.netlify.com/ ' target='_blank' rel="noopener noreferrer"><Button variant="primary">Go to app</Button></a>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} className='card-projects'>
                                <Card.Img variant="top" src={HyfQuiz} className='card-image' />
                                <Card.Body>
                                    <Card.Title>HYF Quiz</Card.Title>
                                    <Card.Text>
                                        A short quiz  app about JavaScript with some timers and background music to keep you entertained and pressured at the same time. This is one of the homeworks we had in JS with HYF. C'mon give it a try. :D
                                    </Card.Text>
                                    <a href='https://johbaguio.github.io/hyf-quiz/? ' target='_blank' rel="noopener noreferrer"><Button variant="primary">Go to app</Button></a>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} className='card-projects'>
                                <Card.Img variant="top" src={MemoryGame} className='card-image' />
                                <Card.Body>
                                    <Card.Title>HYF-Christmas memory game</Card.Title>
                                    <Card.Text>
                                        2018, HackYourFuture gave us a christmas coding challenge. That is to incorporate christmas and our school. So, I did a memory game with our mentors pictures in the cards. Try it out! :D
                                    </Card.Text>
                                    <a href='https://johbaguio.github.io/hyf-christmas/ ' target='_blank' rel="noopener noreferrer"><Button variant="primary">Go to app</Button></a>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <p className='aboutMe-2 aboutMe-text'>
                        Aside from navigating the cyber world, I also love exploring different places in the world. I love immersing myself in the diversities found in the country’s structures, history, and culture. In every place I’ve set my foot into, I made sure to take a piece of that place with me. These fragments of memories are collectively known as <b><i> my excess luggage </i></b>. Hop on and take a peek inside! ✈   </p>


                    <a href='https://johbaguio.github.io/hyf-christmas/' target='_blank' rel="noopener noreferrer" className='excess-luggage-a'><img src="https://s19.postimg.cc/ik3qv5ysz/HEADER.jpg" className='excess-luggage-pic' alt='Excess Luggage Banner' /></a>
                    <img src="https://s19.postimg.cc/haljqnx5v/sign.png" alt="Xoxo,Johanna" className="signature-aboutme" />
                </div>


                <Footer />
            </div>

        )
    }
}

export default About;
