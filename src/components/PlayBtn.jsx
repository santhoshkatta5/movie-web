import React, {useState} from 'react'
import './playBtn.css';


import Modal from './Modal';

function PlayBtn({movie}) {
  const [modal, setModel] = useState(false)
  const toggleModal = ()=>{
    setModel(!modal)
  }
  return (
    <>
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
    <a href="#" className="playBtn" onClick={toggleModal}><ion-icon name="play-outline"></ion-icon></a>
    <p>Watch Trailer</p>
    </div>
    {movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal} />}
    </>
  )
}

export default PlayBtn
