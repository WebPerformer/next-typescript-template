'use client'
import { createContext, useContext, useState } from "react"

const Context = createContext({})

export const StateContext = ({ children }: any) => {

    const [handle, setHandle] = useState(false)

    return (
        <Context.Provider
            value={{
                handle,
                setHandle
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)