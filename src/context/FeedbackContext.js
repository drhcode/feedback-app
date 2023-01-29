import { v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";
import swal from 'sweetalert';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is from context',
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })
 

    // Add feedback function 
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        swal('Your feedback has been added', {
          icon: 'success',
        })
      }

         // edit feedback
    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true
      })
    }

    //update feedback
    const updateFeedback = (id, upItem) => {
      setFeedback(feedback.map((item)=>item.id === id ? {...item, ...upItem} : item))
    }


    //   Delete Feedback Function  
    const deleteFeedback = (id) => {
        swal({
          title: 'Are you sure you want to delete this review?',
          icon: 'warning',
          buttons: ['No, cancel', true],
          dangerMode: true,
        })
        .then((deleted)=>{
          setFeedback(feedback.filter((item)=> item.id !== id))
          if(deleted) {
            swal('You review has been deleted',{
              icon: 'success'
            })
          }else {
            swal("Operation canceled".toLocaleUpperCase(), {
              icon: 'success',
            })
            setFeedback(feedback)
          }
        })
      }


      

    return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}>
    {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext