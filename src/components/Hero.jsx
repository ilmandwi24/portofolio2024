import Gambar from "../images/pp.jpg";
const Hero = () => {
    const gambar = Gambar;
    return (

        <section className="hero lg:min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse my-11 gap-x-80 ">
                <img src={gambar} className="w-36 lg:w-44 lg:max-w-sm rounded-lg shadow-2xl my-3 animate-in slide-in-from-top-10 duration-700 " />
                <div className="w-72 lg:w-full animate-in slide-in-from-top-10  duration-700">
                    <h1 className="text-2xl font-bold ">Halo Semua 👋, Saya
                        <span class="block font-bold text-accent text-3xl lg:text-5xl mt-2 mb-1 lg:mt-0">Ilman Dwi Cahya</span>
                    </h1>
                    <h2 class="font-medium text-neutral text-lg mb-5 lg:text-xl ">
                        Web Developer
                    </h2>
                    {/* <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    <a className="btn btn-primary repeat-0 " href="#contact">Hubungi Saya</a>
                </div>
            </div>
        </section>

    )
}
export default Hero