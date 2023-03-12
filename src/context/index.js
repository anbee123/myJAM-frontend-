import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [searchKey, setSearchKey] = useState()
  const [musics, setMusics] = useState([])
  const value = { user, setUser, searchKey, setSearchKey, musics, setMusics }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
