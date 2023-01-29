import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackItem = ({items}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    return (
    <Card reverse={true}>
        <div className="num-display"> {items.rating} </div>
        <button onClick={()=> deleteFeedback(items.id)} className='close'>
          <FaTimes color="red"/> 
        </button>
        <button onClick={()=>editFeedback(items)} className="edit">
          <FaEdit color='green' />
        </button>
            <div className="text-display">{items.text}</div>
     </Card>
  )
}



export default FeedbackItem