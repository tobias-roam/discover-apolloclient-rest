import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"

interface Rocket {
  id: string
  name: string
}
interface RocketListResponse {
  rockets: Rocket[]
}

const rocketsQuery = gql`
  query Rockets {
    rockets @rest(type: "Rockets", path: "rockets") {
      id
      name
    }
  }
`

const RocketList: React.FC = () => {
  const {data, error, loading} = useQuery<RocketListResponse>(rocketsQuery)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Ooooooops, sorry</div>
  }
  return <ul>{data?.rockets.map(rocket => <li key={rocket.id}><Link to={`/${rocket.id}`}>{rocket.name}</Link></li>)}</ul>
}

export default RocketList