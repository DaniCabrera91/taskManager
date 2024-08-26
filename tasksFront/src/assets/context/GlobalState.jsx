import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
 tasks: [],
}
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const getTasks = async () => {
      const res = await axios.get('http://localhost:3000/tasks')
      dispatch({
        type: 'GET_TASKS',
        payload: res.data.tasks,
      })
    }
    return (
      <GlobalContext.Provider
        value={{
          tasks: state.tasks,
          getTasks,
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
   }
   
export const GlobalContext = createContext(initialState)