import  { createContext,  ReactNode, useState } from "react";

export type ThemeType = 'dark' |'light'


export const ThemeContext = createContext<any>(undefined)

export const ThemeProvider = ({children}:{children:ReactNode})=>{
    const [theme , setTheme] = useState<ThemeType>('dark')

    return <ThemeContext.Provider value={{theme , setTheme}}>{children}</ThemeContext.Provider>
}