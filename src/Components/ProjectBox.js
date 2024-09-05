import React from 'react';
import { FaGithub, FaStore } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    
    "Expenditure Management SystemDesc": "This project is a simple web-based expense management system. It provides a user interface for tracking personal finances by categorizing income and expenses.",
    "Expenditure Management SystemWebsite": "https://expense-management-lake.vercel.app/",

    "Mask DetectorDesc": "The model was trained using deep learning with hyperparameters tuned using grid search. We evaluated the performance of the model using accuracy, precision, recall, F1-score, confusion matrix, and classification report.",
    "Mask DetectorRepolink": "https://github.com/SagarChandra07/Mask-Detector",

    "Sentiment Analysis On Twitter DataDesc": "Sentiment analysis uses Natural Language Processing (NLP) to make sense of human language, and machine learning to automatically deliver accurate results.",
    "Sentiment Analysis On Twitter DataRepolink": "https://github.com/SagarChandra07/Sentiment-analysis",


    "Task ManagerDesc": "Building a simple Task Management Application that allows users to create, read, update, and delete tasks. ",
    "Task ManagerWebsite": "https://task-manager-ten-ochre.vercel.app/",

    "PortfolioDesc": "It is a personal website built with React.js to showcase your skills, projects, and experience. It features sections like About Me, Projects, and Contact, with responsive design and reusable components for easy customization.",
    "PortfolioWebsite": "https://portfolio-opal-six-77.vercel.app/",

  }


  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        {desc[projectName + 'Repolink'] ?
          <a href={desc[projectName + 'Repolink']} target='_blank' rel='noreferrer'>
            <button className='projectbtn'><FaStore />Repository Link</button>
          </a> : ""}

        {desc[projectName + 'Website'] ?
          <a href={desc[projectName + 'Website']} target='_blank' rel='noreferrer'>
            <button className='projectbtn'><CgFileDocument />Go to Website</button>
          </a> : ''}

      </div>
    </div>
  )
}

export default ProjectBox