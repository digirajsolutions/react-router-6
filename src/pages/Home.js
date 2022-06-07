import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link className='btn' to='/about'>
        Go to About
      </Link>
    </section>
  )
}
export default Home
