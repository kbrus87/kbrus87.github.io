import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
// Crear el contexto solo una vez
export const MyContext = createContext();

export function MyProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [api, setApi] = useState(import.meta.env.VITE_API_URL);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(api + "/projects").then((res) => {
      setProjects(res.data);
    });

    setTimeout(() => {
      setLoading(false);
    }, 850);

  }, []);

  const getContent = async (id) => {
    return axios.post(api + "/projects/content/" + id).then((res) => {
      return res.data
    })
  }

  const setLoadingFalseWithDelay = (setLoading) => {
    setTimeout(() => {
      setLoading(false);
    }, 850)
  }


  return (
    <MyContext.Provider value={{ projects, loading, api, getContent, setLoadingFalseWithDelay }}>
      {children}
    </MyContext.Provider>
  );
}

