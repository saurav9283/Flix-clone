import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import { useState } from "react"
import "./navBAr.scss"
export default function NavBar() {
    const [isScrooled,setIsScrolled]=useState(false);
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0 ? false:true);
        return()=>(window.onscroll=null);
    };
    console.log(isScrooled);
    return (
        <div className={isScrooled ? "navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://www.coolgenerator.com/Data/Textdesign/202302/9db2c666450e286ebee5855807717826.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>Kid</span>
                    <Notifications className="icon" />
                    <img src="https://lh3.googleusercontent.com/ogw/AAEL6sh5dl3EkZ1ugPqN4FsUkx2X7aOgmz36bA2wF6vNGw=s64-c-mo" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}