export default function TopBar() {
    return(
        <header className="bg-slate-500 flex align-middle">
        <nav className="flex">
            <a href=""><img src="src/images/amazon.png" alt="" className="w-16"/></a>
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