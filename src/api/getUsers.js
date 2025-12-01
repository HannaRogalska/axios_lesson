
import { api } from "../config/axios"

export const getUsers = async () =>{
  try {
      const data = await api.get("/todos");
      return data.data
    
  } catch (error) {
    console.log(error)
  }
}
export const createUser = async(post) => {
    try {
        const response = await api.post("/posts", {
          title: "My title",
          body: post,
          userId: 1,
        });
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
    
}


