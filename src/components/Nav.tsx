import NavLogo from "../assets/logo-text.png"

export default function Nav() {
    return (
        <>
        <div className="sticky top-0 z-0 bg-white">
            <div className="container mx-auto flex justify-between items-center py-5">
                <img src={NavLogo} alt="" className="h-8 w-auto" />

                <ul className="flex gap-5">
                    <li className="text-[#DB2777]"><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className="flex gap-5 items-center">
                    <span><a href="">Sign In</a></span>
                    <button className="bg-[#D91B7E] text-white px-2.5 py-1.5 rounded-4xl cursor-pointer">Sign Up</button>
                </div>
            </div>
        </div>
        
        </>
    )
}