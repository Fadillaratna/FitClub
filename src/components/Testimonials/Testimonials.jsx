import React, {useState} from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

export const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <span>
              {testimonialsData[selected].review}
            </span>
            <span>
              <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
              </span>{" "}
              - {testimonialsData[selected].status}
            </span>
           
        </div>
        <div className="right-t">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="" />

          <div className="arrows">
            <BsArrowLeftShort size={50} 
            onClick={() => {
            selected=== 0 ? setSelected(tLength-1) : setSelected((prev)=> prev -1)}}/>
            <BsArrowRightShort size={50} 
            onClick={() => {
              selected=== tLength-1 ? setSelected(0) : setSelected((prev)=> prev +1)}}
            />
          </div>
          
        </div>

        
    </div>
  )
}
