import PropTypes  from 'prop-types';

const FeedbackStats = ({feedback}) => {
    // cacl average of rating feedback
    let average = feedback.reduce((acc, currentValue) => { return acc + currentValue.rating}, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average) ? 0 : average}</h4>

    </div>
  )
}

FeedbackStats.prpoTypes ={
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats