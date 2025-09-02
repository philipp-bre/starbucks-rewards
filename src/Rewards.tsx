import firstImg from './assets/delta-skymiles.png'
import secondImg from './assets/bank-of-america.png'
import thirdImg from './assets/marriott-logo.png'

function Rewards(){


    return(
        <section>
            <div className="mx-auto max-w-465 p-5 lg:p-20 overflow-x-hidden overflow-hidden 
            flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold text-center mb-5">Keep the Rewards Coming</h1>
                    <h2 className="text-center lg:text-start">The Rewards don't stop at your morning coffee. 
                        Join Starbucks® Rewards and unlock perks from our partners,
                         all while earning more Stars.</h2>
                </div>
                <ul className="flex gap-10 lg:gap-0 justify-center items-center flex-col lg:flex-row mt-15">
                    <li>
                        <div className="flex flex-row lg:flex-col justify-center text-center items-center gap-5">
                            <img className="w-25 lg:w-50 h-auto" 
                            alt="delta-img"
                            src={firstImg}/>
                            <p className="text-sm font-semibold w-[60%]">
                                <a href="" className="underline underline-offset-2 text-[#008248]"
                                >Link your Delta SkyMiles®</a>&nbsp;
                                and Starbucks® Rewards accounts to earn miles on
                                 Starbucks Card reloads of $25 or more, plus Double Stars on travel days.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row lg:flex-col text-center justify-center items-center gap-5">
                            <img className="w-25 lg:w-50 h-auto"
                            alt="bank-img"
                            src={secondImg}/>
                            <p className="text-sm font-semibold w-[60%]">
                                <a href="" className="underline underline-offset-2 text-[#008248]"
                                >Link your Bank of America</a>&nbsp;
                                eligible card and Starbucks® Rewards account to earn 2% 
                                Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row lg:flex-col text-center justify-center items-center gap-5">
                            <img className="w-25 lg:w-50 h-auto"
                            alt="marriott-img"
                            src={thirdImg}/>
                            <p className="text-sm font-semibold w-[60%]">
                                <a href="" 
                                className="underline underline-offset-2 text-[#008248]"
                                >Link your Marriott Bonvoy®</a>&nbsp;
                                and Starbucks® Rewards accounts to earn Double Stars
                                 during eligible stays, points during any Marriott Bonvoy Week and more.
                            </p>
                        </div>
                    </li>
                </ul>
                <button className='flex justify-center items-center
                 bg-[#008248] cursor-pointer hover:bg-[#1e3932]
                  transition-all duration-200 mt-15 mb-15 text-white
                   font-semibold px-3 p-1 border rounded-full'
                 >Join Starbucks® Rewards</button>
            </div>
        </section>
    )
}

export default Rewards