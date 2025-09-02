import firstImg from './assets/1A.png'
import secondImg from './assets/1B.png'
import thirdImg from './assets/2A.png'
import fourthImg from './assets/2B.png'
import { useState ,useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CashCard(){

    const animation = useAnimation();

    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if(inView){
            animation.start("visible");
        }
    }, [animation, inView]);

    const child1Animation = {
        hidden: { opacity: 0, x: '10em'},
        visible: { opacity: 1, x: 0,
            transition: { 
                duration: 1,
                delay: 0.1
            }
        }
    }

    const child2Animation = {
        hidden: { opacity: 0, x: '-10em'},
        visible: { opacity: 1, x: 0,
            transition: { 
                duration: 1,
                delay: 0.1
            }
        }
    }



    const useScreenWidth = () => {

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

        return screenWidth;
    };

    const screenWidth = useScreenWidth();


    
    return(
        <section className="grid place-content-center place-items-center
         overflow-hidden overflow-x-hidden mx-auto p-5 md:p-10 lg:p-15 bg-[#d4e9e2]">
            <div className="gap-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl lg:text-3xl font-semibold">Cash or card, you earn Stars</h1>
                <p className="text-[#008248] w-65 md:w-80 text-center lg:w-full font-semibold">No matter how you pay, you can earn Stars with your morning coffee.
                     Those Stars add up to (really delicious) Rewards.</p>
            </div>
            <motion.div
            ref={ref}
            animate={animation}
            variants={child1Animation}
            initial="hidden"
            aria-hidden="true"
            className="w-400 max-w-450 flex flex-col
             lg:items-start justify-center items-center
             lg:flex-row flex-wrap gap-5 py-2 md:p-15 lg:p-20">
                <div className="flex-1 mr-30 mt-5">
                    <h1 className="text-2xl font-semibold">1<strong
                    className="text-sm text-[#008248]">★</strong> per dollar</h1>
                    <h3 className="font-semibold">Pay as you go</h3>
                </div>

            {screenWidth <= 1024 ? <div className="flex items-start gap-5">
                <img 
                        alt="phoneScan-img"
                        className="size-30 lg:w-35 h-auto"
                        src={firstImg}/>
                    <div className="flex flex-col flex-2 ">
                        <h1 className="font-semibold text-xl w-30 md:w-full mb-2 text-[#1e3932]"
                        >Scan and pay separately</h1>
                        <h3 className="font-semibold text-sm sm:text-base w-40 sm:w-50 lg:w-full mt-4 lg:mt-0">Use cash or credit/debit card at the register.</h3>
                    </div>
            </div> : "" }

                    <img 
                        alt="phoneScan-img"
                        className="hidden lg:flex size-30 lg:w-35 h-auto"
                        src={firstImg}/>
                    <div className="hidden lg:flex mr-32 flex-col flex-1 ">
                        <h1 className="font-semibold text-xl mb-2 text-[#1e3932]"
                        >Scan and pay separately</h1>
                        <h3 className="font-semibold w-50 lg:w-full mt-4 lg:mt-0">Use cash or credit/debit card at the register.</h3>
                    </div>

    
            {screenWidth <= 1024 ? <div className="flex gap-5">
                <img 
                    alt="phoneCard-img"
                    className="w-30 lg:w-35 h-auto"
                    src={secondImg}/>
                <div className="flex flex-2 flex-col">
                    <h1 className="font-semibold w-35 text-xl mb-2 text-[#1e3932]"
                    >Save payment in the app</h1>
                    <h3 className="font-semibold text-sm sm:text-base w-35 sm:w-50 lg:w-[50%] mt-5 lg:mt-0">
                        Check-out faster by saving a credit/debit 
                        card or PayPal to your account.
                        You'll be able to order ahead or scan and pay at the 
                        register in one step.</h3>
                </div>
            </div> : ""}

            <img 
                    alt="phoneCard-img"
                    className="hidden lg:block size-30 lg:w-35 h-auto"
                    src={secondImg}/>
                <div className="hidden lg:flex flex-2 flex-col">
                    <h1 className="font-semibold text-xl mb-2 text-[#1e3932]"
                    >Save payment in the app</h1>
                    <h3 className="font-semibold w-50 lg:w-[50%] mt-5 lg:mt-0">
                        Check-out faster by saving a credit/debit 
                        card or PayPal to your account.
                        You'll be able to order ahead or scan and pay at the 
                        register in one step.</h3>
                </div>
                   
                
            </motion.div>
            <hr className="w-[91%] opacity-15 mt-5 mb-5 mx-auto"></hr>
            <motion.div
            ref={ref}
            animate={animation}
            variants={child2Animation}
            initial="hidden"
            aria-hidden="true"
            className="w-400 max-w-450  flex flex-col justify-center 
            items-center lg:items-start lg:flex-row 
            flex-wrap gap-5 py-2 md:p-15 lg:p-20">
                <div className="flex-1 mr-32">
                    <h1 className="text-2xl font-semibold">2<strong 
                    className="text-sm text-[#008248]">★</strong> per dollar</h1>
                    <h3 className="font-semibold">Add funds in the app</h3>
                </div>
                
                {screenWidth <= 1024 ? <div className="flex items-start gap-5">
                    <img 
                        alt="card-img"
                        className="size-30 lg:w-35 h-auto"
                        src={thirdImg}/>
                    <div className="flex flex-2 flex-col">
                        <h1 className="font-semibold text-xl mb-2 text-[#1e3932]"
                        >Preload</h1>
                        <h3 className="font-semibold w-40 text-sm sm:text-base sm:w-50 lg:w-[60%] mt-2">To save time and earn Stars twice as fast,
                            add money to your digital Starbucks Card using any payment option.
                            Scan and pay in one step or order ahead in the app.</h3>
                    </div>
                </div> : ""}

                <img 
                        alt="card-img"
                        className="hidden lg:block size-30 lg:w-35 h-auto"
                        src={thirdImg}/>
                    <div className="hidden lg:flex flex-2 flex-col">
                        <h1 className="font-semibold text-xl mb-2 text-[#1e3932]"
                        >Preload</h1>
                        <h3 className="font-semibold w-50 lg:w-[60%] mt-2">To save time and earn Stars twice as fast,
                            add money to your digital Starbucks Card using any payment option.
                            Scan and pay in one step or order ahead in the app.</h3>
                    </div>
                
                {screenWidth <= 1024 ? <div className="flex items-start gap-5">
                    <img 
                        alt="giftCard-img"
                        className="size-30 lg:w-35 h-auto"
                        src={fourthImg}/>
                    <div className="flex flex-2 flex-col">
                        <h1 className="font-semibold w-40 text-xl mb-2 text-[#1e3932]"
                        >Register your gift card</h1>
                        <h3 className="font-semibold text-sm sm:text-base w-40 sm:w-50 lg:w-[50%] mt-2">
                            Then use it to pay through the app. You can even consolidate balances
                            from multiple cards in one place.</h3>
                    </div>
                </div> : ""}

                <img 
                        alt="giftCard-img"
                        className="hidden lg:block size-30 lg:w-35 h-auto"
                        src={fourthImg}/>
                    <div className="hidden lg:flex flex-2 flex-col">
                        <h1 className="font-semibold text-xl mb-2 text-[#1e3932]"
                        >Register your gift card</h1>
                        <h3 className="font-semibold w-50 lg:w-[50%] mt-2">
                            Then use it to pay through the app. You can even consolidate balances
                            from multiple cards in one place.</h3>
                    </div>
                
            </motion.div>
        </section>
    )
}

export default CashCard