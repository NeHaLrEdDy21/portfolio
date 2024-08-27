"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import project1 from '../assets/proj1.jpg';
import project2 from '../assets/proj2.jpg';
import project3 from '../assets/proj3.png';
import project4 from '../assets/proj4.jpg';
import project5 from '../assets/project.jpg'
const Portfolio = () => {
    const Projects =[
        {
            title: "Data Visualization Dashboard ",
            desc:"Built an interactive dashboard for visualizing complex datasets. The dashboard includes charts, graphs, and filters to help users explore and analyze data effectively." ,
            Technologies:" JavaScript, D3.js, Tableau, Firebase ",
            git:"https://github.com/sarbhanub/tableau-superstore",
            src:project1
        },
        {
            title:"Chatbot with NLP",
            desc:"Created an intelligent chatbot that leverages natural language processing to handle customer queries and provide instant support. Integrated with a web interface for seamless user interaction.",
            Technologies:" Python, NLTK, Flask, Heroku ",
            git:"https://github.com/username/chatbot-nlp",
            src:project2
        },
        {
            title:"Url Shortener App",
            desc:"Shortifyy is a URL shortening service that helps you to shorten your long URLs and redirects when you visit the short url. It is built using TypeScript, Tailwind CSS, Node JS, and Supabase Postgress db. It has a interactive user-friendly interface and is easy to use.. ",
            Technologies:"Reactjs, Node JS, Supabase",
            git:"https://github.com/karthikeyaspace/shortifyy",
            src:project3
        },
        {
            title:"Code Editor App ",
            desc:"The Coder Companion: Your gateway to intuitive programming mastery. With AI assistance and a user-friendly interface, embark on an efficient journey to tackle coding challenges with confidence. ",
            Technologies:" Reactjs, Gemini api",
            git:"https://github.com/PPraneesh/theCoderCompanion",
            src:project4
        },
        {
            title:"Face Recognition System ",
            desc:" Implemented a face recognition system using pre-trained models. The system can detect and recognize faces in real-time, with applications in security and user identification ",
            Technologies:" Python, OpenCV, dlib, face_recognition library",
            git:"https://github.com/ageitgey/face_recognition",
            src:project5
        }
        

    ]
  return (
    <div className='text-white bg-gradient-to-b from-black  to-[#381a5f] py-18 mt-40' id="portfolio">
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
                My <br/><span className='text-orange-500'>Projects</span>
            </h1>

        <div className='max-w-[1600px] mx-auto space-y-24 '>
        {Projects.map((project,index) =>(
            <motion.div
                key = {index}
                initial= {{opacity:0,y:75}}
                whileInView={{opacity:1,y:0}}
                viewport = {{once: true}}
                transition={{duration:0.5,delay:0.25}}
                className={`flex ${index %2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex:col md:flex:row"}`}
            >
                <div className='space-y-2 max-w-{550px]'>
                    <h2 className='font-bold text-7xl text-white/70 my-4'>{`0${index+1}`}</h2>
                    <h2 className='text-4xl font-semibold'>{project.title}</h2>
                    <h2 className='text:2xl text-white/70 break-words'>{`Description: ${project.desc}`} </h2>
                    <h2 className='text-xl text-orange-500 font-semibold'>{project.Technologies}</h2>
                    <div>
                        <a href={project.git} className='text-white/50'>Git Link</a>
                    </div>
                </div>
                <div className='flex justify-center items-center w-[1200px] h-auto'>
                    <Image src = {project.src} alt ={project.title} className='h-[400px] w-auto oject-cover'/>
                </div>

            </motion.div>
    ))}
        </div>
    </div>
  )
}

export default Portfolio