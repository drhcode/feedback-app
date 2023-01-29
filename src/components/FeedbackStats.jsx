import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackStats = () => {
  const {feedback} = useContext(FeedbackContext)
    // calc average of rating feedback
    let average = feedback.reduce((acc, currentValue) => 
    { return acc + currentValue.rating}, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    if(feedback.length === 1) {
       return (
        <div className='feedback-stats'>
          <h4 className='feedback=1'>{feedback.length} Review</h4>
          <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
      )
    }else {
      return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
      )
    }
    }




export default FeedbackStats