import React, { useState } from "react";
import './projects.css';
import Modal from './modal.jsx';
import Hamza2 from '../../assets/Hamza2.png';
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.gif'
import Project4 from '../../assets/Project4.gif'
import Project5 from '../../assets/Project5.png'


// Import other project images as needed

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setModalOpen(true);
        setSelectedProject(project);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        { id: 1, image: Project1, name: "Project 1", details: "An Educational Site build in WordPress", link: "#" },
        { id:2, image: Project2, name: "Project 2", details: "A Simple Note taking Web app, build in ReactJS and local storage.", link: "https://github.com/HamzaMomin/mynotesapp" },
        { id:2, image: Project3, name: "Project 3", details: "Final Year Project build in Flutter Web.", link: "https://github.com/HamzaMomin/Real_Estate_Insignia_Admin_Panel_Web" },
        { id:2, image: Project4, name: "Project 4", details: "Final Year Project build in Flutter.", link: "https://github.com/HamzaMomin/Real_Estate_Insignia" },
        { id:2, image: Project5, name: "Project 5", details: "Calculator build in Flutter.", link: "https://github.com/HamzaMomin/Flutter_Calculator" },
        // Add other projects as needed
    ];

    return (
        <section id="works">
            <h2>My Projects</h2>
            <p>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
                My projects are not limited to web development; I have made projects in different technologies from web to game development.
            </p>
            <div className="worksImage">
                {projects.map((project) => (
                    <img
                        key={project.id}
                        src={project.image}
                        alt={project.name}
                        className="workImage"
                        onClick={() => openModal(project)}
                    />
                ))}
            </div>

            {/* Modal component */}
            {modalOpen && (
                <Modal closeModal={closeModal}>
                    {/* Display details for the selected project */}
                    <img src={selectedProject.image} alt={selectedProject.name} className="modalImage" />
                    <p>{selectedProject.details}</p>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">Project Link</a>
                </Modal>
            )}

        </section>
    );
};

export default Projects;
