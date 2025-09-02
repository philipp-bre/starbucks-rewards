import img1 from './assets/1-img.jpg'
import img2 from './assets/2-img.jpg'
import img3 from './assets/3-img.jpg'
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type sectionProps = {
    id: number,
    img: string,
    title: string,
    paragraph: string,
    href: string, 
}

function Extras(){

    const animation = useAnimation();

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if(inView){
            animation.start("visible");
        } 
    }, [animation, inView]);

    const bodyAnimation = {
        hidden: { opacity: 0, y: '10em'},
        visible: { opacity: 1, y: 0,
            transition: {
                duration: 1,
                delay: 0.1
            }
        }
    }



    const sections: sectionProps[] = [
        {id: 1, img: img1, title: "Fun freebies",  
        paragraph: "Not only can you earn free food, drinks and more, look forward to a birthday treat on us.", 
        href: "Learn more"},
        {id: 2, img: img2, title: "Order & pay ahead", 
        paragraph: "Master the art of ordering ahead with saved favorites and payment methods.", 
        href: "Learn more"},
        {id: 3, img: img3, title: "Get to free faster", 
        paragraph: "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.", 
        href: "Learn more"},
    ]
    

    return(
        <motion.section 
        ref={ref}
        animate={animation}
        variants={bodyAnimation}
        aria-hidden="true"
        initial="hidden"
        className="p-40 overflow-x-hidden overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl lg:text-3xl font-semibold whitespace-nowrap">Endless Extras</h1>
                <p className="w-65 sm:w-70 md:w-100 text-[#1e3932] text-center font-semibold mt-5 mb-10">Joining Starbucks® Rewards means unlocking access to 
                    benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.</p>
            </div>
            <div className="flex-row flex-wrap gap-5 text-start lg:text-center flex justify-center items-center">
                {sections.map((section, id) => (
                    <div className="flex-row gap-5 lg:gap-0 lg:flex-col flex justify-center items-center">
                        <img
                        
                        key={id}
                        src={section.img}
                        className="size-[25%]"
                        />
                        <div className="space-y-4">
                            <h2 className="font-semibold text-xl
                            ">{section.title}</h2>
                            <h3 className="w-50 md:w-80 lg:w-120 text-[#1e3932] font-semibold
                            ">{section.paragraph}</h3>
                            <a href="" className="cursor-pointer underline 
                            underline-offset-3 font-semibold text-[#008248]
                            ">{section.href}</a>
                        </div>
                    </div>
                )
                )}
            </div>
        </motion.section>
    )
}

export default Extras