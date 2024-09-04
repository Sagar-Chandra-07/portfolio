import React, { useEffect, useState } from 'react';
import Skills from '../Components/Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';
import Layout from '../Components/AppLayout/Layout.js';
import "./About.css";

const About = () => {
  const [daysDifference, setDaysDifference] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const startLearningDate = new Date('2024-01-01'); // Example date for when learning started
    const differenceInMilliseconds = currentDate - startLearningDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
    setDaysDifference(differenceInDays);
  }, []);

  const months = daysDifference ? Math.floor(daysDifference / 30) : 0;

  return (
    <Layout>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <div>
            <p>
              Hello, I'm <b>Sagar Chandra Kalauni</b>, originally from Uttarakhand (India), currently living in Delhi (India). I'm an aspiring <b>Front-End Developer</b> with a passion for creating interactive and user-friendly web applications. Although I don't have professional experience yet, I have been dedicated to learning and honing my skills for the past <b>{months ? `${months} ${months > 1 ? "months" : "month"}` : "few months"}</b>.
              <br /><br />
            </p>
            <div className='whatIdid'>
              <b>What I've Been Learning</b>
              <ul>
                <li>Building projects using React.js to develop dynamic and responsive user interfaces.</li>
                <li>Integrating RESTful APIs to enhance the functionality of web applications.</li>
                <li>Working on improving my design skills with UI/UX principles to create visually appealing layouts.</li>
                <li>Learning responsive design techniques to ensure websites work well on all devices.</li>
                <li>Exploring best coding practices and continuously improving through self-study and practice.</li>
              </ul>
            </div>
            <p>
              I am eager to learn, grow, and take on new challenges in the field of front-end development. I'm open to internships, freelance projects, or any opportunity where I can contribute and further develop my skills. Please feel free to reach out if you'd like to connect or collaborate. You can find my contact information in the footer below.
              <br /><br />
              Check out my projects to see what I've been working on!
            </p>
          </div>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>My Skillset</h1>
      <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Github' />
        <Skills skill='JavaScript' />
        <Skills skill='Python' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='Java' />
      </div>
    </Layout>
  );
}

export default About;
