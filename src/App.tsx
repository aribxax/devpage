import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import s from './components/styles/About.module.css'
import profilePic from './assets/images/profilepic.jpg'

function App() {
  return (
    <div className="App">

      <Navbar />


      <div className="content">


        <Element name="about" className="section">
          <div className={s.aboutContainer}>
      <div className={s.aboutContent}>
      <img className={s.aboutImage} /* style={{height:'18vh', width:'18vh',borderRadius:'50%'}} */ src={`${profilePic}`}/>
        <h1 className={s.aboutHeader}>Ariel Cunha</h1>
        
        <div className={s.aboutDescription}>
          <p>
            Hello! I'm a passionate coder with experience in web development. I love building
            interactive and user-friendly websites that deliver exceptional experiences to users.
          </p>
          <p>
            Throughout my career, I have worked on various projects using technologies such as
            HTML, CSS, JavaScript, and React. I strive for clean and maintainable code, and I am
            constantly learning and exploring new technologies to expand my skill set.
          </p>
          <p>
            When I'm not coding, you can find me exploring the outdoors, playing guitar, or reading
            up on the latest tech trends. Feel free to reach out to me for any inquiries or
            collaboration opportunities!
          </p>
          
        </div>
        
        
      </div>
      
      
    </div>
        </Element>



        <Element name="projects" className="section">
          <h1>Projects</h1>
          <div className="project-box">
            <h2>Project 1</h2>
            <p>
              This is a description of Project 1. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed ac commodo ante.
            </p>
          </div>
          <div className="project-box">
            <h2>Project 2</h2>
            <p>
              This is a description of Project 2. Ut venenatis, elit id posuere
              tincidunt, risus turpis tristique justo.
            </p>
          </div>
        </Element>
        <Element name="contact" className="section">
          <h1>Contact</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </Element>
      </div>
    </div>
  );
}

export default App;