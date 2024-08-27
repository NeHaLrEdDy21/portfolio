"use client";
import React from 'react';
import Image from "next/image";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png"

const About = () => {
    return (
        <div className='max-w-[1200px] px-4 mx-auto' id="about">
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
                About<span className='text-orange-500'>Me</span>
            </h1>
            <div className='flex flex-row items-center justify-center space-x-4'>
                <div className='w-1/2 h-[540px] bg-white/10 background-blur-lg border border-white/20  rounded-xl overflow-hidden '>
                    <div className='flex flex-row p-6'>
                        <Image src={book} alt="book" className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                            <p className='text-lg text-white/70 '> <br />B.Tech in Computer Science and Engineering, Indian Institute of Technology (IIT)
                                Bombay
                                Graduated: 2019<br /> CGPA: 9.9 <br /><br />
                                ●M.Tech in Software Engineering, National Institute of Technology (NIT) Trichy
                                Graduated: 2021 <br />CGPA: 9.69</p>
                        </div>
                    </div>
                </div>





                <div className='w-1/2 h-[540px] bg-white/10 background-blur-lg border border-white/20  rounded-xl overflow-hidden '>
                    <div className='flex flex-row p-6'>
                        <Image src={pc} alt="book" className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Skills</h2>
                            <p className='text-lg text-white/70 '><br /><strong>Skills from IIT bombay:</strong><br /><br />
                                Focused on software development, data structures, algorithms, and systems
                                programming. Completed projects involving machine learning and distributed <br /><br />
                                <strong>Skills from NIT Trichy:</strong><br /><br />
                                Specialized in advanced software development methodologies, project management,
                                and cloud computing. Developed a thesis on scalable web applications.</p>
                        </div>
                    </div>
                </div>

            </div>




            <div className='flex flex-row items-center justify-center p-4 space-x-4'>
                <div className='w-full col-span-8 relative bg-white/10 background-blur-lg border border-white/20  rounded-xl overflow-hidden '>
                    <div className='flex flex-row p-6'>
                        <Image src={finance} alt="book" className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                            <p className='text-lg text-white/70 '><strong>Internships: </strong><br />
                                ● Front-End Development Intern, Web Creators India, Delhi <br />
                                June 2016 - August 2016 <br />
                                Assisted in designing and implementing user interfaces using HTML, CSS, and
                                JavaScript. Worked on improving website responsiveness and cross-browser
                                compatibility. Contributed to the development of a new customer feedback portal. <br />
                                ● Machine Learning Intern, AI Innovations, Mumbai <br />
                                January 2017 - June 2017 <br />
                                Participated in building machine learning models for predictive analytics. Assisted in
                                data cleaning, feature extraction, and model training using Python. Collaborated
                                with senior data scientists on deploying models into production environments. <br />
                                <br />
                                <strong>Full-Time Experience:</strong><br />
                                ● Junior Software Developer, Code Base Ltd., Chennai <br />
                                August 2017 - December 2019 <br />
                                Worked on developing backend services using Python and Django. Participated in
                                designing RESTful APIs and integrating them with front-end applications. Conducted
                                unit testing and debugging, and contributed to the development of internal tools to
                                streamline workflows. <br />
                                ● Senior Software Engineer, NextGen Technologies, Bangalore <br />
                                January 2020 - Present <br />
                                Led the development of a high-traffic e-commerce platform. Implemented scalable
                                solutions using AWS and Docker, and optimized performance for handling large
                                volumes of transactions. Coordinated with product managers to define requirements
                                and deliver high-quality software.</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>



    )
}

export default About