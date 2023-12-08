"use client"
import {motion} from "framer-motion";
import SocialCard from "@/app/components/socialCard";
import {BiLogoInstagram} from "react-icons/bi";




export default function Tiel() {
    return (
        <div
            className={"bg-gradient-to-l from-gray-300 to-gray-400 overflow-hidden min-h-screen flex  justify-center md:justify-normal items-center min-w-screen "}>

            <motion.div className="min-w-[250px] md:min-w-[333px]  min-h-screen">
                <motion.div
                    initial={{y: -450}}
                    animate={{y: 250}}
                    transition={{delay: 0, duration: 1, type: "spring", damping: 25, stiffness: 90}}
                    className="md:justify-normal flex flex-col justify-center items-center "
                >
                    <img alt="Loading..." src={"Tiel.png"}/>
                    <span className="flex text-center  justify-center font-extrabold  pt-12 ">
                   <SocialCard logo={<BiLogoInstagram size={40}/>}
                               href={"https://instagram.com/cockatielco?igshid=cnI3dmY4ZXYxMXlv"} text={"INSTAGRAM"}
                               classes={" bg-white "}/>
                </span>
                </motion.div>

            </motion.div>
            <motion.div
                initial={{width:"50vw",height:"100vw"}}
            className="bg-gray-500 absolute
             border-r-8 w-24 h-96 border-r-white  "
                animate={{width:0,border:[1,0]}}
                transition={{delay:1, duration:1,type:"spring",  stiffness:35, damping:15,bounceDamping:10  }}

            />
            <motion.div
            initial={{width:"50vw",height:"100vh"}}
            className={"bg-gray-500 absolute border-l-8 right-0"}
            animate={{width:"0vw", border:[1, 0]}}
            transition={{delay:1,duration:1,type:"spring",  stiffness:35, damping:15,bounceDamping:10 , }}

            />
        </div>

    )
}


