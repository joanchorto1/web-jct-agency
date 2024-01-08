import React from 'react';
import LogoJCT from "../img/LOGO(Fondo Transparent).png";
import Joanimg from "../img/Selecció_213.png"
import Layout from "../layouts/layout";
import {Helmet} from "react-helmet";

const Home = () => {

    return (

        <Layout>
            <Helmet>
                <title>Phoenix Group Tarragona - Contacta con nuestra agencia de Marketing Digital. </title>
                <link rel="canonical" href="https://phoenixgrp.es/contacto"/>
                <meta name={"description"} content={"Estamos aquí para responder a tus preguntas y discutir cómo podemos ayudarte a alcanzar tus objetivos. Puedes contactarnos a través de los siguientes métodos(Mail/Telefono/Formulario de Contacto)"}/>
            </Helmet>
            <div className="d-flex flex-column text-dark bg-dark">

                {/* Presentation Banner */}
                <section className="container" >

                    <div>
                        <nav className=" pt-3 navbar navbar-expand-lg navbar-dark">
                            <ul className="navbar-nav d-flex" style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                <li className="nav-item">
                                    <strong>
                                        <a className="nav-link text-white" href="/" style={{ fontSize: '1.2rem', marginRight: '15px' }}>Home</a>
                                    </strong>
                                </li>
                                <li className="nav-item">
                                    <strong>
                                        <a className="nav-link text-white" href="/contacto" style={{ fontSize: '1.2rem' }}>Contact</a>
                                    </strong>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={"d-flex  align-items-center text-white justify-content-between"} style={{ height: '40vh' }}>
                        <div>
                            <img className="" style={{ maxWidth: '50%', height: 'auto' }} src={LogoJCT} alt="" />
                        </div>


                        <div>
                            <h1 className="pb-3">Joan Chortó Tomàs</h1>
                            <h2 className={"text-white"}>Freelancer & Junior Software Developer </h2>
                        </div>
                    </div>

                </section>



                {/* About Me */}
                <section className="container-fluid bg-white p-5 text-black">
                    <div className={"container align-items-center "}>
                        <div className="row container">
                            <div className="col-lg-6">
                                <h2 className="mb-4">About Me</h2>
                                <p>
                                    Hello! I'm Joan Chortó Tomàs, a passionate Freelancer and Junior Software Developer. My goal is to create innovative and efficient solutions using my knowledge in various technologies.
                                </p>
                                <p>
                                    Currently, I specialize in frontend development using technologies such as React and Bootstrap. My focus is on creating engaging and functional user experiences.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="mb-4">Education and Work Experience</h2>
                                <p><strong>Education:</strong> Ies de L'EBRE, 2022 - 2024 - FP higher degree for multiplatform application developer </p>
                                <p><strong>Work Experience:</strong> Gis SL, Junior Frontend Developer, 2019 - 2020</p>
                            </div>
                        </div>
                        <div className="row container">

                            <div className="col-lg-6">
                                <h2 className="mb-4">Personal Details</h2>
                                                               <p>
                                    What motivates me most in my work is witnessing how my projects grow and fulfill their purpose. My current goal is to find a work environment that allows me to continue learning and tackle interesting challenges. I'm constantly researching and exploring new features and frameworks.
                                </p>
                            </div>
                            <div className="col-lg-6 text-center">
                                <img className={"h-auto"} style={{ maxWidth: '50%', height: 'auto' }} src={Joanimg} alt="Joan Chortó Tomàs"/>
                            </div>
                        </div>
                    </div>




                </section>

                {/* My Projects */}
                <section style={{ paddingTop: 0 }} className="container-fluid bg-light pb-5 pt-5">
                    <div className="container">
                        <h2 className="text-center text-black mb-4">My Projects</h2>
                        <div className="row">
                            {/* Project 1 */}
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card border-5 border-dark h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Personal Blog</h5>
                                        <ul >
                                            <li>Description:</li>
                                            <p>Created a personal blog using Node.js and Express for the backend, MongoDB as the database, and React for the frontend. Implemented CRUD functions for blog articles.</p>
                                            <li>Technologies used:</li>
                                            <p>Node.js, Express, MongoDB, React, HTML, CSS, JavaScript.</p>
                                            <li>Repository:</li>
                                            <a  href="https://github.com/your_username/personal-blog" target="_blank" rel="noopener noreferrer">GitHub</a>
                                            <li>Web:</li>
                                            <a href="https://github.com/your_username/personal-blog" target="_blank" rel="noopener noreferrer">Link</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card border-5 border-dark h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Task Management App</h5>
                                        <ul>
                                            <li>Description:</li>
                                            <p>Developed a task management application with functionalities to create, update, and delete tasks. Used React for the user interface and Firebase for real-time data storage.</p>
                                            <li>Technologies used:</li>
                                            <p>React, Firebase, HTML, CSS, JavaScript.</p>
                                            <li>Repository:</li>
                                            <a href="https://github.com/your_username/task-app" target="_blank" rel="noopener noreferrer">GitHub</a>
                                            <li>Web:</li>
                                            <a href="https://github.com/your_username/personal-blog" target="_blank" rel="noopener noreferrer">Link</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card border-5 border-dark h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Personal Portfolio</h5>
                                        <ul>
                                            <li>Description:</li>
                                            <p>Created my personal portfolio using React for the frontend. Showcases darkrmation about me, skills, projects, and contact details.</p>
                                            <li>Technologies used:</li>
                                            <p>React, HTML, CSS, JavaScript.</p>
                                            <li>Repository:</li>
                                            <a href="https://github.com/your_username/personal-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                                            <li>Web:</li>
                                            <a href="https://github.com/your_username/personal-blog" target="_blank" rel="noopener noreferrer">Link</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid bg-dark-subtle  text-black text-center">
                    <div className={"container p-5"}>
                        <div>
                            <h2 className="mb-4">Ready to take your project to the next level?</h2>
                            <p className="lead">Contact me, and let's create something amazing together!</p>
                        </div>
                        <div>
                            <button className={"btn bg-dark text-light mt-5"}><strong>Contact Now</strong></button>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="container-fluid p-5 bg-white">
                    <div className={"container"}>
                        <h2 className=" mb-4">Skills</h2>
                        <div className="row container">
                            <div className="col-lg-6">
                                <h3>Frontend</h3>
                                <ul>
                                    <li>React.js</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                </ul>
                                <p>Proficiency Level: Advanced</p>
                            </div>
                            {/* Backend */}
                            <div className="col-lg-6">
                                <h3>Backend</h3>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>PHP</li>
                                </ul>
                                <p>Proficiency Level: Intermediate</p>
                            </div>
                            <div className="row container">
                                {/* Databases */}
                                <div className="col-lg-6">
                                    <h3>Databases</h3>
                                    <ul>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>PostgreSQL</li>
                                    </ul>
                                    <p>Proficiency Level: Advanced</p>
                                </div>
                                {/* Other Skills */}
                                <div className="col-lg-6">
                                    <h3>Other Skills</h3>
                                    <ul>
                                        <li>Git</li>
                                        <li>RESTful APIs</li>
                                    </ul>
                                    <p>Proficiency Level: Advanced</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Contact Banner */}
                <section className="bg-dark-subtle pt-5 pb-5">
                    <div className="container pb-5">
                        <h2 className="text-center text-dark-emphasis mb-4">Contact Now!</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Request More Information</h5>
                                        <p className="card-text">
                                            Feel free to ask any questions or inquire about anything!
                                        </p>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="name">Name:</label>
                                                <input type="text" className="form-control" id="name" name="name" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                            </div>
                                            <button type="submit" className="btn btn-dark text-white mt-5"><strong>Contact</strong></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default Home;

