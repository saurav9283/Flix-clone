import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
export default function Featured({type}) {
  return (
    <div className="featured">
      { type &&(
        <div className="category">
          <span>{type==="movie"? "Movies":"Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="horror">Horror</option>
            <option value="historical">Historical</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Crime">Crime</option>
            <option value="Comedy">Comedy</option>
            <option value="Adventure">Adventure</option>
            <option value="adventure">Adventure</option>
            <option value="adventure">Adventure</option>
            <option value="adventure">Adventure</option>
          </select>
        </div>
      )}
      <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/tony-stark-endgame-skin-marvels-avengers.jpg" alt="" />

      <div className="info">
        <img src="https://1000logos.net/wp-content/uploads/2017/11/logo-Marvel.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis doloremque earum nihil rerum voluptatibus asperiores dolorum sint nulla nam, ipsam ex commodi. 
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>

  )
}
