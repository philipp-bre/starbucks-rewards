import spotify from './/assets/spotify.png'
import facebook from'.//assets/facebook.png'
import pinterest from './/assets/pinterest.png'
import instagram from './/assets/instagram.png'
import youtube from './/assets/youtube.png'
import twitter from './/assets/twitter-alt-circle.png'
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';


    type FooterSection = {
        title: string;
        links: string[];
        isExpandable?: boolean;
    }

    const footerData:FooterSection[] = [
        {
            title: "About Us",
            links: [
            "Our Company",
            "Our Coffee",
            "About Starbucks",
            "Starbucks Archive",
            "Investor Relations",
            "Customer Service",
            "Contact Us"
            ], 
            isExpandable: true,

        },
        {
            title: "Careers",
            links: [
            "Culture and Values",
            "Belonging at StarBucks",
            "College Achievement Plan",
            "Alumni Community",
            "U.S Careers",
            "International Careers"
        ],
            isExpandable: true,
            
        },
        {
            title: "Social Impact",
            links: [
            "Communities",
            "Starbucks Foundation",
            "Sustainability",
            "Environmental and Social Impact Reporting"
            ],
            isExpandable: true,
        },
        {
            title: "For Business Partners",
            links: [
            "Landlord Support Center",
            "Suppliers",
            "Corporate Gift Card Sales",
            "Office and Foodservice Coffee"
            ],
            isExpandable: true,
        },
        {
            title: "Order and Pick up",
            links: [
            "Order on the App",
            "Order on the Web",
            "Delivery",
            "Order and Pick Up Options",
            "Explore and Find Coffee for Home"
            ],
            isExpandable: true,
        }
    ];

    const Footer: React.FC = () => {
        const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
    

    const toggleSection = (sectionTitle: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }));
    };

    return(
        <footer className="p-10 flex flex-col justify-center overflow-hidden overflow-x-hidden">
            <div className="lg:px-44 mb-10">
                <div className="space-y-4">
                    {footerData.map((section) => (
            <div key={section.title} className="border-b border-gray-100 last:border-b-0">
              <div
                className={`flex items-center justify-between py-4 cursor-pointer group ${
                  section.isExpandable ? 'hover:bg-gray-50' : ''
                } transition-colors duration-200 rounded-lg px-2`}
                onClick={() => section.isExpandable && toggleSection(section.title)}
              >
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                  {section.title}
                </h3>
                {section.isExpandable && (
                  <div className="text-gray-600 group-hover:text-green-700 transition-all duration-200">
                    {expandedSections[section.title] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                )}
              </div>
              
              {section.isExpandable && (
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    expandedSections[section.title] 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 px-2">
                    {section.links.length > 0 ? (
                      <ul className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-green-700 hover:underline transition-colors duration-200 text-sm block py-1"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm italic">
                        Content for {section.title} coming soon...
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>         

                <hr className="text-gray-300"></hr>
            <div className="p-5 lg:p-10 lg:px-44 max-w-7xl 
            overflow-x-hidden grid place-items-start whitespace-nowrap ">
                <ul className="flex items-start gap-5 mt-5 whitespace-nowrap">
                    <li className="w-7 lg:w-13 h-7 lg:h-13 flex justify-center items-center
                     hover:bg-gray-500 transition duration-200 rounded-3xl">
                        <a href="#" className="cursor-pointer">
                        <img src={spotify} className="w-10 h-auto"/></a></li>
                    <li className="w-7 lg:w-13 h-7 lg:h-13 flex justify-center items-center
                     hover:bg-gray-500 transition duration-200 rounded-3xl">
                        <a href="#" className="cursor-pointer">
                        <img src={facebook} className="w-10 h-auto"/></a></li>
                    <li className="w-7 lg:w-13 h-7 lg:h-13 flex justify-center items-center
                     hover:bg-gray-500 transition duration-200 rounded-3xl">
                        <a href="#" className="cursor-pointer">
                        <img src={pinterest} className="w-10 h-auto"/></a></li>
                    <li className="w-7 lg:w-13 h-7 lg:h-13 flex justify-center items-center
                     hover:bg-gray-500 transition duration-200 rounded-3xl">
                        <a href="#" className="cursor-pointer">
                        <img src={instagram} className="w-10 h-auto"/></a></li>
                    <li className="w-7 lg:w-13 h-7 lg:h-13 flex justify-center items-center
                     hover:bg-gray-500 transition duration-200 rounded-xl">
                        <a href="#" className="cursor-pointer">
                        <img src={youtube} className="w-10 h-auto"/></a></li>
                    <li className="w-7 lg:w-13 h-7 lg:h-13 flex justify-center items-center
                     hover:bg-gray-500 transition duration-200 rounded-3xl">
                        <a href="#" className="cursor-pointer">
                        <img src={twitter} className="w-10 h-auto"/></a></li>
                </ul>
                <div className="mt-10">
                    <ul className="space-y-2">
                        <li className="hover:underline underline-offset-2 cursor-pointer">
                            <a href="#">Privacy Notice</a></li>
                        <li className="hover:underline underline-offset-2 cursor-pointer">
                            <a href="#">Consumer Health Privacy Notice</a></li>
                        <li className="hover:underline underline-offset-2 cursor-pointer">
                            <a href="#">Terms of Use</a></li>
                        <li className="hover:underline underline-offset-2 cursor-pointer">
                            <a href="#">Do Not Share My Personal Information</a></li>
                        <li className="hover:underline underline-offset-2 cursor-pointer">
                            <a href="#">CA Supply Chain Act</a></li>
                        <li className="hover:underline underline-offset-2 cursor-pointer">
                            <a href="#">Accessibility</a></li>
                        <li className="hover:underline underline-offset-2 cursor-pointer">
                            <a href="#">Cookie Preferences</a></li>
                    </ul>
                    <h3 className="mt-5 opacity-50 text-sm lg:text-base font-[mono]">© 2025 Starbucks Coffee Company. All rights reserved.</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer