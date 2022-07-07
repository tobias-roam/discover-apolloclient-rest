import { gql, useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"

interface Rocket {
  id: string
  name: string
  first_flight: string
  diameter: {
    meters: number
  }
  height: {
    meters: number
  }
}
interface RocketResponse {
  rocket: Rocket
}

const rocketQuery = gql`
  query Rocket($id: ID!) {
    rocket(id: $id) @rest(type: "Rockets", path: "rocket/{args.id}") {
      id
      name
      first_flight
      diameter {
        meters
      }
      height {
        meters
      }
    }
  }
`

const Rocket: React.FC = () => {
  const {id} = useParams()
  const {data, error, loading} = useQuery<RocketResponse>(rocketQuery, {
    variables: {
      id
    },
    skip: !id
  })
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Ooooooops, sorry</div>
  }
  if (!data?.rocket) {
    return <div>There is nothing to see</div>
  }
  return (
    <div>
      <h2>{data?.rocket.name}</h2>
      <dl>
        <dt>First flight</dt>
        <dd>{data.rocket.first_flight}</dd>
        <dt>Height</dt>
        <dd>{data.rocket.height.meters}m</dd>
        <dt>Diameter</dt>
        <dd>{data.rocket.diameter.meters}m</dd>
      </dl>
      <Link to="/">Back to the list</Link>
    </div>
  )
}

export default Rocket