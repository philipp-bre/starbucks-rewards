import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import logo from '../assets/Starbucks_logo.svg.png'


type Item = {
        title: string;
        id: number;
    }



    const Navbar: React.FC = () => {
        const elementRef = useRef<HTMLDivElement | null>(null);
        const overlayRef = useRef<HTMLDivElement>(null);
        const [isFixed, setIsFixed] = useState(false);


        useEffect(() => {
            const handleScroll = () => {
                if (elementRef.current) {
                    const elementOffsetTop = elementRef.current.offsetTop;
                    const currentScrollY = window.scrollY; 
                    if (currentScrollY > elementOffsetTop) {
                        setIsFixed(true);
                    } else {
                        setIsFixed(false);
                    }
                } 
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        useEffect(() => {
            if(isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }

            return () => {
                document.body.style.overflow = 'auto';
            };
        });
    


    const [isActive, setIsActive] = useState<number | null>(1);

    function activeUl(index: number){
        setIsActive(index);
    }

    const items: Item[] = [
        { id: 1, title: "Menu"},
        { id: 2, title: "Rewards"},
        { id: 3, title: "Gift Cards"},
    ];

    const spanBar = () => {
        return <motion.span
        layoutId="tab-underline"
        className="absolute top-16 left-0 right-0
         bg-[#008248] h-2"
         transition={{type: "spring" ,stiffness: 400, damping: 40}}
         initial={false}
         ></motion.span>
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        if(e.target === overlayRef.current) {
            setIsOpen(!isOpen);
        }
    };



    return(
        <nav className="bg-white relative z-500">
            <div className={`p-8  max-7xl flex justify-between items-center space-x-5
             overflow-x-hidden overflow-hidden  whitespace-nowrap`}>
                <div className="flex justify-center items-center space-x-10">
                <a className="z-100" 
                href="https://www.starbucks.com/">
                    <img
                    src={logo} width={50} alt="Logo" />
                </a>
                <ul className="hidden md:flex space-x-5">
                    {items.map((item, id) => (
                        <li 
                            key={id}
                            onClick={() => activeUl(id)}
                            className={`relative cursor-pointer font-bold 
                                text-[#1e3932] hover:text-[#008248]
                                `}
                         >
                            {item.title}
                            {isActive === id && spanBar()}
                        </li>
                    ))}
                </ul>
                </div>
                <div 
                className="md:hidden">
                    <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded="false"
                    className="relative items-center justify-center
                     p-2 cursor-pointer z-500"
                    >
                        {isOpen ? (
                            <div className="w-6 h-6 flex justify-center items-center flex-col z-100">
                                <span className="absolute w-6 h-0.5 right-5 rotate-135 bg-[#1e3932]"></span>
                                <span className="absolute w-6 h-0.5 right-5 rotate-45 bg-[#1e3932]"></span>
                            </div>
                        ) : (
                            <div className="w-6 h-6 flex flex-col justify-center z-200 items-center">
                                <span className="absolute bg-[#1e3932] left-2 top-2 w-6 h-1"></span>
                                <span className="absolute bg-[#1e3932] left-2 top-4 w-6 h-1"></span>
                                <span className="absolute bg-[#1e3932] left-2 top-6 w-6 h-1"></span>
                            </div>
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div
                    ref={overlayRef}
                    className={`fixed inset-0 bg-black opacity-50 md:hidden`}
                    onClick={handleOverlayClick}
                    >
                    </div>
                )}
                
                <div
                className={`md:hidden bg-black h-full w-80 fixed top-0 -right-85
                    transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "-translate-x-full overflow-y-hidden" : "translate-x-0"}
                } overflow-hidden bg-white`}
                >
                    <div className="pt-4 pb-3 flex flex-col mt-25 px-8 space-y-1">
                        <hr className="text-[#d4e9e2] border"></hr>
                        {items.map((item, id) => (
                            <a
                            key={id}
                            href="#"
                            className="font-semibold cursor-pointer
                             text-gray-700 hover:text-blue-600
                             block text-lg px-3 py-2 rounded-md"
                            onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        <hr className="text-[#d4e9e2] border"></hr>
                    </div>
                    <div className="px-10 space-x-5 text-md">
                        <button 
                        className="border text-[#1e3932] 
                        hover:bg-[#d4e9e2] transition duration-200
                        font-semibold cursor-pointer
                         rounded-2xl p-1 px-3 border-black">
                            Sign in
                        </button>
                        <button
                        className="border rounded-2xl p-1 px-3
                        hover:bg-[#1e3932] transition duration-200
                        cursor-pointer 
                        text-white bg-black border-black"
                        >
                            Join now
                        </button>
                            <h3 className="text-[#1e3932] cursor-pointer 
                            ml-1 mt-4">Find a store</h3>
                    </div>
                </div>

                <div className="hidden md:flex items-center bg-white justify-center gap-15">
                    <h2 className="text-[#1e3932] hover:text-[#008248]
                    transition duration-150 font-semibold cursor-pointer"
                    >Find a store
                    </h2>
                    <div className="space-x-5">
                        <button className="px-2 p-1 cursor-pointer border rounded-full
                         bg-white text-[#1e3932] font-semibold hover:bg-[#d4e9e2]">Sign in</button>
                        <button className="px-2 p-1 cursor-pointer border rounded-full
                         bg-black text-white hover:bg-[#1e3932] 
                         font-semibold transition duration-150">Join now</button>
                     </div>
                </div>
            </div>
            <div 
            ref={elementRef}
            className={` z-100 top-0 right-0 flex justify-start items-center
                w-full h-[6vh] bg-[#1e3932] ${ isFixed ? "fixed top-0  w-full z-50" : ""}`}>
                <div className="ml-10 font-bold text-white">STARBUCKS® REWARDS</div>
            </div>
        </nav>)
    
    
}

export default Navbar


