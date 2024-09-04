import React from 'react';
import ProjectBox from '../Components/ProjectBox';
import TaskManager from '../images/Task.jpg';
import ExpenseManagement from '../images/expense management.jpg';
import SentimentAnalysis from '../images/twitter.jpg';
import MaskDetector from '../images/mask.jpg';
import Layout from '../Components/AppLayout/Layout';


const Projects = () => {
  return (
    <Layout>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TaskManager} projectName="Task Manager" />
        <ProjectBox projectPhoto={ExpenseManagement} projectName="Expenditure Management System" />
        <ProjectBox projectPhoto={MaskDetector} projectName="Mask Detector" />
        <ProjectBox projectPhoto={SentimentAnalysis} projectName="Sentiment Analysis On Twitter Data" />
        
        {/* <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" /> */}
        {/* <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" /> */}
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </Layout>
  )
}

export default Projects