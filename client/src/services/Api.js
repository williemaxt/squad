// this file is for the baseURL connecting to our backend
import axios from 'axios'

//creating a connection to our backend api
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8086/'
  })
}
