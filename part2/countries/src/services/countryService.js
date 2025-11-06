import axios from "axios"


const baseUrl = import.meta.env.VITE_COUNTRIES_API_KEY

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
//   console.log(request.then(response => response.data)

}

export default {
    getAll
}