// useContext() = react hook that allows you to share values between
//                multiple levels
//              of components without having to pass props down
//              manually at every level
  // provider compoonent
  // 1. import {createContext} from 'react'
  // 2. export const 'MyContext' = createContext()
  // 3. <MyContext.Provider> value={value} 
  //    <Child />
  //    </MyContext.Provider>


import './App.css'
import ComponentA from './ComponentA'


function App() {
 

  return (
    <>
     <ComponentA />
    </>
  )
}

export default App
