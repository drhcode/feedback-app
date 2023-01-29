import { v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import swal from 'sweetalert';

const App = () => {

  const [feedback, setFeedback] = useState(FeedbackData)


  const deleteFeedback = (id) => {
    swal({
      title: 'Are you sure you want to delete this review?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((deleted)=>{
      setFeedback(feedback.filter((item)=> item.id !== id))
      if(deleted) {
        swal('You review has been deleted',{
          icon: 'success'
        })
      }else {
        swal("Operation canceled".toLocaleUpperCase())
        setFeedback(feedback)
      }
    }
    )
  }


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    swal('Your feedback has been added')
  }

  return (
    <>
    <Header  />
    <div className='container'>
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    <FeedbackForm handleAdd = {addFeedback}/>
    </div>
    </>
  )
}

export default App 