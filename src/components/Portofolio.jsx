import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
import portofolio from "./data/portofolio.json"
portofolio.sort((a, b) => {
    if (a.id > b.id) {
        return -1;
    }
})
const portofolioPerRow = 3;
const Portofolio = () => {

    const [portofolios, setPortofolios] = useState(portofolio);
    const [filterPortofolios, setFilterPortofolios] = useState("Semua");
    const [next, setNext] = useState(portofolioPerRow);


    const handleMorePorto = () => {
        setNext(next + portofolioPerRow);
    };
    const onOptionChange = e => {
        if (e.target.value === "Semua") {
            setFilterPortofolios("Semua");
            setNext(3);

            setPortofolios(portofolio);

            return;
        }
        setNext(3);
        setFilterPortofolios(e.target.value)
        // const unfiltered = portofolio.filter(porto => porto.tags.includes(null));
        // setPortofolios(unfiltered);
        const filtered = portofolio.filter(porto => porto.tags.includes(e.target.value));

        setPortofolios(filtered);
    }



    return (
        <section className="pt-16 md:pt-24 pb-16" id="portofolio">
            <div className="container mx-auto">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-2 ">
                        <h1 className="text-2xl md:text-4xl font-bold  ">Portofolio</h1>
                    </div>
                </div>
                <div className="w-full  xl:w-10/12 xl:mx-auto px-4 mb-6  ">

                    <div className="flex justify-center border-primary-light dark:border-secondary-dark p-4  ">

                        <div className="join scale-90 md:scale-100">
                            <input className="join-item btn" type="radio" name="options" aria-label="Semua" checked={filterPortofolios == "Semua"} onChange={onOptionChange} value="Semua" />
                            <input className="join-item btn" type="radio" name="options" aria-label="Laravel" checked={filterPortofolios == "Laravel"} onChange={onOptionChange} value="Laravel" />
                            <input className="join-item btn" type="radio" name="options" aria-label="React" checked={filterPortofolios == "React"} onChange={onOptionChange} value="React" />
                        </div>
                    </div>

                </div>
                {portofolios && portofolios.length != 0 ?
                    <>

                        <div className="w-full px-4 flex flex-wrap justify-center xl:w-11/12 xl:mx-auto ">
                            {portofolios?.slice(0, next)?.map((portofolio) => (
                                <div className="mb-10 p-3.5 md:w-1/3 " key={portofolio.id}>
                                    <div className="card  bg-base-100 shadow-xl ">
                                        <figure> <a className="link link-hover" target="_blank" href={portofolio.link}><img src={portofolio.image} alt={portofolio.title} /></a></figure>
                                        <div className="card-body">
                                            <h2 className="card-title ">
                                                <a className="link link-hover" target="_blank" href={portofolio.link}>{portofolio.title}</a>


                                                <div className="badge badge-primary badge-outline text-sm">{portofolio.jenis}</div>
                                            </h2>
                                            <p>{portofolio.desc}</p>
                                            <div className="card-actions justify-end mt-1">
                                                {portofolio.tags?.map((tag) => (
                                                    <div className="badge badge-outline">{tag}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {next < portofolios?.length && (
                            <div className="text-center">
                                <button className="btn" onClick={handleMorePorto}>
                                    Lebih banyak
                                    <FaAngleDown size={16} />

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
export default Portofolio