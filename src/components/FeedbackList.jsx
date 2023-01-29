import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackList = () => {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        <p>No feedback yet</p>
    }

return (
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 4 }}
            >
            <FeedbackItem item={item.id} items={item} key={item.id} />
            </motion.div>
            ))
        }
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList;