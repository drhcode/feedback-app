import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'


const FeedbackList = ({feedback, handleDelete}) => {

    if(!feedback || feedback.length === 0){
        <p>No feedback yet</p>
    }

// div without animation 
//   return (
//     <div className='feedback-list'>
//         {
//             feedback.map((item)=>{
//                 return (
//                     <FeedbackItem item={item.id} item={item} key={item.id} handleDelete={handleDelete}/>
//                 )
//             })
//         }
//     </div>
//   )

/////////////////////////////////////////////////////

// div with animation 
return (
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 4 }}
            >
            <FeedbackItem item={item.id} item={item} key={item.id} handleDelete={handleDelete}/>
            </motion.div>
            ))
        }
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList;