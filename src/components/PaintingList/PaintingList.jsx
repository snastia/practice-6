import PropTypes from 'prop-types';
import { Painting } from "../../Painting"
// import s from "./Painting.module.css"

export function PaintingList ({paintingData}){
  return(
    <ul>
      {paintingData.map(({id, title, url, quantity, price, author})=>(
       <Painting
          key={id}
          url={url}
          title={title}
          price={price}
          quantity={quantity}
          author={author}
       /> 
        ))}
    </ul>
  )
}

PaintingList.propTypes = {
   painting: PropTypes.array,
}