
export default function Guidance(){

    const linkStyle = "text-[#008248] underline";

    return(
        <section className="p-5 lg:p-0 flex flex-col justify-center items-center overflow-x-hidden overflow-hidden">
            <div className="p-10 text-center space-y-3">
                <h1 className="text-[#1e3932] font-bold text-3xl">Getting started is easy</h1>
                <h2 className="text-[#1e3932] font-semibold">Earn Stars and get rewarded in a few easy steps</h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-25">
                <div className="flex justify-center items-start lg:items-center
                 flex-row lg:flex-col gap-3">
                    <h6 className="border-2 font-bold text-xl 
                        rounded-full p-2 px-5 text-[#008248]">
                        1
                    </h6>
                    <div className="flex justify-center items-start lg:items-center flex-col">
                        <h1 className="font-semibold text-lg mb-5 lg:mb-0">Create an account</h1>
                        <p className="w-full lg:w-80 text-left lg:text-center">To get started, <a href="#" className={linkStyle}>join now</a>. 
                        You can also <a href="#" className={linkStyle}>join in the app</a> to get access 
                        to the full range of Starbucks® Rewards benefits.</p>
                    </div>
                </div>
                <div className="flex justify-center items-start lg:items-center
                 flex-row lg:flex-col gap-3">
                    <h6 className="border-2 font-bold text-xl 
                        rounded-full p-2 px-5 text-[#008248]">
                        2
                    </h6>
                    <div className="flex flex-col justify-center items-start lg:items-center">
                        <h1 className="font-semibold text-lg mb-5 lg:mb-0">Order and pay how you'd like</h1>
                        <p className="w-full lg:w-80 text-start lg:text-center">Use cash, credit/debit card or save 
                            some time and pay right through the app.
                             You'll collect Stars all ways. 
                             <a href="#" className={linkStyle}>Learn how</a></p>
                    </div>
                </div>
                <div className="flex justify-center items-start lg:items-center flex-row lg:flex-col gap-3">
                    <h6 className="border-2 font-bold text-xl 
                        rounded-full p-2 px-5 text-[#008248]">
                        3
                    </h6>
                    <div className="flex flex-col justify-start items-start lg:items-center">
                        <h1 className="font-semibold text-lg mb-5 lg:mb-0">Earn Stars, get Rewards</h1>
                        <p className="w-full lg:w-80 text-start lg:text-center">As you earn Stars, you can 
                            redeem them for Rewards—like
                             free food, drinks, and more.
                             Start redeeming with as little as 25 Stars!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}