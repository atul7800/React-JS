import { createContext, useContext } from "react";

// 1: creating context | 2: exporting context
export const ThemeContext = createContext({
    // Receiving props passed in App.jsx in step 3
    themeMode:'light',
    darkTheme:() => {},
    lightTheme:() => {},
})

// 4: creating context provider and, | 5: exporting context provider
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}