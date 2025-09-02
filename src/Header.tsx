import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import headerImg from '../src/assets/rewards-hero.png'


export default function Header(){
    
    
  const animation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView){
        animation.start("visible");
    }
  }, [animation, inView]);

  const bodyAnimation = {
    hidden:{opacity: 0, x: '10em'},
    visible:{opacity: 1, x: 0,
        transition: {
            duration: 1.5,
            staggerChildren: 0.2,
            delay: 0.1
        }
    }
}

    return(
        <motion.section className="bg-[#f3f1e7] overflow-hidden overflow-x-hidden">
            <motion.div className="flex flex-col lg:flex-row justify-center items-center lg:px-100"
            variants={bodyAnimation}
            animate={animation}
            ref={ref}
            aria-hidden="true"
            initial="hidden">
                <motion.div className="space-y-5 text-center 
                flex flex-col justify-center items-center lg:text-start mr-5">
                    <motion.h1 className="w-100 sm:w-110  text-3xl sm:text-4xl lg:text-6xl mt-5 lg:mt-0 font-semibold text-[#1e3932]"
                        >It's a great day for free coffee</motion.h1>
                    <motion.h2 className="w-80 md:w-full font-semibold text-[#008248]">
                        Sign up and start enjoying the perks of Starbucks® Rewards.
                    </motion.h2>

                    <motion.button 
                    className="p-1 px-3 text-white bg-[#008248] 
                    cursor-pointer rounded-full hover:bg-[#1e3932]
                    transition duration-200 font-semibold
                        ">Join now
                    </motion.button>

                    <motion.p className="text-[#1e3932] font-semibold mb-5 lg:mb-0"
                    >It's even better &nbsp;
                        <motion.a href="#" 
                        className="underline cursor-pointer"
                        > with the app
                        </motion.a>
                    </motion.p>
                </motion.div>
                <motion.div className="flex justify-center items-center ">
                    <motion.img src={headerImg} className="lg:max-w-200 lg:w-150" alt="coffeeImg"/>
                </motion.div>
            </motion.div>
        </motion.section>
        
    )
}