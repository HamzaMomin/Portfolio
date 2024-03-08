import React, { useState } from "react"
import './projects.css';
import Modal from './modal.jsx'
import Hamza2 from '../../assets/Hamza2.png'


const Projects = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (

        <section id="works">
            <h2>My Projects</h2>
            <p>I take pride in paying attention to the smallest details and making sure that my works is pixel perferct.
                My Projects are not limited to the web development, I have made projects in different technologies from web to game development.
            </p>
            <div className="worksImage">

                <img src={Hamza2} alt="" className="workImage" onClick={openModal} />
                <img src={Hamza2} alt="" className="workImage" onClick={openModal} />
                <img src={Hamza2} alt="" className="workImage" onClick={openModal} />
                <img src={Hamza2} alt="" className="workImage" onClick={openModal} />
                <img src={Hamza2} alt="" className="workImage" onClick={openModal} />
                <img src={Hamza2} alt="" className="workImage" onClick={openModal} />

            </div>

            {/* Modal component */}
            {modalOpen && (
                <Modal closeModal={closeModal}>
                    {/* Add content for the modal, such as more images, details, and links */}
                    <img src={Hamza2} alt="" className="modalImage" />
                    <p>Details for the project</p>
                    <a href="#">Project Link</a>
                </Modal>
            )}

        </section>

    )

}

export default Projects;