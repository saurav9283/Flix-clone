import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import { useNavigate,Link,NavLink} from "react-router-dom";
import { useState } from "react"
import "./listItem.scss"
export default function ListItem({index}) {
  const [isHovered,setHovered]=useState(false);
  const trailer="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      >
      <img src="https://images.moneycontrol.com/static-mcnews/2022/12/rrr.jpg" alt="" />
      {isHovered &&(
        <>
      <video src={trailer} autoPlay="true" loop></video>
      <div className="itemInfo">
        <div className="icons">
          
          <NavLink className='nav-link' to='/watch'><PlayArrow  className="icon"/></NavLink>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>          
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo mollitia debitis libero aliquid, enim nesciunt iusto cumque officia!
        </div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
  )
}
