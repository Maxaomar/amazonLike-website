import amazonLogo  from '../assets/amazon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import  '../styles/topbar.css'


export function TopBar() {
    return(
        <nav className='nav-container'>
            <header className='flex'>
                <a href=""><img src={amazonLogo} alt="amazon logo photo" className='w-24' /></a>
            </header>

            <div className='flex text-xs'>
                <a href="">Deliver To
                    <img src="src/assets/marker.png" alt="" />
                </a>
            </div>

            <div className="flex">
                <select className='w-16 bg-selections'>
                    <option>All</option>
                    <option>Electronics</option>
                    <option>Beauty Tools & Accessories</option>
                    <option>Books</option>
                </select>

                <div className='search-bar bg-yellow-300'>
                    <input type="text" placeholder="Search Amazon" />
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </div>
            </div>


            <div className='flex'>
                <select className='bg-red-400 w-12 h-8'>
                    <option value="English">EN</option>
                    <option value="">AR</option>
                    <option value="">SM</option>
                    <option value="">KI</option>
                    <option value="">ES</option>
                </select>
            </div>

            <div className='flex'>
                <select className='bg-amber-600 w-12 h-8'>
                    <option value="">Hello, sign in</option>
                    <h2>Accounts & Lists</h2>
                </select>
            </div>


            <div className='flex'>
                <h3>Returns & Orders</h3>
                <img src={cartIcon} alt="" className='w-12'/>
            </div>
    </nav>
)
}