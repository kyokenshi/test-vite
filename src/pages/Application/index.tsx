import axios from 'axios'
import { useQuery } from 'react-query'

async function fetchingPosts() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

  return res.data
}

const Application = () => {
  const { data } = useQuery(['articles'], fetchingPosts)

  console.log(data, 'data')
  return <div>Application</div>
}

export default Application
