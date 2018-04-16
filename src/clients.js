import axios from 'axios'

const clients = {
  // default: {
  //   client: axios.create({
  //      baseURL:'http://localhost:2222',
  //      responseType: 'json'
  //   })
  // },
  default: {
    client: axios.create({
       baseURL:'https://public-api.wordpress.com/rest/v1.1/sites/stephanenguyen.wordpress.com',
       responseType: 'json'
    })
  },
  // if there is another API
}

export default clients
