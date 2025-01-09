import logo from '../assets/images/header-logo.svg'
import { hamburger } from '../assets/icons'
import { navLinks } from '../Constants/index.js'
const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="./">
                    <img src={logo}
                        alt="logo-img"
                        width={130}
                        height={30} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) =>(
                        <li key={item.label}>
                            <a href={item.href}
                                className='font-montserrat text-lg leading-normal text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                    <img src={hamburger}
                        alt="hamburger-icon"
                        width={24}
                        height={24} />
                </div>
            </nav>
        </header>
    )
}

export default Nav