export default function TopBar() {
    return(
        <header className="bg-slate-500 flex align-middle">
        <nav className="flex">
            <a href=""><img src="src/images/amazon.png" alt="" className="w-16"/></a>
            <a href="">Deliver To</a>
            <a href="locatio"><img src="src/images/marker.png" alt="" /></a>

            <input type="text"  className="w-96 h-6"/>

        </nav>
        </header>
    )
}