"use client"
import {motion} from "framer-motion";
import Link from "next/link";

export default function SocialCard({logo,href, text,classes}
){
    return(
            <Link href={href} target={"_blank"}>
        <motion.div
            initial={{width:0, height:0}}
            animate={{width:"200px",height:"40px",display:["none", "flex"]}}
            transition={{delay:1.6}}
            className={"w-44 flex flex-row hover:bg-fuchsia-300 h-10 text-center items-center justify-center  rounded-r-full rounded-l-full"+classes}>
            {logo}
            {text}

        </motion.div>
            </Link>
    )
}