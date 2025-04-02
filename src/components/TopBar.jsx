import amazonLogo  from '../assets/amazon.png';

export function TopBar() {
    return(
        <header className="bg-slate-950 text-white flex align-middle">
             <a href=""><img src={amazonLogo} alt="amazon logo photo" className='w-16' /></a>

            <nav className="flex">
                <a href="">Deliver To</a>
                <a href="location"><img src="src/images/marker.png" alt="" /></a>


                <div className="bg-yellow-300">
                    <select>
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Beauty Tools & Accessories</option>
                        <option>Books</option>
                    </select>
                    <input type="text" placeholder="Search Amazon" />

                    <i class="fa-solid fa-magnifying-glass" ></i>
                </div>

            </nav>
        </header>
    )
}