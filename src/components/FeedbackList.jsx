import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Loading from './shared/Loading'


const FeedbackList = () => {

    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
       return <p>No feedback yet</p>
    }

    return isLoading ? <Loading /> : <div className='feedback-list'>
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

}

export default FeedbackList;