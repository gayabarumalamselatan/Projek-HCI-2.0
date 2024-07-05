import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import turtletits from '../../public/dist/img/turtletits.jpg';
import './home.css';

const Home = () => {

  

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md fixed-top ps-4 d-flex justify-content-between"> 
        <a className="navbar-brand" href="#">Pisces Aquarium</a>
        <div className="text-end pe-4">
          <ul className="navbar-nav text-end"> 
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>


      {/* Jumbotron */}
      <section className='overlay'>
        <div class="jumbotron mt-5 pt-5">
          <div class="container text-start">
            <h1 class="display-3 fw-bold">Marine Life</h1>
            <p className='col-4 fs-5'>
              The ocean is full of mysterious and interesting things. So many wonderful animals in the ocean. Come dive in and find out! 
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='row my-5 mx-5'>
        <div className='col-6 text-start '>
          <p className='fs-5'>
            The ocean is a home to diverse living things. From the smallest singel-celled plankton to the largest animal on earth, blue whale. We as human must protect their life. But before we do that, we have to understand about their habitats, habits, and their variety. Otherwise, our contribution just don’t work well. 
          </p>
          <br/>
          <p className='fs-5'>
            In this page, we have summarize some of their variety. So dive in an learn trough the description below. 
          </p>
        </div>
        <div className=' col-6 ps-5'>
          <img className='img-fluid' id='turtle' src="/dist/img/turtletits.jpg" alt=''/>
        </div>
      </section>

      <div className='mx-5'>
        <hr className="border border-2 opacity-100 mb-1 " id='line'/>
        <p className='text-start '>Click the picture to see the description</p>
      </div>

      <div className="container flex justify-center items-center">
        <div className="grid gap-4 grid-cols-2 w-4/5">
          <img className="w-full aspect-[16/9] object-cover" id="imgMenu" src="/dist/img/whale.jpg" alt="" />
          <img className="w-full aspect-[16/9] object-cover" id="imgMenu" src="/dist/img/lobster.jpg" alt="" />
          <img className="w-full aspect-[16/9] object-cover" id="imgMenu" src="/dist/img/turtle1.jpg" alt="" />
          <img className="w-full aspect-[16/9] object-cover" id="imgMenu" src="/dist/img/fish.jpg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer class="py-3 my-4 bg-[#212121] mb-0 mt-5 text-center">
        <h3 className="text-white text-3xl font-bold leading-[80px]">
            Piscis Aquarium
        </h3>
        <div className='flex justify-center items-center my-4'>
          <p className=' text-center text-white max-w-lg text-sm'>
          Content from this Website may not be used in any form without written permission from the site owner 
        </p>
        </div>
        <p class="text-center text-white text-xs">copyright &copy;2024 Piscis Aquarium. Desined by <span className='text-indigo-400'>Febrian S</span></p>
      </footer>
    </>
  )
}

export default Home;