import { useRef, useEffect, useState } from 'react';
import Glide from "@glidejs/glide"
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import materialui from "../images/materialui.svg";
const Skill = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const slider = new Glide(".glide-08", {
            type: "carousel",
            // focusAt: -1,
            animationDuration: 2500,
            autoplay: false,


            // autoplay: true,

            perView: 1,
            gap: 48,
            classes: {
                nav: {
                    active: "[&>*]:bg-primary",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])


    return (
        <section className="pt-16 md:pt-24 pb-24 bg-base-200" id='skill'>
            <div className="container mx-auto">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold">Skill</h1>
                    </div>
                </div>


                {/*<!-- Component: Testimonial carousel --> */}
                <div className="glide-08 relative w-full mt-8 overflow-hidden">
                    {/*    <!-- Slides --> */}
                    <div data-glide-el="track">
                        <ul className="whitespace-nowrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12 ">

                            <li>
                                <div className="h-full w-full">
                                    {/*                    <!-- Start Testimonial --> */}
                                    <div className="flex flex-wrap md:grid grid-cols-3 lg:grid-cols-5 md:gap-x-5 gap-x-2 justify-center gap-y-6">
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">

                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col '>
                                                    <FaHtml5 size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base lg:text-2xl font-bold'>HTML</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <FaCss3Alt size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base lg:text-2xl font-bold'>CSS</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <IoLogoJavascript size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base lg:text-2xl font-bold'>JavaScript</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <BiLogoTypescript size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base lg:text-2xl font-bold'>TypeScript</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <FaPhp size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base lg:text-2xl font-bold'>PHP</h3>
                                                </div>

                                            </figure>
                                        </div>
                                    </div>
                                    {/*                    <!-- End Testimonial --> */}
                                </div>
                            </li>
                            <li>
                                <div className="h-full w-full">
                                    {/*                    <!-- Start Testimonial --> */}
                                    <div className="flex flex-wrap md:grid grid-cols-3 lg:grid-cols-5 md:gap-x-5 gap-x-2 justify-center gap-y-6">
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <FaLaravel size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base md:text-2xl font-bold'>Laravel</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <SiExpress size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base md:text-2xl font-bold'>Express</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <FaReact size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base md:text-2xl font-bold'>React</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <GrMysql size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base md:text-2xl font-bold'>MySQL</h3>
                                                </div>

                                            </figure>

                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <BiLogoPostgresql size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base md:text-2xl font-bold'>PostgreSQL</h3>
                                                </div>

                                            </figure>
                                        </div>
                                    </div>
                                    {/*                    <!-- End Testimonial --> */}
                                </div>
                            </li>
                            <li>
                                <div className="h-full w-full">
                                    {/*                    <!-- Start Testimonial --> */}
                                    <div className="flex flex-wrap md:grid grid-cols-3 lg:grid-cols-5 md:gap-x-5 gap-x-2 justify-center gap-y-6">
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    <BiLogoTailwindCss size={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base md:text-2xl font-bold'>Tailwind CSS</h3>
                                                </div>

                                            </figure>


                                        </div>
                                        <div className="relative p-6 bg-white text-slate-900 shadow-2xl shadow-slate-200 h-full overflow-hidden rounded basis-[30%]">
                                            <figure className="relative z-10">
                                                <div className='flex items-center mx-auto flex-col'>
                                                    {/* <BiLogoTailwindCss size={width < 640 ? 60 : 65} /> */}
                                                    <img src={materialui} alt="materialui"  width={width < 640 ? 60 : 65} />
                                                    <h3 className='text-base md:text-2xl font-bold'>Material UI</h3>
                                                </div>

                                            </figure>


                                        </div>

                                    </div>
                                    {/*                    <!-- End Testimonial --> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*    <!-- Indicators --> */}
                    <div
                        className="-mt-6 flex w-full items-center justify-center gap-2"
                        data-glide-el="controls[nav]"
                    >
                        <button
                            className="group p-4"
                            data-glide-dir="=0"
                            aria-label="goto slide 1"

                        >
                            <span className="block h-2.5 w-2.5 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                        </button>
                        <button
                            className="group p-4"
                            data-glide-dir="=1"
                            aria-label="goto slide 1"
                        >
                            <span className="block h-2.5 w-2.5 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                        </button>
                        <button
                            className="group p-4"
                            data-glide-dir="=2"
                            aria-label="goto slide 1"
                        >
                            <span className="block h-2.5 w-2.5 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                        </button>


                    </div>
                </div>
                {/*<!-- End Testimonial carousel --> */}

            </div>

        </section>
    )
}
export default Skill