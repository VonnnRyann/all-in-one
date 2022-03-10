import Slider from "react";

const Header = ({color,changeColor}) => {


    return(
        <header>
        <div>
            RGB ({color.red}, {color.green}, {color.blue})
            <Slider color={color} sliderColor={changeColor}/>
        </div>

        </header>
    )
}

export default Header