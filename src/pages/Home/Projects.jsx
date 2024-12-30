import React from 'react'
import Button from '../../components/Button/Button'

const Projects = () => {
    const  project = [
      {
        id: 1,
        name: 'CoconetDB Windows Desktop Application',
        projectDate: 'Dec 2024 - Present',
        image: 'https://avatars.githubusercontent.com/u/189954645?s=200&v=4',
        desc: 'Developed the CoconetDB Windows Desktop Application, a NoSQL document-oriented database management tool. CoconetDB is the first NoSQL database in South Asia',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 2,
        name: 'CoconutDB Web Interface',
        projectDate: 'Dec 2024 - Present',
        image: 'https://avatars.githubusercontent.com/u/189954645?s=200&v=4',
        desc: 'Developed an innovative web interface for CoconutDB, a NoSQL document-oriented database program that simplifies database management and enhances developer productivity.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 3,
        name: 'TestAPIze - API Development and Testing Tool',
        projectDate: 'Dec 2024 - Present',
        image: '',
        desc: 'TestAPIze is an API testing and development tool designed to streamline the API workflow for developers, similar to Postman. ',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 4,
        name: 'NoSQL Document-Oriented Database Program (In Development) - CoconutDB',
        projectDate: 'Nov 2024 - Present',
        image: 'https://avatars.githubusercontent.com/u/189954645?s=200&v=4',
        desc: 'Currently in its early stages of development, this NoSQL document-oriented database program is designed to provide a flexible and scalable solution for managing structured and semi-structured data.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 5,
        name: 'Setup-Project-MERN-with-MVC – Rapid MERN Stack Project Initialization',
        projectDate: 'Sep 2024 - Present',
        image: 'https://img.icons8.com/?size=80&id=1VuwsQVEpfkq&format=png',
        desc: 'Setup-Project-MERN-with-MVC is an innovative NPM package that allows full-stack developers to create both front-end and back-end environments for MERN stack applications in under 1 minute using a single command.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 6,
        name: 'Login SignUp React – Streamlined Authentication for Developers',
        projectDate: 'May 2024 - Present',
        image: 'https://img.icons8.com/?size=80&id=1VuwsQVEpfkq&format=png',
        desc: 'Login SignUp React is a powerful NPM package designed to help full-stack developers quickly implement login and registration functionalities in their applications.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 7,
        name: 'JKCSS NPM Package',
        projectDate: 'April 2024 - Present',
        image: 'https://avatars.githubusercontent.com/u/139304882?s=200&v=4',
        desc: 'The JKCSS NPM package provides seamless integration of JKCSS into modern web development workflows.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 8,
        name: 'JKReact ICONS – React Icon Framework',
        projectDate: 'April 2024 - Present',
        image: 'https://avatars.githubusercontent.com/u/139304882?s=200&v=4',
        desc: 'JKReact ICONS is a lightweight and versatile icon framework designed for React.js applications.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 8,
        name: 'ReactJKCSS – React Integration for South Asia’s First CSS Framework',
        projectDate: 'April 2024 - Present',
        image: 'https://avatars.githubusercontent.com/u/167443241?s=200&v=4',
        desc: 'ReactJKCSS is a React.js library that seamlessly integrates with JKCSS, providing developers with pre-built, reusable React components powered by the framework’s modular and lightweight architecture.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
      {
        id: 9,
        name: 'South Asia’s First CSS Framework',
        projectDate: 'May 2023 - Present',
        image: 'https://avatars.githubusercontent.com/u/167443241?s=200&v=4',
        desc: 'ReactJKCSS is a React.js library that seamlessly integrates with JKCSS, providing developers with pre-built, reusable React components powered by the framework’s modular and lightweight architecture.',
        moreinfo: '',
        linkedProject: 'https://www.linkedin.com/in/jehanweerasuriya/details/projects/'
      },
    ]
  return (
    <div className='my-4'>
        <h1 className="text-2xl font-semibold text-[#ffc107]">Notable Projects</h1>
        <div className="">
          <div className="md:grid grid-cols-3 gap-3 my-4">
            {
              project.map((item, index) => {
                return(
                  <div className="bg-[#252531] py-4 px-6" key={index}>
                    <center className='py-4'>
                        <img src={item.image} alt="" className='h-24 w-auto rounded-full'/>
                    </center>
                    <div className="text-center">
                      <h1 className="font-semibold text-lg">{item.name}</h1>
                      <p className="text-sm text-[#ffc107] mt-4">{item.projectDate}</p>

                      <div className="py-4">
                          {item.desc}
                      </div>
                      <div className="py-4">
                          <a href={item.linkedProject} target='_blank'>
                            <Button btnvale={'View More'}/>
                          </a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
    
  )
}

export default Projects