// Topic cover in this video
// 1. React Hook Form
// 2. react-toastify

// ________________________________________________________________________________________________________

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import Wrapper from './Components/Wrapper.jsx'


createRoot(document.getElementById('root')).render(
  <Wrapper>
   <App />
   <ToastContainer position='top-center'/> 
  </Wrapper>
)



