import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
  const [feedback, setFeedback] = useState([
    {
      id:1,
      text:'This item is from context',
      rating:10
    },
    {
      id:4,
      text:'This item is from context2',
      rating:2
    },
    {
      id:3,
      text:'This item is from context3',
      rating:5
    }
  ])

  const [feedbackEdit, setFeedbackEdit ] =useState({
    item:{},
    edit:false
  })

  function deleteItem(id){
    console.log(id)
    setFeedback((prev)=>{
      return prev.filter((item)=>{
        return item.id!==id
      })
    })
  }

  function addFeedback(newFeedback){
    newFeedback.id=uuidv4()
    setFeedback(()=>{
      return [newFeedback,...feedback]
    })
  }

  function editFeedback(item){
    setFeedbackEdit({
      item,
      edit:true,
    })
  }

  function updateFeedback(id,updItem){
    setFeedback(
      feedback.map((item)=>(item.id === id ? {...item, ...updItem} : item
      ))
    )
    // setFeedbackEdit({
    //   item:{},
    //   edit:false
    // })
  }

  return <FeedbackContext.Provider 
    value = {{
      feedback,
      feedbackEdit,
      deleteItem,
      setFeedback,
      addFeedback,
      setFeedbackEdit,
      editFeedback,
      updateFeedback
    }}
  >
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext