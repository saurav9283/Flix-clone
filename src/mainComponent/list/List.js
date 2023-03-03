import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"
import { display } from "@mui/system"
export default function List() {
    const listRef=useRef()
    const [slideNo,setSlide]=useState(0)
    const [isMove,setMove]=useState(false)

    const handleClick=(direction)=>{
        let distance=listRef.current.getBoundingClientRect().x-50
        setMove(true);
        if(direction==="left" && slideNo>0)
        {  
             setSlide(slideNo-1);
             console.log(slideNo)
            listRef.current.style.transform=`translateX(${230+distance}px)`
        }
        if(direction==="right" && slideNo<5)
        {   setSlide(slideNo+1);
            console.log(slideNo)
            listRef.current.style.transform=`translateX(${-230+distance}px)`
        }
    } 
    return (
        <div className="list">
            <span className="listTitle">Continue to Watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display:!isMove && "none"}} />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}