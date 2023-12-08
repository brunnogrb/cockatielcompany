"use client"
import {motion} from "framer-motion";
import SocialCard from "@/app/components/socialCard";
import {BiLogoInstagram} from "react-icons/bi";
import {BackgroundAnim} from "@/app/components/backgroundAnim";


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
                initial={{width:"50vw"}}
            className="bg-blue-400 border-2 border-r-blue-400  "
            >

            </motion.div>
        </div>

    )
}


