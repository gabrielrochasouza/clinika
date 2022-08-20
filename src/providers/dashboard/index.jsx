import { createContext, useState, useContext } from "react";


const DashboardContext = createContext({})

export const DashboardProvider = ({children})=>{
    const [currentSelection, setCurrentSelection] = useState("overview")

    const changeCurrentSelection = (selection)=>setCurrentSelection(selection)

    return(
        <DashboardContext.Provider value={{currentSelection, changeCurrentSelection}}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashboard = ()=>useContext(DashboardContext)
