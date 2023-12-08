import {motion} from "framer-motion";



export function BackgroundAnim({Classes}){
    return(
        <div className={"absolute"}>
                <motion.div
                    initial={{width: "50vw", height: "100vw"}}
                    className="bg-gray-500 absolute
             border-r-8 w-24 h-96 border-r-white  "
                    animate={{width: 0, border: [1, 0]}}
                    transition={{delay: 1, duration: 1, type: "spring", stiffness: 35, damping: 15, bounceDamping: 10}}

                />
                <motion.div
                    initial={{width: "50vw", height: "100vh"}}
                    className={"bg-gray-500 absolute border-l-8 right-0"}
                    animate={{width: "0vw", border: [1, 0]}}
                    transition={{delay: 1, duration: 1, type: "spring", stiffness: 35, damping: 15, bounceDamping: 10,}}

                />
        </div>


    )
}