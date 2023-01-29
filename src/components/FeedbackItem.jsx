import {FaTimes} from 'react-icons/fa'
import PropTypes  from 'prop-types';
import Card from "./shared/Card"


const FeedbackItem = ({items, handleDelete}) => {


  return (
    <Card reverse={true}>
        <div className="num-display"> {items.rating} </div>
        <button onClick={()=> handleDelete(items.id)} className='close'>
          <FaTimes color="red"/> 
        </button>
            <div className="text-display">{items.text}</div>
     </Card>
  )
}

FeedbackItem.propTypes = {
  items: PropTypes.object.isRequired,
}

export default FeedbackItem