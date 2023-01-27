
import axios , {AxiosResponse} from "axios"
import { Todo } from "./Todo"


export const Addtodb=async(payload:Todo)=>{

    let response:AxiosResponse<Todo[]> = await axios.post("http://localhost:8080/todos",payload);
    return response.data
    
}

export const Getetodo=async()=>{
    let response :AxiosResponse<Todo[]> =await axios.get('http://localhost:8080/todos')
    return response.data
}

export const Deletapi=async(id:number)=>{
    let response :AxiosResponse<Todo[]> =await axios.delete(`http://localhost:8080/todos/${id}`)
    // console.log(response);
    
    // return response.data
    
}