import { Link } from 'react-router-dom'
import './css/Hero.css'

export const Hero = () => {
  return (
    <section className='pageHero' loading='lazy'>
        <div className="heroContent">
            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem placeat delectus quisquam laudantium obcaecati impedit minus blanditiis. Veritatis odio tempore a praesentium harum iste repellat hic iure provident porro?
            </p>
            <Link to='/food' className='btn btn-warning'>
                Food Menu
            </Link>
        </div>
    </section>
  )
}
