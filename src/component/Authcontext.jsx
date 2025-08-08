// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  return (
    <Authcontext.Provider value={{ user, login }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => useContext(Authcontext);
