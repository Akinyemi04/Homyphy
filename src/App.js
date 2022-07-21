import bus from './images/people.png'
import './App.css';
import sl from './images/Vectorsl.png'
import msporty from './images/Vectorslack.png'
import sportify from './images/Vectorspotify.png'
import db from './images/Vectordb.png'
import dropbox from './images/Vectordropbox.png'
import zoom  from './images/VectorZoom.png'
import busy from './images/fvv.png'
import bs from './images/tvv.png'
import arrow from './images/Arrow 1head.png'
import boy from './images/boy.png'
import girl from './images/lady.png'
import woman from './images/woman.png'
import forme from './images/forme.png'
import three from './images/icon-menu.svg'
import ex from './images/icon-close.svg'
import { useState } from 'react';
function App() {
  const[flip,setFlip]=useState('')
  const[lex,setEx]=useState('none')
  const[dis,setDis]=useState('')
  
  function show(){
    setFlip('none')
    setEx('inline-block')
    setDis('flex')
    
  }
  function hide(){
    setFlip('inline-block')
    setDis('none')
    setEx('none')
  }
  return (
    <>
      <div className="App">
        <h1>DIGITAL AGENCY</h1>
        <img onClick={show} style={{display:flip}} alt ='' src={three} className='zex'></img>
        <img onClick={hide} style={{display:lex}} alt=''src={ex} className='xex'></img>
        <nav >
          <ul style={{display:dis}}>
            <li className='fum'>home</li>
            <li className='fum'>about</li>
            <li className='fum'>testimonials</li>
            <li className='fum'>contact</li>
          </ul>
        </nav>
        <aside>
          <section>
            <p>Buiding Digital <br/>
                Products, Brands <br/> 
               & Experience
            </p>
            
            <p className='span'>Digital Agency Is Your Online Team Management Tool  That <br/>Easy And Prompt</p>
            <button> Contact Us</button>
          </section>
          <img id='bus' alt='/' src={bus}></img>
        </aside>
        <span>Trusted By Over 4,000+ Companies</span>
        <footer>
        <ul>
          <li className='rt'><img src={sportify} alt=''></img></li>
          <li className='bt'><img src={sl} alt=''></img><img src={msporty} alt=''></img></li>
          <li className='ft'><img src={db} alt=''></img><img src={dropbox} alt=''></img></li>
          <li className='bt'><img alt='' src={zoom}></img></li>
        </ul>
      </footer>
     </div>
     <article>
      <aside>
          <img className='img1' src={busy} alt=''></img>
          <div>
            <h2>Branding & Design <br/> System</h2>
            <p>Commonly Used In The Graphic,Print & Publishing<br/> Industries For Previewing  Visual Layouts And <br/>Mockups</p>
            <img alt='' id='arrow' src={arrow}></img>
          </div>
        </aside>
        <section>
          <div>
            <h3>Custome & Plugin <br/>Development</h3>
            <p>Commonly Used In The Graphic,Print & Publishing<br/>Industries For Previewing  Visual Layouts And <br/>Mockups</p>
            <img className='img3' src={arrow} alt=''></img>
          </div>
          <img className='img2' src={bs} alt=''></img>
        </section>
      </article>
      <aside>
        <header>
          <p>TESTIMONIALS</p>
          <h4>Read What Others <br/> Have To Say </h4>
        </header>
        <section>
          <div>
            <figure>
              <img src={boy} alt=''></img>
              <figcaption>Andrew Rathore</figcaption>
            </figure>
            <p>Lorem Ipsum Dolor St Amet,Consecteur<br/> Adipiscing Elt,Nunc Ulampores<br/> Scelerqui M,in Malescuada Fell<br/></p>
          </div>
          <div>
          <figure>
              <img src={girl} alt=''></img>
              <figcaption>Vera Duncan</figcaption>
            </figure>
            <p>Lorem Ipsum Dolor St Amet,Consecteur<br/> Adipiscing Elt,Nunc Ulampores<br/> Scelerqui M,in Malescuada Fell<br/></p>
          </div>
          <div>
          <figure>
              <img src={woman} alt=''></img>
              <figcaption>Mark Smith</figcaption>
            </figure>
            <p>Lorem Ipsum Dolor St Amet,Consecteur<br/> Adipiscing Elt,Nunc Ulampores<br/> Scelerqui M,in Malescuada Fell<br/></p>
          </div>
        </section>
        <div className='div'>
          < img src={forme} alt=''></img>
          <h5>Be a part of the <br/>next big thing</h5>
          <p>We work with Brans, Startups, to SMEs.<br/> Colaborate for more impact and growt</p>
          <button>Contact Us</button>
        </div>
      </aside>
      <footer className='foot'>
        <section id='digital'>
          <h6>Digital Agency</h6>
          <p>Buiding Digital Products</p>
          <p>Brands& Experience</p>
        </section>
        <section>
          <h6>Resources</h6>
          <p>Guides</p>
          <p>Blog</p>
          <p>Customer Stories</p>
          <p>Glossery</p>
        </section>
        <section>
          <h6> Company</h6>
          <p>About Us</p>
          <p>Careers</p>
          <p>Partners</p>
          <p>Contact Us</p>
        </section>
        <section>
          <h6> Social Media</h6>
          <p>Linkedin</p>
          <p>Faxcebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </section>
      </footer>
      <p className='pin'>© Matheus. Todos os direitos reservados</p>
  </> 
  );
}

export default App;
