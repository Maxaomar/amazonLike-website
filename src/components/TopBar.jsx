import amazonLogo  from '../assets/amazon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';

export function TopBar() {
    return(
        <header className="flex items-center justify-between bg-slate-500 topbar p-4">
             <a href=""><img src={amazonLogo} alt="amazon logo photo" className='w-16' /></a>

             <div className='flex'>
                    <a href="">Deliver To</a>
                    <a href="location"><img src="src/assets/images/marker.png" alt="" /></a>
             </div>


             <div className="flex">
                    <select className='bg-amber-600 w-12 h-8'>
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


                    <h3>Returns & Orders</h3>
                    <img src={cartIcon} alt="" className=''/>


        </header>
    )
}