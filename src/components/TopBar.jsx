import amazonLogo  from '../assets/amazon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';

export function TopBar() {
    return(
        <header className="flex items-center bg-gray-100 p-2">
             <a href=""><img src={amazonLogo} alt="amazon logo photo" className='w-16' /></a>

            <nav className="flex">
                <a href="">Deliver To</a>
                <a href="location"><img src="src/images/marker.png" alt="" /></a>


                <div className="">
                    <select>
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Beauty Tools & Accessories</option>
                        <option>Books</option>
                    </select>
                </div>


               <div className='bg-yellow-300'>
                    <input type="text" placeholder="Search Amazon" />
                    <i className="fa-solid fa-magnifying-glass" ></i>
               </div>

                <select>
                    <option value="English">EN</option>
                    <option value="">AR</option>
                    <option value="">SM</option>
                    <option value="">KI</option>
                    <option value="">ES</option>
                </select>


               <div className='flex items-center gap-4'>
                     <select>
                        <option value=""><span>Hello, sign in</span> <br /> Accounts & Lists</option>
                     </select>
                    <h1>Hello sign in</h1>
                    <h2>Accounts & Lists</h2>

                    <h3>Returns & Orders</h3>
                    <img src={cartIcon} alt="" className='bg-red-600'/>
               </div>

            </nav>
        </header>
    )
}