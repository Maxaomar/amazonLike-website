import amazonLogo  from '../images/amazon-logo-white.png';
import cartIcon from '../images/icons/cart-icon.png';
import  '../styles/topbar.css'


export function TopBar() {
    return(
        <nav className='nav-container'>
            {/* layer 1 */}
                <div className='flex'>
                    <a href=""><img src={amazonLogo} alt="amazon logo photo" className='w-24'/></a>
                </div>

            {/* layer 2 */}

                <div className='flex'>
                    <a href="" className='text-xs'>Deliver To</a>
                    <img src="src/images/marker.png" alt="" className='max-w-4'/>
                    <h3>kenya</h3>
                </div>


            {/* layer 3 */}
            <div className="flex flex-grow">
                    <select className='w-12 bg-selections'>
                        <option value="All">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Beauty Tools & Accessories">Beauty Tools & Accessories</option>
                        <option value="Books">Books</option>
                    </select>

                    <div className='search-bar bg-yellow-300'>
                        <input type="text" placeholder="Search Amazon" className=''/>
                        <i className="fa-solid fa-magnifying-glass ml-1.5 text-xl" ></i>
                    </div>
              </div>

            {/* layer 4 */}

                    <select className='w-9 h-8 bg-black'>
                        <option value="EN">EN</option>
                        <option value="AR">Arabic</option>
                        <option value="SO">Somali</option>
                        <option value="KI">Kiswahili</option>
                        <option value="ES">Espanyol</option>
                    </select>

            {/* layer 5 */}

                    <select className='w-12 h-8 text-white bg-black'>
                        <option value="">Hello, sign in</option>
                        <h2>Accounts & Lists</h2>
                    </select>

            {/* layer 6 */}

                    <div className='flex highlights'>
                        <h3>Returns & <br /> <b>Orders</b></h3>
                    </div>

                    <div>
                        <img src={cartIcon} alt="" className='w-12'/>
                    </div>
    </nav>
)
}