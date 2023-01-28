import FeedbackItem from './FeedbackItem'
import  PropTypes  from 'prop-types';


const FeedbackList = ({feedback}) => {

    if(!feedback || feedback.length === 0){
        <p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        {
            feedback.map((item)=>{
                return (
                    <FeedbackItem item={item.id} item={item}/>
                )
            })
        }
    </div>
  )
}

// FeedbackList.PropTypes = {
// }

export default FeedbackList