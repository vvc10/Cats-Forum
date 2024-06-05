import React, { useState } from 'react';
import './CatsCards.css';

const CatsCards = ({ id, url, width, height }) => {
    // State for modal open/close
    const [modalOpen, setModalOpen] = useState(false);

    // Function to open modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setModalOpen(false);
    };
 
    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `cat_${id}.jpg`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='cat-card'>
            {/* Cat posting details */}
            <div className='cat-card-head'>
                <span>📅 ID: {id}</span>
            </div>
            {/* Main cat card section */}
            <div className='cat-card-main-sec'>
                <div className='cat-card-main-sec-head'>
                    {/* Cat image */}
                    <img src={url} alt={`Cat ${id}`} />
                    <div className='ccmshinhead'>
                        <h2>Cat ID: {id}</h2>
                        <p className='head-catdimensions'>Dimensions: {width} x {height}</p>
                    </div>
                </div>
                {/* About Cat section */}
                <div className='cat-card-about-cat'>
               
                    <button className='view-cat-btn' onClick={openModal}>
                        View more
                    </button>
                </div>
            </div>
            {/* Modal for detailed cat description */}
            {modalOpen && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal' onClick={(e) => e.stopPropagation()}>
                        <div className='modal-head'>
                            <label>Cat Description</label>
                            <span className='close' onClick={closeModal}>&times;</span>
                        </div>
                        <div className='modal-content'>
                        <div className='model-cont-abimg'>
                             <h2>Cat ID: {id}</h2>
                            <p>Width: {width}px</p>
                            <p>Height: {height}px</p>
                            <button className='' onClick={downloadImage}>Download</button>
                        </div>
                           
                            <img src={url} alt={`Cat ${id}`} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CatsCards;
