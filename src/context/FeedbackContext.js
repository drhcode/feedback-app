
import { createContext, useState, useEffect } from "react";
import swal from 'sweetalert';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const  [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    useEffect(()=>{
      fetchFeedback()
    }, [])


    // fetch feedback
    const fetchFeedback = async () =>{
      const response = await (fetch(`/feedback?_sort=id&_order=desc`))
      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }
 

    // Add feedback function 
    const addFeedback = async (newFeedback) => {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
    })
      const data = await response.json()

        swal('Your feedback has been added', {
          icon: 'success',
        })
        setFeedback([data, ...feedback])
      }

         // edit feedback
    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true
      })
    }

    //update feedback
    const updateFeedback = async (id, upItem) => {
      const response = await fetch(`/feedback/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(upItem)
      })
      const data = await response.json
      swal('Your feedback has been updated', {
        icon: 'success',
      })
      setFeedback(feedback.map((item)=>item.id === id ? {...item, ...data} : item))
    }


    //   Delete Feedback Function  
    const deleteFeedback = async (id) => {
      const response = await fetch(`/feedback/${id}`, { method: 'DELETE'})
      const data = await response.json()

        swal({
          title: 'Are you sure you want to delete this review?',
          icon: 'warning',
          buttons: ['No, cancel', true],
          dangerMode: true,
        })
        .then((deleted)=>{
          setFeedback(feedback.filter((item)=> item.id !== id))
          if(deleted) {
            swal('You review has been deleted', {
              icon: 'success'
            })
          }else {
            swal("Operation canceled".toLocaleUpperCase(), {
              icon: 'success',
            })
            setFeedback(data)
          }
        })
      }


      

    return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback, isLoading }}>
    {children}
    </FeedbackContext.Provider>
}



export default FeedbackContext