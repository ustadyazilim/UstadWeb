'use client'
/**
import React from 'react'
import useDarkMode from 'use-dark-mode'

export type Theme = {
  themeString: string
}

export const ThemeContext = React.createContext<Theme | null>(null)
export const IsDarkModeActiveContext = React.createContext(null)

export const ThemeProvider: React.FC = ({ children }) => {
  const { value, toggle } = useDarkMode(true)

  return (
    <IsDarkModeActiveContext.Provider value={value}>
      <ThemeContext.Provider value={toggle}>{children}</ThemeContext.Provider>
    </IsDarkModeActiveContext.Provider>
  )
}
*/
