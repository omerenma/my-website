import React, {createContext} from 'react'


export const Context = createContext()
const greet = 'Hello there!'

 const PassDownContext = ({children}) => {
    return <Context.Provider value={{greet}}>
        {children}
    </Context.Provider>
}
export const useContextGreet = () => React.useContext(Context)
export default PassDownContext