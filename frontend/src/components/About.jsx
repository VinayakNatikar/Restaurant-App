import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const About = () => {
  return (
      <section className='about' id='about'>
          <div className='container'>
              <div className="banner">
                  <div className="top">
                      <h1 className='heading'> About us</h1>
                      <p> the only thing we're serious about is food.</p>
                  </div>
                  <p className='mid'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga nisi libero rem nam et ab earum velit quod aliquam, reprehenderit, ex, dolore repellat quaerat vel tempore assumenda odio sequi.

                  </p>

                  <Link to={"/"}>
                      Explore Menu{" "}
                  <span>
                      <HiOutlineArrowNarrowRight />
                  </span>
                  </Link>
              </div>
              <div className="banner">
                  <img src=" /about.png" alt="about "/>
            </div>
          </div>
   </section>
  )
}

export default About
