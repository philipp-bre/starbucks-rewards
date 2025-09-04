import firstImg from './assets/first-img.png'
import secondImg from './assets/sec-img.png'
import thirdImg from './assets/third-img.png'
import fourthImg from './assets/4th-img.png'
import fifthImg from './assets/5th-img.png'
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from 'react';



type ButtonProps = {
        id: number,
        title: string,
        star: string,
    }

type SectionProps = {
        id: number,
        img: string,
        title: string,
        paragraph: string,
}





function StarSection() {

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
    hidden: {opacity: 0, y: '6em'},
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 1,
            delay: 0.1
        }
    }
  }

    const [isActive, setIsActive] = useState<number | null>(1);


    function activeBtn(buttonId: number){
        setIsActive(buttonId);
    }

    const buttons: ButtonProps[] = [
        {id: 1, title: "25", star: "★"},
        {id: 2, title: "100", star: "★"},
        {id: 3, title: "200", star: "★"},
        {id: 4, title: "300", star: "★"},
        {id: 5, title: "400", star: "★"},
    ]

    const sections: SectionProps[] = [
        {id: 1, img: firstImg, title: "Customize your drink",
         paragraph: "Make your drink just right with an extra espresso shot or a dash of your favorite syrup."},
        {id: 2, img: secondImg, title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
         paragraph: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."},
        {id: 3, img: thirdImg, title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
         paragraph: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."},
        {id: 4, img: fourthImg, title: "Sandwich, protein box or at-home coffee",
         paragraph: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®."},
        {id: 5, img: fifthImg, title: "Select Starbucks® merchandise",
         paragraph: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."},
    ]
    

    const underline = () => {
        return <motion.span
        layoutId="tab-underline"
        className="absolute top-18 inset-0 w-auto bg-[#008248] h-2"
        transition={{ type: "spring",
                    stiffness: 400, damping: 40
         }}></motion.span>
    }

    const activeSection = sections.find(section => section.id === isActive);

    return(
        <motion.section
                ref={ref}
                variants={bodyAnimation}
                animate={animation}
                aria-hidden="true"
                initial="hidden"
        className="flex flex-col justify-center items-center w-full mt-60">
                <motion.div
                className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-[#1e3932] text-3xl text-center font-bold">Get your favorites for free</h1>
                    <div className="flex justify-center items-center 
                    space-x-5 sm:space-x-12 md:space-x-15 lg:space-x-20 p-10  
                    text-xl md:text-2xl text-[#1e3932] font-semibold">
                        {buttons.map((button, id) => (
                            <button
                            key={id}
                            onClick={() => activeBtn(button.id)}
                            className={`relative cursor-pointer size-10
                            `}
                            >
                            {button.title + button.star}
                            {isActive === button.id && underline()}
                            </button>
                        ))} 
                    </div>
                    
                </motion.div>
                <motion.div className="bg-[#d4e9e2] w-full text-center">
                    {activeSection && (
                    <div className="flex justify-center flex-col lg:flex-row items-center">
                        <div className="flex-1 flex justify-center items-center">
                            <img 
                            src={activeSection.img}
                            alt="img"
                            className="w-100 h-auto ml-auto"
                            />
                        </div>
                        <div className="flex-1 text-center flex 
                        flex-col justify-center items-center 
                        lg:items-start lg:text-left space-y-5">
                            <h2 className="text-xl lg:text-2xl  lg:w-[40%] font-semibold">
                                {activeSection.title}
                            </h2>
                            <p className="text-[#1e3932] text-sm mb-5 lg:mb-0 
                            lg:text-base w-60 sm:w-80 lg:w-[40%]  font-semibold">
                                {activeSection.paragraph}
                            </p>
                        </div>
                    </div>
                    )}
                </motion.div>
        </motion.section>
    )
}

export default StarSection