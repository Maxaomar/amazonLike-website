import amazonLogo  from '../images/amazon.png';
import cartIcon from '../images/icons/cart-icon.png';
import  '../styles/topbar.css'


export function TopBar() {
    return(
        <nav className='nav-container'>
            {/* layer 1 */}
                <div className='flex'>
                    <a href=""><img src={amazonLogo} alt="amazon logo photo" className='w-24' /></a>
                </div>

            {/* layer 2 */}

                <div className='flex'>
                    <a href="" className='text-xs'>Deliver To</a>
                    <img src="src/images/marker.png" alt="" className='max-w-4'/>
                    <h3>kenya</h3>
                </div>


            {/* layer 3 */}
            <div className="flex">
                    <select className='w-12 bg-selections'>
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Beauty Tools & Accessories</option>
                        <option>Books</option>
                    </select>

                    <div className='search-bar bg-yellow-300'>
                        <input type="text" placeholder="Search Amazon" className=''/>
                        <i className="fa-solid fa-magnifying-glass ml-1.5 text-xl" ></i>
                    </div>
              </div>

            {/* layer 4 */}

                    <select className='bg-red-400 w-8 h-8'>
                        <option value="English">EN</option>
                        <option value="">AR</option>
                        <option value="">SM</option>
                        <option value="">KI</option>
                        <option value="">ES</option>
                    </select>

            {/* layer 5 */}

                    <select className='bg-amber-600 w-12 h-8'>
                        <option value="">Hello, sign in</option>
                        <h2>Accounts & Lists</h2>
                    </select>

            {/* layer 6 */}

                    <div className='flex'>
                        <h3>Returns & Orders</h3>
                        <img src={cartIcon} alt="" className='w-12'/>
                    </div>
    </nav>
)
}