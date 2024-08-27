"use client"
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import message from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png"
const Hero = () => {
  return (
    <div className="py-48 relative overflow-clip  bg-gradient-to-b from-[#000] via-[#2B1942] via-40% to-[#DBAF6E]">
           
        <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
           
           <div className=" relative ">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hi,I am</h1>
                    <h1 className="text-[#E48A57]">Alex</h1>
                </div>

           
           <motion.div
            className="absolute left-[280px] top-[170px]"
            drag
           >
                <Image
                   src = {cursor}
                   height = "150"
                   width = "150" 
                   alt= ""
                   className=""
                   draggable = "false"
                />

           </motion.div>

           <motion.div
            className="absolute left-[280px] top-[170px]"
            drag
           >
                <Image
                   src = {lightning}
                   height = "120"
                   width = "120" 
                   alt= ""
                   className=""
                   draggable = "false"
                />

           </motion.div>
           <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
           I’m Alex, a software engineer with a deep passion for creating scalable and efficient
           web applications
           </p>
           <Image 
            src={profilepic}
            alt="profile picture"
            className="h-auto w-auto mx-auto"
           />
        </div>
    </div>
  )
}
export default Hero