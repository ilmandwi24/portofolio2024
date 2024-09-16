import { useEffect, useState } from 'react';
import { MdOpenInNew } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import moment from 'moment/min/moment-with-locales';

import experience from './data/experience.json';
experience.sort((a, b) => {
    if (a.id > b.id) {
        return -1;
    }
})
const portofolioPerRow = 6;
export const Experience = () => {
    const [dataExperience, setDataExperience] = useState(experience);
    const [next, setNext] = useState(portofolioPerRow);


    moment.locale('id');
    const handleMoreExp = () => {
        setNext(next + portofolioPerRow);
    };


    return (
        <section className="pt-16 md:pt-28 pb-16 px-2.5 md:px-0" id='experience'>
            <div className="container mx-auto">
                <div class="w-full  px-4 mb-12 ">
                    <div class="max-w-xl mx-auto text-center ">
                        <h1 className="text-2xl md:text-4xl font-bold">Experience</h1>
                    </div>
                </div>

                {/* <div className="basis-1/2 ">
                        <div className="inline-flex  gap-x-0.5 items-end mb-0.5">
                            <h1 className="text-xl font-bold ">Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)</h1><a href="#" className="hover:btn-active btn-ghost"><MdOpenInNew size={23} /></a>
                        </div>
                        <div >

                            <p className="inline-flex items-center gap-x-1">udemy - Programmer Zaman Now <div className="badge badge-accent text-sm font-semibold">14 Des 2024</div>

                            </p>
                        </div>
                    </div>
                    <div className="basis-1/2  ">
                        <div className="inline-flex  gap-x-0.5 items-end mb-0.5">

                            <h1 className="text-xl font-bold ">Laravel: Pemula sampai Mahir</h1><a href="#" className="hover:btn-active btn-ghost"><MdOpenInNew size={23} /></a>


                        </div>
                        <div >

                            <p className="inline-flex items-center gap-x-1">udemy - Programmer Zaman Now <div className="badge badge-accent text-sm font-semibold">14 Des 2024</div>

                            </p>
                        </div>
                    </div> */}
                {dataExperience && dataExperience.length != 0 ?
                    <>
                        <div class="w-full  xl:w-11/12 xl:mx-auto flex-wrap mb-8 flex md:flex-row flex-col px-4 gap-y-8">

                            {dataExperience?.slice(0, next)?.map((experience) => (

                                <div className="basis-full md:basis-1/2 " key={experience.id}>
                                    <div className="inline-flex  gap-x-0.5 items-center md:items-end mb-0.5">
                                        <h1 className="text-base md:text-xl font-bold ">{experience.title}</h1><a href={experience.link} className="hover:btn-active btn-ghost" target='_blank'><MdOpenInNew size={23} /></a>
                                    </div>
                                    <div >

                                        <p className="inline-flex items-center gap-x-1 text-sm md:text-base">{experience.penyelenggara}<div className="badge badge-accent text-xs md:text-sm font-semibold">{moment(experience.tanggal).format('ll')}</div>

                                        </p>
                                    </div>
                                </div>

                            ))}



                        </div>
                        {next < dataExperience?.length && (
                            <div className="text-center ">
                                <button className="btn" onClick={handleMoreExp}>
                                    Lebih banyak
                                    <FaAngleDown size={16} />
                                    {/* <span className="loading loading-spinner loading-xs"></span> */}
                                </button>

                            </div>
                        )}
                    </>


                    : <div className="text-center">Data Kosong</div>
                }


            </div>
        </section>
    )
}