import { useState } from 'react';
import Header from './components/header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

const App = () => {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
    <Header  />
    <div className='container'>
    <FeedbackList feedback={feedback} />
    </div>
    </>
  )
}

export default App 