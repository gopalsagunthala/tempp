import React from 'react';
import './Home.css';
import './style.css'
import './mediaqueries.css'
import Footer from '../../components/footer/Footer.jsx'
import img1 from './images/Food.jpeg'
import v from './images/V1.png'
import n from './images/g-apple.png'
import analyzer from './images/Analyzer.png'
import Dietplan from './images/Dietplan.png'
import Tracker from './images/Tracker.png'
import Diet from './images/Diet.png'
import { GoNorthStar } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const navigate=useNavigate()  
  function getStarted()
  {
    navigate('/signup');
  }
  
  return (
  
    <div className='entirepage'>   
      <nav id="desktop-nav">
        <div className="logo">
          <div className='n'><img src={n} height={60} width={60} alt="" /></div>
          <div className="utri"><p >utri</p></div>
          <div className='v'><img src={v} height={75 } width={75} alt="" /></div>
          <div className="ision"><p >ision</p></div>
        </div>
        <div>
          <ul className="nav-links">
            <li><a href="#details">About</a></li>
            <li><a href="/signup">SignUp</a></li>
            <li><a href="/signin">SignIn</a></li>
          </ul>
        </div>
      </nav>
      <div className="outer">
        <div className="left">
            <img src={img1} alt="profile picture" />
            <center>
              <div className='more-content'>
              <h4 >Know more about NutriVision...</h4>
              </div>
            </center>
        </div>
        <div className="right">
          <div className='content-home'>
            <h1 className="">NutriVision</h1><br />
            <h2 className="middle-text">AI Powered Nutrition Analyser.</h2><br /><br />
            <button onClick={()=>getStarted()}  className='start-button'><strong><a href="/signup">Get Start..!</a></strong></button>
            
          </div>
        </div>
      </div>
      <center><h4 className='title-about' id='details'>Nutrition Analysis</h4></center>
      <div className='about1' >
        <div className='about-right1'>
          <div className='about-content1'>
            <h3 >"Discover the nutritional content of any food by simply entering its name! Uncover the secrets hidden in your favorite dishes."
            </h3><br />
            <ul className='analysis-access'>
              <li className='acess-1'><GoNorthStar color='orange'/> Create accout..</li><br />
              <li className='acess-1'><GoNorthStar color='orange'/> Go to nutrition analysis </li><br />
              <li className='acess-1'><GoNorthStar color='orange'/> Then enter the food name.</li><br />
            </ul>
          </div>
        </div>
        <div className='about-left1'>
          <img src={analyzer} alt="profile picture" className='about-image'/>
        </div>
        
      </div>
      <center><h4 className='title-about' id='details'>Diet Plan</h4></center>
      <div className='about2'>
        <div className='about-right2'>
          <img src={Dietplan} alt="profile picture" className='about-image'/>
        </div>
        <div className='about-left2'>
          <h3 className='about-content2'>"Tailor your path to wellness with our personalized diet planner! Craft a roadmap to your health goals, one meal at a time."</h3>
        </div>
      </div>
      <center><h4 className='title-about' id='details'>Calorie Tracker</h4></center>
      <div className='about3'>
        <div className='about-right3'>
          <h3 className='about-content3'>"Track your journey to better health with our seamless diet tracker. Effortlessly monitor your nutrition and stay on course to your wellness goals."</h3>
        </div>
        <div className='about-left3'>
          <img src={Tracker} alt="profile picture" className='about-image' id='track'/>
        </div>
      </div>
      <center><h4 className='title-about' id='details'>Diets</h4></center>
      <div className='about4'>
        <div className='about-right4'>
          <img src={Diet} alt="profile picture" className='about-image'/>
        </div>
        <div className='about-left4'>
          <div className='about-content4'>
            <h3 >"Tailor your path to wellness with our personalized diet planner! Craft a roadmap to your health goals, one meal at a time."</h3>
            <br /><br />
            <ul>
              <li><GoNorthStar color='orange'/> You can read all the article</li><br />
              <li><GoNorthStar color='orange'/> Apply those knowledge in your meal and workout session.</li>
            </ul>
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  
  );
};

export default Home;
