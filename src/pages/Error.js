import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section'>
      <h3>404</h3>
      <p>Page not found</p>
      <Link className='btn' to='/'>
        Back Home
      </Link>
    </section>
  )
}
export default Error
