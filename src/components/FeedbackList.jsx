import FeedbackItem from './FeedbackItem'
import  PropTypes  from 'prop-types';


const FeedbackList = ({feedback, handleDelete}) => {

    if(!feedback || feedback.length === 0){
        <p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        {
            feedback.map((item)=>{
                return (
                    <FeedbackItem item={item.id} item={item} key={item.id} handleDelete={handleDelete}/>
                )
            })
        }
    </div>
  )
}

// FeedbackList.PropTypes = {
// }

export default FeedbackList