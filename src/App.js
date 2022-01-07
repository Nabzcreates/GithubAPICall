import './App.css';
import axios from 'axios'
import {useEffect, useRef} from 'react'
import Container from './components/Container';
////////
import {useDispatch, useSelector} from 'react-redux'
import {setUserData} from './store/userDataSlice'
import {setUser} from './store/userSlice'

// #1 npm install axios
// #2 import axios from './axios'
// #3 import useEffect hook
// #4 Make an get request to the github api using axios
// #5 How do we get reference of the input value?
// #6 import useRef and get the ref of the search input
// #7 On click of the search update the user state with the ref 
// #8 After finish search functionality how do you map the response into the code?
// #9 Get the theme switcher to work
// #10 Turn reusable sections of the app to components (Finish rest of hw)

function App() {

  const dispatch = useDispatch()

  const userRef = useRef()
  

  const user = useSelector(state=> state.user.value)

  useEffect(()=>{
    const getUser= async()=>{
      try {

        const response = await axios.get(`https://api.github.com/users/${user}`)
    
        dispatch(setUserData(response.data))
      }
      catch(error) {
        console.log(error)
      }
    }
    return getUser()
  }, [user, dispatch])

  

  return (
      <div className="App">
      <Container userRef = {userRef} setUser = {setUser} setUserData={setUserData} dispatch = {dispatch}/>
     </div>

  );
}

export default App;
