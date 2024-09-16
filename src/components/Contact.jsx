import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { useState } from "react";

export const Contact = () => {
    const [width, setWidth] = useState(window.innerWidth);
    return (
        <section className="pt-16 md:pt-24 pb-16 bg-base-100" id="contact">
            <div className="container mx-auto px-5 md:px-0">


                <div class="grid grid-cols-4 md:grid-cols-3 divide-x-0 justify-items-center w-full md:w-2/5 mx-auto  items-center mb-6">
                    <div className="bg-accent w-full md:w-4/5 h-1.5 md:h-2.5 flex justify-items-end col-span-1">
                    </div>


                    <div className="col-span-2 md:col-span-1"><h1 className="text-2xl md:text-3xl font-bold">Contact Me</h1></div>
                    <div className="bg-accent w-full md:w-4/5 h-1.5 md:h-2.5 flex justify-items-end col-span-1">
                    </div>
                </div>
                <ul class="flex justify-center mt-5 space-x-4">
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/ilman-dwi/" class="opacity-70 hover:opacity-90">
                            <FaLinkedin size={width < 640 ? 40 : 45} />

                        </a>
                    </li>
               

                </ul>
            </div>
        </section >
    )
}