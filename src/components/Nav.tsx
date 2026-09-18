import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <div className="border-b border-[#F1F5F9]">
       <nav className='flex justify-between gap-4 container mx-auto py-4 h-20 sticky  top-0 z-50'>
        <img className="h-9 w-auto pl-10" src={Logo} alt="" />
        <ul className="flex gap-4 items-center text-[#475569]">
            <li><a href=""><span className="text-[#DB2777]">Home</span></a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div className="pr-10 flex gap-4 items-center">
            <button className="btn text-[#334155] font-semibold bg-white px-1 py-1  hover:bg-gray-50 hover:scale-105 ">Sign in</button>
            <button className="btn bg-[#D91B7E] text-white px-4 py-2 rounded-full  hover:bg-pink-200 hover:scale-105">Sign Up</button>
        </div>
       </nav>
       </div>
    );
};

export default Nav;