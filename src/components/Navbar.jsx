import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { Contact } from './Contact';


const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.documentElement.setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div className="navbar bg-base-100">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li ><a href='#portofolio'>Portofolio</a></li>
                    <li ><a href='#skill'>Skill</a></li>
                    <li ><a href='#experience'>Experience</a></li>
                    <li ><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-[1.35rem] repeat-0" href="#">Ilman Dwi</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-base hidden lg:block"><a href='#portofolio'>Portofolio</a></li>
                    <li className="text-base hidden lg:block"><a href='#skill'>Skill</a></li>
                    <li className="text-base hidden lg:block"><a href='#experience'>Experience</a></li>
                    <li className="text-base hidden lg:block"><a href='#contact'>Contact</a></li>


                    {/* <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li> */}
                    {/* <li>
                        <label className="flex cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={handleToggle}
                                // show toggle image based on localstorage theme
                                checked={theme === "light" ? false : true} />

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </li> */}
                </ul>

            </div>
        </div>

    )
}
export default Navbar