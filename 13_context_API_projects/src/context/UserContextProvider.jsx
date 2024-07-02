import React from "react";
import UserContext from "./UserContext"; // 3: importing context
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    // 3: passing prop to the context  and | 4: creating context provider
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 5: exporting context provider
export default UserContextProvider;
