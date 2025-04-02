export default function BottomBar() {
    return(
        <header className="bg-slate-950 text-white flex items-center">
             <a href=""> <i class="fa-solid fa-bars"></i> All</a>

        <nav className="flex gap-4 ml-3">
                <a href="">Today's deals</a>
                <a href="">Customer Services</a>
                <a href="">Registry</a>
                <a href="">Gift Cards</a>
                <a href="">Sell</a>
        </nav>
        </header>
    )
}