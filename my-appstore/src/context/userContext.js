import  {useState, useContext, createContext, useEffect}  from "react";
import { createUserRequest, getUsersRequest } from "../api/users.js";

const userContext = createContext();

export const useUsers = () => {
    const context = useContext(userContext);
    if (!context) throw new Error("Post Provider is missing");
    return context;
  };

  export const UserProvider= ({children})=>{

    const [users, setUsers]=useState([]);
    useEffect(() => {
        (async () => {
          const res = await getUsersRequest();
          setUsers(res.data);
        })();
      }, []);

      const createUser= async (user)=>{
       try {
        const res= await createUserRequest(user)
        setUsers([...users, res.data])
       } catch (error) {
        console.error(error);
       }
       

      };


   return(
    <userContext.Provider value={{users, createUser}}>
        {children}
    </userContext.Provider>

   )   

  }