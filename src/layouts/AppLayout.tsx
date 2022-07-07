import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const AppLayout: React.FC = () => <Layout><Outlet/></Layout>
export default AppLayout