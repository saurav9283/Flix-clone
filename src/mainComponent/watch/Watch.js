import { ArrowBackIosOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import "./watch.scss"
export default function Watch()
{
    const navigater=useNavigate()
    return(
        <div className="watch">
            <div className="back" onClick={()=>navigater('/home') }>
                <ArrowBackIosOutlined/>
                Home
            </div>
            <video 
            autoPlay progress controls
            src="https://joy.videvo.net/videvo_files/video/premium/partners0082/large_watermarked/BB_3b72fd57-a9b7-4109-a782-48635a0ebdbd_preview.mp4"></video>
        </div>
    )
}