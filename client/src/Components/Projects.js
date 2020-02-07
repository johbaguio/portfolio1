import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import MemoryGame from '../Static/Images/memory-game.png';
import HyfQuiz from '../Static/Images/hyf-quiz.png';
import QuotesApp from '../Static/Images/quotes-app.png';
// import CurrencyConverter from '../Static/Images/currency-converter.png';
import ExcessLuggage from '../Static/Images/excess-luggage.png';


class Projects extends Component {
    render() {
        return (
            <div className='projects-container'>
                <Header />
                <h1 className='projects-text'>Projects</h1>
                <hr className='hr-projects0' />
                <hr className='hr-projects' />
                <div className='card-container'>
                    <Card style={{ width: '18rem' }} className='card-projects'>
                        <Card.Img variant="top" src={QuotesApp} className='card-image' />
                        <Card.Body>
                            <Card.Title>Quotes Generator</Card.Title>
                            <Card.Text>
                                An app that will definitely give you the encouragement you need in whatever it is that you may be going through in your job, personal relationships or basically in life. I hope this lightens up your day. :D
                            </Card.Text>
                            <a href='https://daily-dose-of-positivity.netlify.com/' target='_blank' rel="noopener noreferrer"><Button variant="primary">Go to app</Button></a>
                        </Card.Body>
                    </Card>
                    {/* <Card style={{ width: '18rem' }} className='card-projects'>
                        <Card.Img variant="top" src={CurrencyConverter}  className='card-image' />
                        <Card.Body>
                            <Card.Title>Currency Converter</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
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
                        <Card.Img variant="top" src={ExcessLuggage} className='card-image' />
                        <Card.Body>
                            <Card.Title>Excess Luggage</Card.Title>
                            <Card.Text>
                                A personal travel blog about the places I've been to. Here, I showcased the different places in my country and in Europe, and shared my thoughts as to how each place made me see the world as a whole.
                            </Card.Text>
                            <a href='https://johbaguio.github.io/hyf-christmas/' target='_blank' rel="noopener noreferrer"><Button variant="primary">Go to app</Button></a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='card-projects'>
                        <Card.Img variant="top" src={MemoryGame} className='card-image' />
                        <Card.Body>
                            <Card.Title>HYF-Christmas memory game</Card.Title>
                            <Card.Text>
                                2018, HYF gave us a christmas coding challenge. That is to incorporate christmas and our school. So, I did a memory game with our mentors pictures in the cards. Try it out! :D
                            </Card.Text>
                            <a href='https://johbaguio.github.io/hyf-christmas/' target='_blank' rel="noopener noreferrer"><Button variant="primary">Go to app</Button></a>
                        </Card.Body>
                    </Card>
                </div>
                <Footer />
            </div>

        )
    }
}

export default Projects;