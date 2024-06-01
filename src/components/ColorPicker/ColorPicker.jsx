import { Component, useState } from "react"
import { Container, Title, ColorpickerOption} from "./ColorPicker.styled"

export const ColorPicker = ({options}) => {
    const [colorOptionIdx, setColorOptionIdx] = useState(0)
    const  label = options[colorOptionIdx].label

    const handleClick = (optionId) => {
    if(optionId === colorOptionIdx){
        return
    }
       setColorOptionIdx(optionId)
    }

    return (
        <Container>
        <Title>Color Picker</Title>
        <span>Обраний колір: {label}</span>
        <br />
        {options.map(({label, color}, idx)=>(
            <ColorpickerOption 
                 onClick={() => {handleClick(idx)}}
                 key={label} 
                 bgc={color}
                 idx={idx}
                 currentIdx={colorOptionIdx}
                 >
            </ColorpickerOption>
        ))}
      </Container>
    )
}