import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from './component/FeedbackStats'
import FeedbackForm from "./component/FeedbackForm";
import AboutComponentIcon from './component/AboutComponentIcon';
import AboutPages from "./component/pages/AboutPage"
import {FeedbackProvider} from './context/FeedbackContext'
function App(){

  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feeback UI" />
        <Routes>
          <Route exact path ='/' element={
            <>
              <div className="container">
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
              </div>
              <AboutComponentIcon/>
            </>
          }></Route>
          <Route path='/about' element={
            <div className='container'>
              <AboutPages/>
            </div>
          }></Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}


// function App(){
//   return React.createElement('div',{className: 'container'},React.createElement('h1',{},'My App'));
// }

export default App;