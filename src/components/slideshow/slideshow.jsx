import React,{ useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Slide from './slide/slide';
import {getSlideData} from '../../redux/slide/slide.selector';
import './slideshow.style.scss';



const Slideshow = ({slides}) =>   {
    const [count, setCount]  = useState(0);
    const {id, ...otherProps} = slides[count];
    const [prevCount, setPrevCount] = useState(0);
    const [style, setStyle] = useState("");

    const handleClick = (limit, resetValue, value ) => {
        if(count===limit){
            setPrevCount(count);
            setCount(resetValue);
        }else{
            setPrevCount(count);
            setCount(count + value);
        }
    };

    useEffect(() => {
        if(count===4 && prevCount===0){
            setStyle("to-right")
        }
        else if(count===0 && prevCount===4){
            setStyle("to-left");
        }
        else if(count > prevCount){
            setStyle("to-left");
        }else if(count < prevCount){
            setStyle("to-right");
        }
        
    }, [count]);
    return(
        <div className="slideshow-container">
            <button className="prev" onClick={() => {handleClick(4,0,1)}} >&#10094;</button>
            <Slide key={id} {...otherProps} className={style}/>
            <button className="next" onClick={() => {handleClick(0,4,-1)}}>&#10095;</button>
        </div>
    )
        
    
};



const mapStateToProps = state => ({
    slides: getSlideData(state)
})

export default connect(mapStateToProps)(Slideshow);