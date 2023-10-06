import { useContext } from 'react';
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if(!feedback||feedback.length===0)return <p className='my-3'>No Feedback Yet</p>

  return (
      <div className="feedback-list">
        {feedback.map((item)=>{
          return <FeedbackItem item={item}  key={item.id}/>
        })}   
      </div>   
  )
}

export default FeedbackList