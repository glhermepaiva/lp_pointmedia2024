import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/index.module.css'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import ReactLoading from 'react-loading'

export default function LandingPage() {

/***** HAMBURGER MENU  *****/

  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    if (menuOpen == false){
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    } 
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

/***** MODAL GALLERY PIECES  *****/

  const [modal1Open, setModal1Open] = useState(false)

  const openModal1 = () => {
    setModal1Open(true)
  }
  
  const closeModal1 = () => {
    setModal1Open(false)
  }

    const [modal2Open, setModal2Open] = useState(false)

    const openModal2 = () => {
      setModal2Open(true)
    }
  
    const closeModal2 = () => {
      setModal2Open(false)
    }

    const [modal3Open, setModal3Open] = useState(false)

    const openModal3 = () => {
      setModal3Open(true)
    }
  
    const closeModal3 = () => {
      setModal3Open(false)
    }

    const [modal4Open, setModal4Open] = useState(false)

    const openModal4 = () => {
      setModal4Open(true)
    }
  
    const closeModal4 = () => {
      setModal4Open(false)
    }

    const [modal5Open, setModal5Open] = useState(false)

    const openModal5 = () => {
      setModal5Open(true)
    }
  
    const closeModal5 = () => {
      setModal5Open(false)
    }

    const [modal6Open, setModal6Open] = useState(false)

    const openModal6 = () => {
      setModal6Open(true)
    }
  
    const closeModal6 = () => {
      setModal6Open(false)
    }

    const [modal7Open, setModal7Open] = useState(false)

    const openModal7 = () => {
      setModal7Open(true)
    }
  
    const closeModal7 = () => {
      setModal7Open(false)
    }

    const [modal8Open, setModal8Open] = useState(false)

    const openModal8 = () => {
      setModal8Open(true)
    }
  
    const closeModal8 = () => {
      setModal8Open(false)
    }

    const [modal9Open, setModal9Open] = useState(false)

    const openModal9 = () => {
      setModal9Open(true)
    }
  
    const closeModal9 = () => {
      setModal9Open(false)
    }

    const [modal10Open, setModal10Open] = useState(false)

    const openModal10 = () => {
      setModal10Open(true)
    }
  
    const closeModal10 = () => {
      setModal10Open(false)
    }

    const [modal11Open, setModal11Open] = useState(false)

    const openModal11 = () => {
      setModal11Open(true)
    }
  
    const closeModal11 = () => {
      setModal11Open(false)
    }

    const [modal12Open, setModal12Open] = useState(false)

    const openModal12 = () => {
      setModal12Open(true)
    }
  
    const closeModal12 = () => {
      setModal12Open(false)
    }

    const [modal13Open, setModal13Open] = useState(false)

    const openModal13 = () => {
      setModal13Open(true)
    }
  
    const closeModal13 = () => {
      setModal13Open(false)
    }

    const [modal14Open, setModal14Open] = useState(false)

    const openModal14 = () => {
      setModal14Open(true)
    }
  
    const closeModal14 = () => {
      setModal14Open(false)
    }

    const [modal15Open, setModal15Open] = useState(false)

    const openModal15 = () => {
      setModal15Open(true)
    }
  
    const closeModal15 = () => {
      setModal15Open(false)
    }

    const [modal16Open, setModal16Open] = useState(false)

    const openModal16 = () => {
      setModal16Open(true)
    }
  
    const closeModal16 = () => {
      setModal16Open(false)
    }

    const [modal17Open, setModal17Open] = useState(false)

    const openModal17 = () => {
      setModal17Open(true)
    }
  
    const closeModal17 = () => {
      setModal17Open(false)
    }

    const [modal18Open, setModal18Open] = useState(false)

    const openModal18 = () => {
      setModal18Open(true)
    }
  
    const closeModal18 = () => {
      setModal18Open(false)
    }

    const [modal19Open, setModal19Open] = useState(false)

    const openModal19 = () => {
      setModal19Open(true)
    }
  
    const closeModal19 = () => {
      setModal19Open(false)
    }

    const [modal20Open, setModal20Open] = useState(false)

    const openModal20 = () => {
      setModal20Open(true)
    }
  
    const closeModal20 = () => {
      setModal20Open(false)
    }

    const [modal21Open, setModal21Open] = useState(false)

    const openModal21 = () => {
      setModal21Open(true)
    }
  
    const closeModal21 = () => {
      setModal21Open(false)
    }

    const [modal22Open, setModal22Open] = useState(false)

    const openModal22 = () => {
      setModal22Open(true)
    }
  
    const closeModal22 = () => {
      setModal22Open(false)
    }

    const [modal23Open, setModal23Open] = useState(false)

    const openModal23 = () => {
      setModal23Open(true)
    }
  
    const closeModal23 = () => {
      setModal23Open(false)
    }

    const [modal24Open, setModal24Open] = useState(false)

    const openModal24 = () => {
      setModal24Open(true)
    }
  
    const closeModal24 = () => {
      setModal24Open(false)
    }

    const [modal25Open, setModal25Open] = useState(false)

    const openModal25 = () => {
      setModal25Open(true)
    }
  
    const closeModal25 = () => {
      setModal25Open(false)
    }

    const [modal26Open, setModal26Open] = useState(false)

    const openModal26 = () => {
      setModal26Open(true)
    }
  
    const closeModal26 = () => {
      setModal26Open(false)
    }

    const [modal27Open, setModal27Open] = useState(false)

    const openModal27 = () => {
      setModal27Open(true)
    }
  
    const closeModal27 = () => {
      setModal27Open(false)
    }

    const [modal28Open, setModal28Open] = useState(false)

    const openModal28 = () => {
      setModal28Open(true)
    }
  
    const closeModal28 = () => {
      setModal28Open(false)
    }

    const [modal29Open, setModal29Open] = useState(false)

    const openModal29 = () => {
      setModal29Open(true)
    }
  
    const closeModal29 = () => {
      setModal29Open(false)
    }

    const [modal30Open, setModal30Open] = useState(false)

    const openModal30 = () => {
      setModal30Open(true)
    }
  
    const closeModal30 = () => {
      setModal30Open(false)
    }

    const [modal31Open, setModal31Open] = useState(false)

    const openModal31 = () => {
      setModal31Open(true)
    }
  
    const closeModal31 = () => {
      setModal31Open(false)
    }

/***** WINDOW SIZE & CLIENTS CAROUSEL  *****/

const [offsetY, setOffsetY] = useState(0);

const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);

}, [])

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      window.addEventListener("resize", handleResize);
     
      handleResize();
    
      return () => window.removeEventListener("resize", handleResize);

  }, []);

  return windowSize;
}

const size = useWindowSize();

const [clientPage, setClientPage] = useState(0)

const prevPage = () => {
  setClientPage (clientPage - 1)
}

const nextPage = () => {
  setClientPage (clientPage + 1)
}

const backtoFirstPage = () => {
  setClientPage (clientPage == 0)
}

const backtoLastPage = () => {
  setClientPage (clientPage + 6)
}

const backtoLastPageTablet = () => {
  setClientPage (clientPage + 3)
}

function renderObjectSize() {
  /* MOBILE */
  if (size.width < 768 && clientPage == 0){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={backtoLastPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client1} />
          <div className={styles.client2} />
          <div className={styles.client3} />
          <div className={styles.client4} />
          <div className={styles.client5} />
          <div className={styles.client6} />
          <div className={styles.client7} />
          <div className={styles.client8} />
          <div className={styles.client9} />
          <div className={styles.client10} />
          <div className={styles.client11} />
          <div className={styles.client12} />
        </div>
    )
  } if (size.width < 768 && clientPage == 1){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client13} />
          <div className={styles.client14} />
          <div className={styles.client15} />
          <div className={styles.client16} />
          <div className={styles.client17} />
          <div className={styles.client18} />
          <div className={styles.client19} />
          <div className={styles.client20} />
          <div className={styles.client21} />
          <div className={styles.client22} />
          <div className={styles.client23} />
          <div className={styles.client24} />
        </div>
    )
  } if (size.width < 768 && clientPage == 2){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client25} />
          <div className={styles.client26} />
          <div className={styles.client27} />
          <div className={styles.client28} />
          <div className={styles.client29} />
          <div className={styles.client30} />
          <div className={styles.client31} />
          <div className={styles.client32} />
          <div className={styles.client33} />
          <div className={styles.client34} />
          <div className={styles.client35} />
          <div className={styles.client36} />
        </div>
    )
  } if (size.width < 768 && clientPage == 3){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client37} />
          <div className={styles.client38} />
          <div className={styles.client39} />
          <div className={styles.client40} />
          <div className={styles.client41} />
          <div className={styles.client42} />
          <div className={styles.client43} />
          <div className={styles.client44} />
          <div className={styles.client45} />
          <div className={styles.client46} />
          <div className={styles.client47} />
          <div className={styles.client48} />
        </div>
    )
  } if (size.width < 768 && clientPage == 4){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client49} />
          <div className={styles.client50} />
          <div className={styles.client51} />
          <div className={styles.client52} />
          <div className={styles.client53} />
          <div className={styles.client54} />
          <div className={styles.client55} />
          <div className={styles.client56} />
          <div className={styles.client57} />
          <div className={styles.client58} />
          <div className={styles.client59} />
          <div className={styles.client60} />
        </div>
    )
  } if (size.width < 768 && clientPage == 5){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client61} />
          <div className={styles.client62} />
          <div className={styles.client63} />
          <div className={styles.client64} />
          <div className={styles.client65} />
          <div className={styles.client66} />
          <div className={styles.client67} />
          <div className={styles.client68} />
          <div className={styles.client69} />
          <div className={styles.client70} />
          <div className={styles.client71} />
          <div className={styles.client72} />
        </div>
    )
  } if (size.width < 768 && clientPage == 6){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={backtoFirstPage}/>
          </div>
          <div className={styles.client73} />
          <div className={styles.client74} />
          <div className={styles.client75} />
          <div className={styles.client76} />
          <div className={styles.client77} />
          <div className={styles.client78} />
          <div className={styles.client79} />
          <div className={styles.client80} />
          <div className={styles.client81} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
        </div>
    )
  }

  /* TABLET */
  if (size.width < 1200 && clientPage == 0){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={backtoLastPageTablet}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client1} />
          <div className={styles.client2} />
          <div className={styles.client3} />
          <div className={styles.client4} />
          <div className={styles.client5} />
          <div className={styles.client6} />
          <div className={styles.client7} />
          <div className={styles.client8} />
          <div className={styles.client9} />
          <div className={styles.client10} />
          <div className={styles.client11} />
          <div className={styles.client12} />
          <div className={styles.client13} />
          <div className={styles.client14} />
          <div className={styles.client15} />
          <div className={styles.client16} />
          <div className={styles.client17} />
          <div className={styles.client18} />
          <div className={styles.client19} />
          <div className={styles.client20} />
          <div className={styles.client21} />
          <div className={styles.client22} />
          <div className={styles.client23} />
          <div className={styles.client24} />
        </div>
    )
  } if (size.width < 1200 && clientPage == 1){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client25} />
          <div className={styles.client26} />
          <div className={styles.client27} />
          <div className={styles.client28} />
          <div className={styles.client29} />
          <div className={styles.client30} />
          <div className={styles.client31} />
          <div className={styles.client32} />
          <div className={styles.client33} />
          <div className={styles.client34} />
          <div className={styles.client35} />
          <div className={styles.client36} />
          <div className={styles.client37} />
          <div className={styles.client38} />
          <div className={styles.client39} />
          <div className={styles.client40} />
          <div className={styles.client41} />
          <div className={styles.client42} />
          <div className={styles.client43} />
          <div className={styles.client44} />
          <div className={styles.client45} />
          <div className={styles.client46} />
          <div className={styles.client47} />
          <div className={styles.client48} />
        </div>
    )
  } if (size.width < 1200 && clientPage == 2){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client49} />
          <div className={styles.client50} />
          <div className={styles.client51} />
          <div className={styles.client52} />
          <div className={styles.client53} />
          <div className={styles.client54} />
          <div className={styles.client55} />
          <div className={styles.client56} />
          <div className={styles.client57} />
          <div className={styles.client58} />
          <div className={styles.client59} />
          <div className={styles.client60} />
          <div className={styles.client61} />
          <div className={styles.client62} />
          <div className={styles.client63} />
          <div className={styles.client64} />
          <div className={styles.client65} />
          <div className={styles.client66} />
          <div className={styles.client67} />
          <div className={styles.client68} />
          <div className={styles.client69} />
          <div className={styles.client70} />
          <div className={styles.client71} />
          <div className={styles.client72} />
        </div>
    )
  } if (size.width < 1200 && clientPage == 3){
    return (
      <div className={styles.clientsGallery}>
        <div className={styles.clientsArrows}>
          <div className={styles.clientArrowLeft} onClick={prevPage}/>
          <div className={styles.clientArrowRight} onClick={backtoFirstPage}/>
        </div>
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client73} />
          <div className={styles.client74} />
          <div className={styles.client75} />
          <div className={styles.client76} />
          <div className={styles.client77} />
          <div className={styles.client78} />
          <div className={styles.client79} />
          <div className={styles.client80} />
          <div className={styles.client81} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
          <div className={styles.client82} />
        </div>
    )
  }

  /* DESK 1200 */
  if (size.width < 1400 && clientPage == 0){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={backtoLastPageTablet}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client1} />
          <div className={styles.client2} />
          <div className={styles.client3} />
          <div className={styles.client4} />
          <div className={styles.client5} />
          <div className={styles.client6} />
          <div className={styles.client7} />
          <div className={styles.client8} />
          <div className={styles.client9} />
          <div className={styles.client10} />
          <div className={styles.client11} />
          <div className={styles.client12} />
          <div className={styles.client13} />
          <div className={styles.client14} />
          <div className={styles.client15} />
          <div className={styles.client16} />
          <div className={styles.client17} />
          <div className={styles.client18} />
          <div className={styles.client19} />
          <div className={styles.client20} />
          <div className={styles.client21} />
          <div className={styles.client22} />
          <div className={styles.client23} />
          <div className={styles.client24} />
        </div>
    )
  } if (size.width < 1400 && clientPage == 1){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client25} />
          <div className={styles.client26} />
          <div className={styles.client27} />
          <div className={styles.client28} />
          <div className={styles.client29} />
          <div className={styles.client30} />
          <div className={styles.client31} />
          <div className={styles.client32} />
          <div className={styles.client33} />
          <div className={styles.client34} />
          <div className={styles.client35} />
          <div className={styles.client36} />
          <div className={styles.client37} />
          <div className={styles.client38} />
          <div className={styles.client39} />
          <div className={styles.client40} />
          <div className={styles.client41} />
          <div className={styles.client42} />
          <div className={styles.client43} />
          <div className={styles.client44} />
          <div className={styles.client45} />
          <div className={styles.client46} />
          <div className={styles.client47} />
          <div className={styles.client48} />
        </div>
    )
  } if (size.width < 1400 && clientPage == 2){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client49} />
          <div className={styles.client50} />
          <div className={styles.client51} />
          <div className={styles.client52} />
          <div className={styles.client53} />
          <div className={styles.client54} />
          <div className={styles.client55} />
          <div className={styles.client56} />
          <div className={styles.client57} />
          <div className={styles.client58} />
          <div className={styles.client59} />
          <div className={styles.client60} />
          <div className={styles.client61} />
          <div className={styles.client62} />
          <div className={styles.client63} />
          <div className={styles.client64} />
          <div className={styles.client65} />
          <div className={styles.client66} />
          <div className={styles.client67} />
          <div className={styles.client68} />
          <div className={styles.client69} />
          <div className={styles.client70} />
          <div className={styles.client71} />
          <div className={styles.client72} />
        </div>
    )
  } if (size.width < 1400 && clientPage == 3){
    return (
      <>
      <div className={styles.clientsArrowsLastPage1200}>
          <div className={styles.clientArrowLeft} onClick={prevPage}/>
          <div className={styles.clientArrowRight} onClick={backtoFirstPage}/>
      </div>
      <div className={styles.clientsGalleryLastPage1200}>
          <div className={styles.client73} />
          <div className={styles.client74} />
          <div className={styles.client75} />
          <div className={styles.client76} />
          <div className={styles.client77} />
          <div className={styles.client78} />
          <div className={styles.client79} />
          <div className={styles.client80} />
          <div className={styles.client81} />
        </div>
      </>
    )
  }

  /* DESK 1400 */
  if (size.width < 1600 && clientPage == 0){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={backtoLastPageTablet}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client1} />
          <div className={styles.client2} />
          <div className={styles.client3} />
          <div className={styles.client4} />
          <div className={styles.client5} />
          <div className={styles.client6} />
          <div className={styles.client7} />
          <div className={styles.client8} />
          <div className={styles.client9} />
          <div className={styles.client10} />
          <div className={styles.client11} />
          <div className={styles.client12} />
          <div className={styles.client13} />
          <div className={styles.client14} />
          <div className={styles.client15} />
          <div className={styles.client16} />
          <div className={styles.client17} />
          <div className={styles.client18} />
          <div className={styles.client19} />
          <div className={styles.client20} />
          <div className={styles.client21} />
          <div className={styles.client22} />
          <div className={styles.client23} />
          <div className={styles.client24} />
        </div>
    )
  } if (size.width < 1600 && clientPage == 1){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client25} />
          <div className={styles.client26} />
          <div className={styles.client27} />
          <div className={styles.client28} />
          <div className={styles.client29} />
          <div className={styles.client30} />
          <div className={styles.client31} />
          <div className={styles.client32} />
          <div className={styles.client33} />
          <div className={styles.client34} />
          <div className={styles.client35} />
          <div className={styles.client36} />
          <div className={styles.client37} />
          <div className={styles.client38} />
          <div className={styles.client39} />
          <div className={styles.client40} />
          <div className={styles.client41} />
          <div className={styles.client42} />
          <div className={styles.client43} />
          <div className={styles.client44} />
          <div className={styles.client45} />
          <div className={styles.client46} />
          <div className={styles.client47} />
          <div className={styles.client48} />
        </div>
    )
  } if (size.width < 1600 && clientPage == 2){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client49} />
          <div className={styles.client50} />
          <div className={styles.client51} />
          <div className={styles.client52} />
          <div className={styles.client53} />
          <div className={styles.client54} />
          <div className={styles.client55} />
          <div className={styles.client56} />
          <div className={styles.client57} />
          <div className={styles.client58} />
          <div className={styles.client59} />
          <div className={styles.client60} />
          <div className={styles.client61} />
          <div className={styles.client62} />
          <div className={styles.client63} />
          <div className={styles.client64} />
          <div className={styles.client65} />
          <div className={styles.client66} />
          <div className={styles.client67} />
          <div className={styles.client68} />
          <div className={styles.client69} />
          <div className={styles.client70} />
          <div className={styles.client71} />
          <div className={styles.client72} />
        </div>
    )
  } if (size.width < 1600 && clientPage == 3){
    return (
      <>
      <div className={styles.clientsArrowsLastPage1400}>
          <div className={styles.clientArrowLeft} onClick={prevPage}/>
          <div className={styles.clientArrowRight} onClick={backtoFirstPage}/>
      </div>
      <div className={styles.clientsGalleryLastPage1400}>
          <div className={styles.client73} />
          <div className={styles.client74} />
          <div className={styles.client75} />
          <div className={styles.client76} />
          <div className={styles.client77} />
          <div className={styles.client78} />
          <div className={styles.client79} />
          <div className={styles.client80} />
          <div className={styles.client81} />
        </div>
      </>
    )
  }

  /* DESK 1600 */
  if (size.width < 1800 && clientPage == 0){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={backtoLastPageTablet}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client1} />
          <div className={styles.client2} />
          <div className={styles.client3} />
          <div className={styles.client4} />
          <div className={styles.client5} />
          <div className={styles.client6} />
          <div className={styles.client7} />
          <div className={styles.client8} />
          <div className={styles.client9} />
          <div className={styles.client10} />
          <div className={styles.client11} />
          <div className={styles.client12} />
          <div className={styles.client13} />
          <div className={styles.client14} />
          <div className={styles.client15} />
          <div className={styles.client16} />
          <div className={styles.client17} />
          <div className={styles.client18} />
          <div className={styles.client19} />
          <div className={styles.client20} />
          <div className={styles.client21} />
          <div className={styles.client22} />
          <div className={styles.client23} />
          <div className={styles.client24} />
        </div>
    )
  } if (size.width < 1800 && clientPage == 1){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client25} />
          <div className={styles.client26} />
          <div className={styles.client27} />
          <div className={styles.client28} />
          <div className={styles.client29} />
          <div className={styles.client30} />
          <div className={styles.client31} />
          <div className={styles.client32} />
          <div className={styles.client33} />
          <div className={styles.client34} />
          <div className={styles.client35} />
          <div className={styles.client36} />
          <div className={styles.client37} />
          <div className={styles.client38} />
          <div className={styles.client39} />
          <div className={styles.client40} />
          <div className={styles.client41} />
          <div className={styles.client42} />
          <div className={styles.client43} />
          <div className={styles.client44} />
          <div className={styles.client45} />
          <div className={styles.client46} />
          <div className={styles.client47} />
          <div className={styles.client48} />
        </div>
    )
  } if (size.width < 1800 && clientPage == 2){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client49} />
          <div className={styles.client50} />
          <div className={styles.client51} />
          <div className={styles.client52} />
          <div className={styles.client53} />
          <div className={styles.client54} />
          <div className={styles.client55} />
          <div className={styles.client56} />
          <div className={styles.client57} />
          <div className={styles.client58} />
          <div className={styles.client59} />
          <div className={styles.client60} />
          <div className={styles.client61} />
          <div className={styles.client62} />
          <div className={styles.client63} />
          <div className={styles.client64} />
          <div className={styles.client65} />
          <div className={styles.client66} />
          <div className={styles.client67} />
          <div className={styles.client68} />
          <div className={styles.client69} />
          <div className={styles.client70} />
          <div className={styles.client71} />
          <div className={styles.client72} />
        </div>
    )
  } if (size.width < 1800 && clientPage == 3){
    return (
      <>
      <div className={styles.clientsArrowsLastPage1600}>
          <div className={styles.clientArrowLeft} onClick={prevPage}/>
          <div className={styles.clientArrowRight} onClick={backtoFirstPage}/>
      </div>
      <div className={styles.clientsGalleryLastPage1600}>
          <div className={styles.client73} />
          <div className={styles.client74} />
          <div className={styles.client75} />
          <div className={styles.client76} />
          <div className={styles.client77} />
          <div className={styles.client78} />
          <div className={styles.client79} />
          <div className={styles.client80} />
          <div className={styles.client81} />
        </div>
      </>
    )
  }

  /* DESK 1800+ */
  if (size.width >= 1800 && clientPage == 0){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={backtoLastPageTablet}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client1} />
          <div className={styles.client2} />
          <div className={styles.client3} />
          <div className={styles.client4} />
          <div className={styles.client5} />
          <div className={styles.client6} />
          <div className={styles.client7} />
          <div className={styles.client8} />
          <div className={styles.client9} />
          <div className={styles.client10} />
          <div className={styles.client11} />
          <div className={styles.client12} />
          <div className={styles.client13} />
          <div className={styles.client14} />
          <div className={styles.client15} />
          <div className={styles.client16} />
          <div className={styles.client17} />
          <div className={styles.client18} />
          <div className={styles.client19} />
          <div className={styles.client20} />
          <div className={styles.client21} />
          <div className={styles.client22} />
          <div className={styles.client23} />
          <div className={styles.client24} />
        </div>
    )
  } if (size.width >= 1800 && clientPage == 1){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client25} />
          <div className={styles.client26} />
          <div className={styles.client27} />
          <div className={styles.client28} />
          <div className={styles.client29} />
          <div className={styles.client30} />
          <div className={styles.client31} />
          <div className={styles.client32} />
          <div className={styles.client33} />
          <div className={styles.client34} />
          <div className={styles.client35} />
          <div className={styles.client36} />
          <div className={styles.client37} />
          <div className={styles.client38} />
          <div className={styles.client39} />
          <div className={styles.client40} />
          <div className={styles.client41} />
          <div className={styles.client42} />
          <div className={styles.client43} />
          <div className={styles.client44} />
          <div className={styles.client45} />
          <div className={styles.client46} />
          <div className={styles.client47} />
          <div className={styles.client48} />
        </div>
    )
  } if (size.width >= 1800 && clientPage == 2){
    return (
      <div className={styles.clientsGallery}>
          <div className={styles.clientsArrows}>
            <div className={styles.clientArrowLeft} onClick={prevPage}/>
            <div className={styles.clientArrowRight} onClick={nextPage}/>
          </div>
          <div className={styles.client49} />
          <div className={styles.client50} />
          <div className={styles.client51} />
          <div className={styles.client52} />
          <div className={styles.client53} />
          <div className={styles.client54} />
          <div className={styles.client55} />
          <div className={styles.client56} />
          <div className={styles.client57} />
          <div className={styles.client58} />
          <div className={styles.client59} />
          <div className={styles.client60} />
          <div className={styles.client61} />
          <div className={styles.client62} />
          <div className={styles.client63} />
          <div className={styles.client64} />
          <div className={styles.client65} />
          <div className={styles.client66} />
          <div className={styles.client67} />
          <div className={styles.client68} />
          <div className={styles.client69} />
          <div className={styles.client70} />
          <div className={styles.client71} />
          <div className={styles.client72} />
        </div>
    )
  } if (size.width >= 1800 && clientPage == 3){
    return (
      <>
      <div className={styles.clientsArrowsLastPage1800}>
          <div className={styles.clientArrowLeft} onClick={prevPage}/>
          <div className={styles.clientArrowRight} onClick={backtoFirstPage}/>
      </div>
      <div className={styles.clientsGalleryLastPage1800}>
          <div className={styles.client73} />
          <div className={styles.client74} />
          <div className={styles.client75} />
          <div className={styles.client76} />
          <div className={styles.client77} />
          <div className={styles.client78} />
          <div className={styles.client79} />
          <div className={styles.client80} />
          <div className={styles.client81} />
        </div>
      </>
    )
  }
}

/***** CASES *****/

const [displayCase, setDisplayCase] = useState(1)

const advToCase2 = () => {
  setDisplayCase (2)
}

const backToCase1 = () => {
  setDisplayCase (1)
}

const advToCase3 = () => {
  setDisplayCase (3)
}

const backToCase2 = () => {
  setDisplayCase (2)
}

function renderCases() {

  if (displayCase == 1){
    return (
      <div id='cases' className={styles.cases}>
          <div className={styles.casesTitle}>nossos cases_</div>
          <div className={styles.case2Title}>AdOps Ambev</div>
          <div className={styles.arrowRight2} onClick={advToCase2}/>
          <div className={styles.case2Image} />
          <div className={styles.case2logo} />
          <div className={styles.case2Info}>
            <div className={styles.case2Highlights}>
              <div className={styles.case2Subtitle1}>Highlights</div>
              <div className={styles.case2Text1}>• Inicio da operação Global em 2020 <br/><br/>•  Gestão Global de Ad Ops via Adserver Sizmek <br/><br/>•  Zeladoria da taxonomia de mídia Global <br/><br/>• Gestão das subidas das campanhas das agências locais em 70 paises <br/><br/>•  Operação de produção digital com automação <br/><br/>•  Operação de produção de email mkt com automação</div>
            </div>
            <div className={styles.case2Results}>
              <div className={styles.case2Subtitle2}>Resultados</div>
              <div className={styles.case2Text2}>• Redução de SLA de subida de campanha de 1 semana para dois dias <br/><br/>• Desenvolvemos um Sistema de Taxonomia automatizado para as agências <br/><br/>• Criação de dashboard com indicadores operacionais dos países</div>
            </div>
          </div> 
        </div>
    )
  } if (displayCase == 2){
    return (
      <div id='cases' className={styles.cases}>
        <div className={styles.casesTitle}>nossos cases_</div>
        <div className={styles.case1Title}>AdOps Vivo</div>
        <div className={styles.arrowLeft} onClick={backToCase1}/>
        <div className={styles.case1Image} />
        <div className={styles.case1logo} />
        <div className={styles.case1Info}>
          <div className={styles.case1Highlights}>
            <div className={styles.case1Subtitle1}>Highlights</div>
            <div className={styles.case1Text1}>• Inicio da operação em 2019 <br/><br/>• Gestão de Ad Ops via Adserver CM Google <br/><br/>• Zeladoria da taxonomia de mídia Vivo <br/><br/>• Gestão da operação de DCO via Studio Google <br/><br/>• Operação de produção digital com automação <br/><br/>• Operação de produção de email mkt com automação</div>
          </div>
          <div className={styles.case1Results}>
            <div className={styles.case1Subtitle2}>Resultados</div>
            <div className={styles.case1Text2}>• Em 2022 ainda estamos com a operação Vivo CM + DCO (criamos processo com SLA de 2h) <br/><br/>• Desenvolvemos um Sistema de Taxonomia automatizado para as agências que trabalham com Vivo <br/><br/>• Produção digital: media de uma semana para entregar do Pack de banners, reduzimos para horas <br/><br/>• Produção de email mkt: zeramos o backlog de meses em 2 dias <br/><br/>• Implementamos ferramenta de automação de banners no processo da Vivo</div>
          </div>
        </div> 
      </div>
    )
  } 
}

function renderCasesEN() {

  if (displayCase == 1){
    return (
      <div id='cases' className={styles.cases}>
        <div className={styles.casesTitle}>our cases_</div>
        <div className={styles.case1Title}>AdOps Vivo</div>
        <div className={styles.arrowRight2} onClick={advToCase2}/>
        <div className={styles.case1Image} />
        <div className={styles.case1Info}>
          <div className={styles.case1Highlights}>
            <div className={styles.case1Subtitle1}>Highlights</div>
            <div className={styles.case1Text1}>• Start of operation in 2019 <br/><br/>• Ad Ops Management via Adserver CM Google <br/><br/>• Caretaker of Vivo's media taxonomy <br/><br/>• DCO operation management via Google Studio<br/><br/>• Digital production operation with automation <br/><br/>• Email mkt production operation with automation</div>
          </div>
          <div className={styles.case1Results}>
            <div className={styles.case1Subtitle2}>Results</div>
            <div className={styles.case1Text2}>• In 2022 we had Vivo's CM + DCO operation (we created processes with a 2h SLA) <br/><br/>• We have developed an automated Taxonomy System for agencies that work with Vivo <br/><br/>• Digital production: average of one week to deliver the banners Pack, we reduced it to hours <br/><br/>• Email mkt production: we finished the backlog of months in just 2 days <br/><br/>• We implemented a banner automation tool in Vivo's process</div>
          </div>
        </div> 
      </div>
    )
  } if (displayCase == 2){
    return (
      <div id='cases' className={styles.cases}>
          <div className={styles.casesTitle}>our cases_</div>
          <div className={styles.case2Title}>AdOps Ambev</div>
          <div className={styles.arrowLeft} onClick={backToCase1}/>
          <div className={styles.case2Image} />
          <div className={styles.case2Info}>
            <div className={styles.case2Highlights}>
              <div className={styles.case2Subtitle1}>Highlights</div>
              <div className={styles.case2Text1}>• Start of Global operation in 2020 <br/><br/>•  Global Ad Ops Management via Adserver Sizmek <br/><br/>•  Caretaking of the Global Media Taxonomy <br/><br/>• Management of campaign publications for local agencies in 70 countries <br/><br/>•  Digital production operation with automation <br/><br/>•  Email mkt production operation with automation</div>
            </div>
            <div className={styles.case2Results}>
              <div className={styles.case2Subtitle2}>Results</div>
              <div className={styles.case2Text2}>• Reduced campaign publication SLA from 1 week to 2 days <br/><br/>• We developed an automated Taxonomy System for the agencies <br/><br/>• Creation of a dashboard with operational indicators of the countries</div>
            </div>
          </div> 
        </div>
    )
  } 
}

/***** NEWS CAROUSEL *****/

const [newsPage, setNewsPage] = useState(0)

const firstNewsPage = () => {
  setNewsPage (newsPage == 0)
}

const advOnePage = () => {
  setNewsPage (newsPage + 1)
}

const advTwoPages = () => {
  setNewsPage (newsPage + 2)
}

const advThreePages = () => {
  setNewsPage (newsPage + 3)
}

const advFourPages = () => {
  setNewsPage (newsPage + 4)
}

const backOnePage = () => {
  setNewsPage (newsPage - 1)
}

const backTwoPages = () => {
  setNewsPage (newsPage - 2)
}

const backThreePages = () => {
  setNewsPage (newsPage - 3)
}

const backFourPages = () => {
  setNewsPage (newsPage - 4)
}

function renderNews() {
  if (englishActive == true) {

    if (newsPage == 0){
      return (
        <div className={styles.news}>
          <div className={styles.havaianasPicture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.havaianasTag}>
              <div className={styles.havaianasTagText}>Havaianas is POINT MEDIA!</div>
              <div className={styles.havaianasTagLine} />
            </div>
            <div className={styles.havaianasNewsTitle}>We started a new phase in our partnership with Havaianas!</div>
            <div className={styles.havaianasNewsText}>After POINT MEDIA's team outstanding performance handling the online media services for the brazilian sandals brand, we also took over the CRM services for the national and global teams.</div>
              <div className={styles.carouselBullets}>
                <div className={styles.blackBullet} />
                <div className={styles.blueBullet} onClick={advOnePage} />
                <div className={styles.blueBullet} onClick={advTwoPages} />
              </div>
          </div>
        </div>
      )
    } if (newsPage == 1){
      return (
        <div className={styles.news}>
          <div className={styles.veloePicture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.veloeTag}>
              <div className={styles.veloeTagText}>VELOE IS POINT MEDIA!</div>
              <div className={styles.veloeTagLine} />
            </div>
            <div className={styles.veloeNewsTitle}>Veloe has parked at Point Media and is our new client!</div>
            <div className={styles.veloeNewsText}>The responsabilities of developing the whole production and operation of Veloe's digital campaigns are ours now. Let's go together!</div>
            <div className={styles.carouselBullets}>
              <div className={styles.blueBullet} onClick={backOnePage} />
              <div className={styles.blackBullet}  />
              <div className={styles.blueBullet} onClick={advOnePage}/>
            </div>
          </div>
        </div>
      )
    } if (newsPage == 2){
      return (
        <div className={styles.news}>
          <div className={styles.ceaPicture} />
          <div className={styles.newsTextsContainer}>
          <div className={styles.ceaTag}>
              <div className={styles.ceaTagText}>C&#38;A is POINT MEDIA!</div>
              <div className={styles.ceaTagLine} />
            </div>
            <div className={styles.ceaNewsTitle}>C&#38;A is the newest customer to join POINT MEDIA's team</div>
            <div className={styles.ceaNewsText}>Our team took over the digital communications and CRM operations and is already ahead in the production of main campaigns for the giant retailer!</div>
            <div className={styles.carouselBullets}>
              <div className={styles.blueBullet} onClick={backTwoPages} />
              <div className={styles.blueBullet} onClick={backOnePage} />
              <div className={styles.blackBullet}  />
            </div>
          </div>
        </div>
      )
    } 
  } else {
   if (newsPage == 0){
    return (
      <div className={styles.news}>
        <div className={styles.havaianasPicture} />
        <div className={styles.newsTextsContainer}>
          <div className={styles.havaianasTag}>
            <div className={styles.havaianasTagText}>HAVAIANAS É POINT MEDIA!</div>
            <div className={styles.havaianasTagLine} />
          </div>
          <div className={styles.havaianasNewsTitle}>Iniciamos uma nova etapa em nossa parceria com a Havaianas!</div>
          <div className={styles.havaianasNewsText}>Após o ótimo desempenho da equipe POINT MEDIA com os serviços de mídia online para a marca brasileira de sandálias, também assumimos os serviços de CRM para o time global e nacional.</div>
            <div className={styles.carouselBullets}>
              <div className={styles.blackBullet} />
              <div className={styles.blueBullet} onClick={advOnePage} />
              <div className={styles.blueBullet} onClick={advTwoPages} />
          </div>
        </div>
      </div>
    )
  } if (newsPage == 1){
    return (
      <div className={styles.news}>
        <div className={styles.veloePicture} />
        <div className={styles.newsTextsContainer}>
          <div className={styles.veloeTag}>
              <div className={styles.veloeTagText}>VELOE É POINT MEDIA!</div>
              <div className={styles.veloeTagLine} />
            </div>
            <div className={styles.veloeNewsTitle}>A Veloe estacionou na Point Media e é a nossa nova cliente!<br/><br/></div>
            <div className={styles.veloeNewsText}>A responsabilidade de desenvolver toda a produção e operação das campanhas digitais da Veloe agora é nossa. Vamos juntos nessa!<br/><br/></div>
            <div className={styles.carouselBullets}>
              <div className={styles.blueBullet} onClick={backOnePage} />
              <div className={styles.blackBullet}  />
              <div className={styles.blueBullet} onClick={advOnePage}/>
          </div>
        </div>
      </div>
    )
  } if (newsPage == 2){
    return (
      <div className={styles.news}>
        <div className={styles.ceaPicture} />
        <div className={styles.newsTextsContainer}>
          <div className={styles.ceaTag}>
              <div className={styles.ceaTagText}>C&#38;A é POINT MEDIA!</div>
              <div className={styles.ceaTagLine} />
            </div>
            <div className={styles.ceaNewsTitle}>A C&#38;A é a mais nova cliente a fazer parte do time POINT MEDIA<br/><br/></div>
            <div className={styles.ceaNewsText}>Nossa equipe assumiu a operação de comunicação digital e CRM e já está à frente na produção das principais campanhas destes meios da gigante varejista!</div>
            <div className={styles.carouselBullets}>
              <div className={styles.blueBullet} onClick={backTwoPages} />
              <div className={styles.blueBullet} onClick={backOnePage} />
              <div className={styles.blackBullet}  />
          </div>
        </div>
      </div>
    )
  } 
}
}

/***** EXTERNAL LINKS  *****/

  const openWhatsapp = () => {
    window.open('https://web.whatsapp.com/send?phone=5599111112222');
  }

  const openInstagram = () => {
    window.open('https://www.instagram.com/pointmediaoficial/');
  }

  const openLinkedin = () => {
    window.open('https://br.linkedin.com/company/point-media-oficial');
  }

  const openFacebook = () => {
    window.open('https://www.facebook.com/Point-Media-2496784783713500/');
  }

  const openReanimate = () => {
    window.open('https://reanimate.pointmedia.com.br/');
  }

  const openCompliance = () => {
    window.open('https://reanimate-modulos.s3.sa-east-1.amazonaws.com/compliance/COMPLIANCE_POINTMEDIA.pdf');
  }

/***** ANCHOR LINKS  *****/

  const anchorHeader = () => {
    setMenuOpen(false)
    window.location.replace("/#header")
  }

  const anchorAbout = () => {
    setMenuOpen(false)
    window.location.replace("/#about")
  }

  const anchorTeam = () => {
    setMenuOpen(false)
    window.location.replace("/#team")
  }

  const anchorWwd = () => {
    setMenuOpen(false)
    window.location.replace("/#wwd")
  }

  const anchorHwd = () => {
    setMenuOpen(false)
    window.location.replace("/#hwd")
  }

  const anchorPrevWorks = () => {
    setMenuOpen(false)
    window.location.replace("/#prevworks")
  }

  const anchorCases = () => {
    setMenuOpen(false)
    window.location.replace("/#cases")
  }

  const anchorClients = () => {
    setMenuOpen(false)
    window.location.replace("/#clients")
  }

  const anchorReanimate = () => {
    setMenuOpen(false)
    window.location.replace("/#reanimate")
  }

  const anchorContact = () => {
    setMenuOpen(false)
    window.location.replace("/#contact")
  }

/***** EMAIL VALIDATIONS  *****/

  const schema = yup.object().shape({
    subject: yup.string().required('Algum assunto deve ser selecionado'),
    name: yup.string().required('Nome não pode estar em branco'),
    email: yup.string().email('Endereço de email inválido').required('Email não pode estar em branco'),
    phone: yup.number().min(11, 'O telefone precisa ter no mínimo 11 números').required('Telefone não pode estar em branco'),
    message: yup.string().min(3, 'A mensagem deve ter no mínimo 3 caracteres').max(300, 'A mensagem pode ter no máximo 300 caracteres').required('Mensagem não pode estar em branco')
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    let formData = {
      subject: e.target[0].value,
      name: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    }

    const isValid = await schema.isValid(formData);

    if (isValid && formData.subject == '1') {
        emailjs.sendForm('service_ibuddku', 'template_comercial', e.target, 'user_qksKqi9BtojdtprKYCtue')

        .then((result) => {
            console.log(result);
            alert("Sucesso! Logo entraremos em contato!")
            window.location.href = "/?uri=";
        }, (error) => {
            console.log(error);
            setLoading(false)
        });

    } else if (isValid && formData.subject == '2') {
      emailjs.sendForm('service_ibuddku', 'template_atendimento', e.target, 'user_qksKqi9BtojdtprKYCtue')

      .then((result) => {
          console.log(result);
          alert("Sucesso! Logo entraremos em contato!")
          window.location.href = "/?uri=";
      }, (error) => {
          console.log(error);
          setLoading(false)
      });

    } else if (isValid && formData.subject == '3') {
      emailjs.sendForm('service_ibuddku', 'template_financeiro', e.target, 'user_qksKqi9BtojdtprKYCtue')

      .then((result) => {
          console.log(result);
          alert("Sucesso! Logo entraremos em contato!")
          window.location.href = "/?uri=";
      }, (error) => {
          console.log(error);
          setLoading(false)
      });

    } else {
        alert("Por favor garanta que um assunto foi selecionado e os campos foram preenchidos corretamente e tente novamente.")
        setLoading(false)
      }
  }

/***** CASES CAROUSSEL  *****/

  const [defaultCase, setDefaultCase] = useState(true)

  const nextCase = () => {
    setDefaultCase(false)
  }

  const prevCase = () => {
    setDefaultCase(true)
  }

/***** CHANGE LANGUAGE  *****/

  const [englishActive, setEnglishActive] = useState(false);

    function changeBR () {
       setEnglishActive(false)
    }

    function changeEN () {
        setEnglishActive(true)
     }


  
/***** RETURN *****/

  return (
    <div className={styles.page}>
      <Head>
        <title>POINT MEDIA</title>
        <meta name='description' content='Motion é o que realmente nos move' />
      </Head>
      
      <div id='header' className={styles.header}>
        {/* <div>
          <div className={styles.langFlagToBR} onClick={changeBR} />
          <div className={styles.langFlagToEN} onClick={changeEN} />
        </div> */}
        <div className={styles.logoPoint} />
        <div className={styles.hamburger} onClick={openMenu}/>
      </div>

      {englishActive ?

      <div>
      {menuOpen ? <div className={styles.hoverMenu}>
        <div className={styles.menuLinks}>
        <div className={styles.menuClose} onClick={closeMenu}/>
          <div className={styles.anchorAbout} onClick={anchorAbout}>POINT</div>
          <div className={styles.anchorTeam} onClick={anchorTeam}>our team</div>
          <div className={styles.anchorWwd} onClick={anchorWwd}>what we do</div>
          <div className={styles.anchorHwd} onClick={anchorHwd}>how we do</div>
          <div className={styles.anchorPrevWorks} onClick={anchorPrevWorks}>what we already did</div>
          <div className={styles.anchorCases} onClick={anchorCases}>our cases</div>
          <div className={styles.anchorClients} onClick={anchorClients}>our customers</div>
          <div className={styles.anchorReanimate} onClick={anchorReanimate}>re.animate</div>
          <div className={styles.anchorContact} onClick={anchorContact}>contact us</div>
        </div>
        <div className={styles.menuSocials}>
          <div className={styles.instagram} onClick={openInstagram}/>
          <div className={styles.linkedin} onClick={openLinkedin}/>
          <div className={styles.facebook} onClick={openFacebook}/>
        </div>
        <div className={styles.menuLogo} onClick={anchorHeader}></div>
      </div> : <div className={styles.invisMenu} />}

      <div>
        {renderNews()}
      </div>

      <div id='about' className={styles.about}>
        <div className={styles.aboutPoint}>POINT_</div>
        <div className={styles.aboutTitle}>We are inspiration, creativity and a lot of movement. We never stop and motion is what truly moves us.</div>
        <div className={styles.aboutImage}>
          <div className={styles.astronautPoint} />
          <div className={styles.astronautGuy} />
          <div className={styles.astronautBlack} />
          <div className={styles.astronautPink} />
          <div className={styles.astronautBlue} />
        </div>
        <div className={styles.aboutText}>Since 2017 we have followed the dynamic pace of online media, ad ops and ad server, we are specialists in the large-scale production of digital assets, using motion design in HTML5 display banners and videos.<br/><br/> We develop customized projects with DCO, XML and Feeds technologies, inserting interactivity resources to enhance user engagement and the results of digital campaigns.</div>
        <div className={styles.aboutLine} />
        <div className={styles.aboutOffice} />
        <div className={styles.blackBg}>
          <div className={styles.owners}>
            <div className={styles.aboutMychel}>
              <div className={styles.aboutMychelPicture} />
              <div className={styles.aboutMychelName}>Mychel Martins</div>
              <div className={styles.aboutMychelJob}>Founder Partner</div>
            </div>
            <div className={styles.aboutThiago}>
              <div className={styles.aboutThiagoPicture} />
              <div className={styles.aboutThiagoName}>Thiago Ianni</div>
              <div className={styles.aboutThiagoJob}>Founder Partner</div>
            </div>
          </div>
          <div className={styles.aboutText2}>Created by <b>Mychel Martins</b> and <b>Thiago Ianni</b>, <b>POINT MEDIA</b> operates with a focus on technology, with fullstack developers creating integrated solutions that facilitate the monitoring of online campaigns on different platforms.</div>
          <div className={styles.aboutTitle2} style={{marginTop: '120px'}}>This makes the operational work faster and minimizes measurement errors.</div>
        </div>
      </div>

      <div className={styles.team}>
        <div className={styles.teamArt}></div>
        <div id='team' className={styles.teamTitle}>our team_</div>
        <div className={styles.teamText}>We gathered a team of digital market beasts with extensive experience and passages through large digital companies.</div>
        <div className={styles.teamPictures}>
          <div className={styles.Priscila}>
            <div className={styles.PriscilaPicture} />
            <div className={styles.PriscilaName}>Priscila Michelin</div>
            <div className={styles.PriscilaJob} style={{marginRight: '20px'}}>Legal</div>
          </div>
          <div className={styles.Will}>
            <div className={styles.WillPicture} />
            <div className={styles.WillName}>William</div>
            <div className={styles.WillJob}>Head of Production</div>
          </div>
          <div className={styles.Mariana}>
            <div className={styles.MarianaPicture} />
            <div className={styles.MarianaName}>Mariana</div>
            <div className={styles.MarianaJob}>Head of Operations</div>
          </div>
          <div className={styles.Louro}>
            <div className={styles.LouroPicture} />
            <div className={styles.LouroName}>Leonardo</div>
            <div className={styles.LouroJob}>Head of Technology</div>
          </div>
          <div className={styles.Robson}>
            <div className={styles.RobsonPicture} />
            <div className={styles.RobsonName}>Robson</div>
            <div className={styles.RobsonJob}>Head of Media</div>
          </div>
          <div className={styles.Tato}>
            <div className={styles.TatoPicture} />
            <div className={styles.TatoName}>Anderson</div>
            <div className={styles.TatoJob}>Head of <br/>E-mail MKT</div>
          </div>
          <div className={styles.Danielle}>
            <div className={styles.DaniellePicture} />
            <div className={styles.DanielleName}>Danielle</div>
            <div className={styles.DanielleJob}>Head of Financial</div>
          </div>
        </div>
      </div>
      
      <div id='wwd' className={styles.wwd}>
        <div className={styles.wwdAlien}></div>
        <div className={styles.wwdTitle}>what we do_</div>
        <div className={styles.wwdSubtitle}>We go from creation to automation projects for media and production. </div>
        <div className={styles.wwdWorks}>
          <div className={styles.wwdWork1}>
            <div className={styles.wwd1image} />
            <div className={styles.wwd1text} style={{width: '200px'}}>Creation and design (moodboard and kv + motion design);</div>
          </div>
          <div className={styles.wwdWork2}>
            <div className={styles.wwd2image} />
            <div className={styles.wwd2text}>Production and deployment of digital banners;</div>
          </div>
          <div className={styles.wwdWork3}>
            <div className={styles.wwd3image} />
            <div className={styles.wwd3text}>DCO Projects for production optimization;</div>
          </div>
          <div className={styles.wwdWork4}>
            <div className={styles.wwd4image} />
            <div className={styles.wwd4text}>Media HUB for performance and Adserver management;</div>
          </div>
          <div className={styles.wwdWork5}>
            <div className={styles.wwd5image} />
            <div className={styles.wwd5text}>Automation projects for media and production.</div>
          </div>
        </div>
        <div className={styles.wwdText}>We create performance Hubs for agencies and direct customers, where we operate Programmatic Media, SEM, Social, Mobile, WebTV and we can link the media operation with our production team, creating and deploying HTML5 banners, videos and static pieces so that the operational process of media flow in a unified way and gain momentum in campaign publications.</div>
      </div>

      <div id='hwd' className={styles.hwd}>
        <div className={styles.hwdBalls} style={{marginTop: '25px'}}/>
        <div className={styles.hwdTitle}>how we do_</div>
        <div className={styles.hwdCircles}>
          <div className={styles.hwdcPinkText1}>
              <div className={styles.cpinkText1}>KV creation + master piece</div>
              <div className={styles.cpinkText2}>Replication</div>
              <div className={styles.cpinkText3}>Motion design</div>
            </div>
            <div className={styles.hwdcPinkText2}>
              <div className={styles.cpinkText1}>Media planning</div>
              <div className={styles.cpinkText2}>Tactical plan</div>
              <div className={styles.cpinkText3}>Campaign configuration</div>
            </div>
            <div className={styles.hwdcPinkText3} style={{marginLeft: '40px'}}>
              <div className={styles.cpinkText1}>Follow-up</div>
              <div className={styles.cpinkText2}>Optimization</div>
              <div className={styles.cpinkText3}>Daily status</div>
            </div>
            <div className={styles.hwdcPinkText4}>
              <div className={styles.cpinkText1}>Financial checking</div>
              <div className={styles.cpinkText2}>Report</div>
              <div className={styles.cpinkText3}>Under-Over</div>
            </div>
            <div className={styles.hwdcPinkText5}>
              <div className={styles.cpinkText1}>KPIs</div>
              <div className={styles.cpinkText2}>Metrics</div>
              <div className={styles.cpinkText3}>Final report</div>
            </div>
            <div className={styles.hwdcBlueText1}>
              <div className={styles.cblueText1}>Production</div>
              <div className={styles.cblueText2}>Pre-campaign</div>
            </div>
            <div className={styles.hwdcBlueText2}>
              <div className={styles.cblueText1}>Media</div>
              <div className={styles.cblueText2}>Pre-campaign</div>
            </div>
            <div className={styles.hwdcBlueText3}>
              <div className={styles.cblueText1}>Media</div>
              <div className={styles.cblueText2}>Free campaign</div>
            </div>
            <div className={styles.hwdcBlueText4}>
              <div className={styles.cblueText1}>Control</div>
              <div className={styles.cblueText2}>Free campaign</div>
            </div>
            <div className={styles.hwdcBlueText5}>
              <div className={styles.cblueText1}>Resulting data</div>
              <div className={styles.cblueText2}>Post-campaign</div>
            </div>
        </div>
        <div className={styles.hwdWhiteBg}>
          <div className={styles.hwdwBgLight}>
            <div className={styles.hwdLightImage} />
            <div className={styles.hwdLightText}>Agency</div>
          </div>
          <div className={styles.hwdwBgLogo} />
          <div className={styles.hwdwBgMegaphone}>
            <div className={styles.hwdMegaphoneImage} />
            <div className={styles.hwdMegaphoneText}>Vehicles</div>
          </div>
        </div>
      </div>

      {modal1Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal1} />
          <iframe className={styles.iframe1} src="/01.html" />
        </div> : null}

      {modal2Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal2} />
          <iframe className={styles.iframe2} src="/02.html" scrolling='no' />
        </div> : null}

      {modal3Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal3} />
          <iframe className={styles.iframe3} src="/03.html" />
        </div> : null}

      {modal4Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal4} />
          <video className={styles.video04} controls autoPlay muted>
            <source src="/04.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal5Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal5} />
          <iframe className={styles.iframe5} src="/05.html" />
        </div> : null}

        {modal6Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal6} />
          <video className={styles.video06} controls autoPlay muted>
            <source src="/06.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal7Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal7} />
          <video className={styles.video07} controls autoPlay muted>
            <source src="/07.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal8Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal8} />
          <video className={styles.video08} controls autoPlay muted>
            <source src="/08.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal9Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal9} />
          <iframe className={styles.iframe9} src="/09.html" />
        </div> : null}

        {modal10Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal10} />
          <video className={styles.video10} controls autoPlay muted>
            <source src="/10.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal11Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal11} />
          <iframe className={styles.iframe11} src="/11.html" />
        </div> : null}

        {modal12Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal12} />
          <iframe className={styles.iframe12} src="/12.html" />
        </div> : null}

        {modal13Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal13} />
          <iframe className={styles.iframe13} src="/13.html" />
        </div> : null}

        {modal14Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal14} />
          <iframe className={styles.iframe14} src="/14.html" />
        </div> : null}

        {modal15Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal15} />
          <iframe className={styles.iframe15} src="/15.html" />
        </div> : null}

        {modal16Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal16} />
          <video className={styles.video16} controls autoPlay muted>
            <source src="/16.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal17Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal17} />
          <iframe className={styles.iframe17} src="/17.html" />
        </div> : null}

        {modal18Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal18} />
          <video className={styles.video18} controls autoPlay muted>
            <source src="/18.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal19Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal19} />
          <iframe className={styles.iframe19} src="/19.html" />
        </div> : null}

        {modal20Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal20} />
          <iframe className={styles.iframe20} src="/20.html" />
        </div> : null}

        {modal21Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal21} />
          <iframe className={styles.iframe21} src="/21.html" />
        </div> : null}

        {modal22Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal22} />
          <iframe className={styles.iframe22} src="/22.html" />
        </div> : null}

        {modal23Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal23} />
          <iframe className={styles.iframe23} src="/23.html" />
        </div> : null}

        {modal24Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal24} />
          <iframe className={styles.iframe24} src="/24.html" />
        </div> : null}

        {modal25Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal25} />
          <iframe className={styles.iframe25} src="/25.html" />
        </div> : null}

        {modal26Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal26} />
          <iframe className={styles.iframe26} src="/26.html" />
        </div> : null}

        {modal27Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal27} />
          <iframe className={styles.iframe27} src="/27.html" />
        </div> : null}

        {modal28Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal28} />
          <video className={styles.video28} controls autoPlay muted>
            <source src="/28.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal29Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal29} />
          <iframe className={styles.iframe29} src="/29.html" />
        </div> : null}

        {modal30Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal30} />
          <iframe className={styles.iframe30} src="/30.html" />
        </div> : null}

        {modal31Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal31} />
          <iframe className={styles.iframe31} src="/31.html" />
        </div> : null}

      <div id='prevworks' className={styles.previousWorks}>
        <div className={styles.pwArt}>
          <div className={styles.camera} />
          <div className={styles.drip} />
          <div className={styles.cloud} />
          <div className={styles.cameraBalls}>
            <div className={styles.blueBall} />
            <div className={styles.redBall} />
            <div className={styles.pinkBall} />
          </div>
        </div>
        <div className={styles.pwTitle}>what we already did_</div>
        <div className={styles.pwGallery}>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery1} onClick={openModal1}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery2} onClick={openModal2}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery3} onClick={openModal3}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery4} onClick={openModal4}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery5} onClick={openModal5}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery6} onClick={openModal6}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery7} onClick={openModal7}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery8} onClick={openModal8}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery9} onClick={openModal9}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery10} onClick={openModal10}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery11} onClick={openModal11}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery12} onClick={openModal12}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery13} onClick={openModal13}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery14} onClick={openModal14}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery15} onClick={openModal15}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery16} onClick={openModal16}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery17} onClick={openModal17}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery18} onClick={openModal18}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery19} onClick={openModal19}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery20} onClick={openModal20}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery21} onClick={openModal21}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery22} onClick={openModal22}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery23} onClick={openModal23}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery24} onClick={openModal24}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery25} onClick={openModal25}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery26} onClick={openModal26}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery27} onClick={openModal27}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery28} onClick={openModal28}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery29} onClick={openModal29}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery30} onClick={openModal30}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery31} onClick={openModal31}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery32}/>
          </div>
        </div>
      </div>

      <div>
        {renderCasesEN()}
      </div>

      <div id='clients' className={styles.clients}>
        <div className={styles.clientsTitle}>our customers_</div>
        <div className={styles.clientsArt}>
          <div className={styles.clientBG} /></div>
        {renderObjectSize()}
      </div>

      <div id='reanimate' className={styles.reanimate}>
        <div className={styles.reanimateLogo}/>
        <div className={styles.reanimateText1}>Re.animate is a POINT MEDIA Startup that we use in our production operation to deploy static banners, videos, html5 with motion and email marketing.</div>
        <div className={styles.reanimateText2}>• Software with public deed;<br/><br/>• Code patented at the INPI;<br/><br/>• Platform validated by important operations and with high market potential;<br/><br/>• Global scale.</div>
        <div className={styles.reanimateCards}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>It has never been so easy to create animated banners, from the KV (psd) you can animate the master pieces in HTML5 without needing to know CSS or Java Script code.</div>
          </div>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>The perfect format for your needs. Unfold the master piece, animated by the first module, into different formats and media specifications: Vertical, horizontal, square and mobile.</div>
          </div>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Having many products and offers to promote is no longer a headache. If you have many formats to promote on social networks and displays, with this module you can create several variations of dynamic content in an animated template using your your KV.</div>
          </div>
          <div className={styles.reanimateAM}>
            <div className={styles.reanimateAMlogo}/>
            <div className={styles.reanimateAMtext}>Your operation way more agile with a tool that allows the optimized production of e-mail marketing through the use of customized components and templates that embrace the creation.</div>
          </div>
          <div className={styles.reanimateTM}>
            <div className={styles.reanimateTMlogo}/>
            <div className={styles.reanimateTMtext}>Convert HTML banners to GIF or MP4 in just seconds. No need for unfolding or a motion designer specialized in After Effects.</div>
          </div>
        </div>
        <div className={styles.reanimateBalls}/>
        <button className={styles.reanimateButton} onClick={openReanimate}>get to know &gt;</button>
      </div>

      <div id='contact' className={styles.contact}>
        <div className={styles.contactArt}></div>
        <div className={styles.contactTitle}>contact us_</div>
        <div className={styles.contactText}>Bring your brand to a team of talents that grows with each new project.</div>
        {loading ? <div className={styles.formLoading}><ReactLoading type={"spinningBubbles"} color={"#EB6099"} height={"20%"} width={"20%"}/></div> :
        <form className={styles.contactForm} onSubmit={onSubmit}>
          <select className={styles.formSubject} type="text" name="subject" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled hidden>Choose a subject</option>
            <option value="1">Commercial</option>
            <option value="2">Projects</option>
            <option value="3">Administration/Financial</option>
          </select>
          <input className={styles.formName} type="text" name="name" placeholder="Name"></input>
          <input className={styles.formEmail} type="text" name="email" placeholder="Email"></input>
          <input className={styles.formPhone} type="text" name="phone" placeholder="Phone"></input>
          <textarea className={styles.formMessage} type="textarea" name="message" placeholder="Leave your message here..."></textarea>
          <button className={styles.contactButton}>send &gt;</button>
        </form>}
      </div>

      <div className={styles.footer}>
        <div className={styles.footerLinks}>
        <div className={styles.anchorAbout} onClick={anchorAbout}>POINT</div>
          <div className={styles.anchorTeam} onClick={anchorTeam}>our team</div>
          <div className={styles.anchorWwd} onClick={anchorWwd}>what we do</div>
          <div className={styles.anchorHwd} onClick={anchorHwd}>how we do</div>
          <div className={styles.anchorPrevWorks} onClick={anchorPrevWorks}>what we already did</div>
          <div className={styles.anchorCases} onClick={anchorCases}>our cases</div>
          <div className={styles.anchorClients} onClick={anchorClients}>our customers</div>
          <div className={styles.anchorReanimate} onClick={anchorReanimate}>re.animate</div>
          <div className={styles.anchorContact} onClick={anchorContact}>contact us</div>
        </div>
        <div className={styles.footerLogo} onClick={anchorHeader} />
        <div className={styles.footerSocials}>
          <div className={styles.whatsapp} onClick={openWhatsapp}></div>
          <div className={styles.instagram} onClick={openInstagram}></div>
          <div className={styles.linkedin} onClick={openLinkedin}></div>
          <div className={styles.facebook} onClick={openFacebook}></div>
        </div>
        <button className={styles.complianceButton} onClick={openCompliance}>compliance &gt;</button>
        <div className={styles.footerLocation}>
          <div className={styles.address}>Vila Madalena - São Paulo - SP - Brazil</div>
        </div>
        <div className={styles.footerCopyright}>© pointmedia 2022</div>
      </div>
    </div>

    :

      <div>
      {menuOpen ? <div className={styles.hoverMenu}>
        <div className={styles.menuLinks}>
        <div className={styles.menuClose} onClick={closeMenu}/>
          <div className={styles.anchorAbout} onClick={anchorAbout}>a POINT</div>
          <div className={styles.anchorTeam} onClick={anchorTeam}>nosso time</div>
          <div className={styles.anchorWwd} onClick={anchorWwd}>o que a gente faz</div>
          <div className={styles.anchorHwd} onClick={anchorHwd}>como a gente faz</div>
          <div className={styles.anchorPrevWorks} onClick={anchorPrevWorks}>o que a gente já fez</div>
          <div className={styles.anchorCases} onClick={anchorCases}>nossos cases</div>
          <div className={styles.anchorClients} onClick={anchorClients}>clientes atendidos</div>
          <div className={styles.anchorReanimate} onClick={anchorReanimate}>re.animate</div>
          <div className={styles.anchorContact} onClick={anchorContact}>contato</div>
        </div>
        <div className={styles.menuSocials}>
          <div className={styles.whatsapp} onClick={openWhatsapp} />
          <div className={styles.instagram} onClick={openInstagram}/>
          <div className={styles.linkedin} onClick={openLinkedin}/>
          <div className={styles.facebook} onClick={openFacebook}/>
        </div>
        <div className={styles.menuLogo} onClick={anchorHeader}></div>
      </div> : <div className={styles.invisMenu} />}

      <video className={styles.demoReelVideo} autoPlay muted loop>
        <source src="/demoreel.mp4" type="video/mp4" />
      </video>

      <div>
        {renderNews()}
      </div>
      
      <div id='about' className={styles.about}>
        <div className={styles.aboutPoint}>a POINT_</div>
        <div className={styles.aboutTitle}>Onde a inspiração ganha vida e o movimento nunca para!</div>
        <div className={styles.aboutImage} />
        <div className={styles.aboutText}>
          Somos uma equipe apaixonada por criatividade e movimento. Desde 2017, estamos imersos no universo dinâmico da mídia online, ad ops e ad server. Somos especialistas na produção de campanhas High Scale Media, que ganham vida através do motion design, sejam eles banners display HTML5 ou vídeos envolventes.<br/><br/>
          Aqui na POINT_, somos movidos pela constante busca por inovação. Desenvolvemos projetos customizados utilizando tecnologias avançadas, como DCO, XML e Feeds, para criar experiências únicas e interativas. Queremos potencializar o engajamento dos usuários e impulsionar os resultados das campanhas digitais.<br/><br/>
          Seja qual for o desafio, estamos prontos para torná-lo realidade. Nossa equipe está sempre em movimento, em busca das soluções mais criativas e eficientes. Junte-se a nós nessa jornada e descubra como a POINT_ pode transformar sua presença digital em algo verdadeiramente extraordinário.
        </div>
        <div className={styles.aboutLine} />
        <div className={styles.aboutOffice} />
        <div className={styles.blackBg}>
          <div className={styles.owners}>
            <div className={styles.aboutMychel}>
              <div className={styles.aboutMychelPicture} />
              <div className={styles.aboutMychelBG} />
              <div className={styles.aboutMychelName}>Mychel Martins</div>
              <div className={styles.aboutMychelJob}>CEO</div>
            </div>
            <div className={styles.aboutThiago}>
              <div className={styles.aboutThiagoPicture} />
              <div className={styles.aboutThiagoBG} />
              <div className={styles.aboutThiagoName}>Thiago Ianni</div>
              <div className={styles.aboutThiagoJob}>CBO</div>
            </div>
          </div>
          <div className={styles.ownersTexts}>
            <div className={styles.aboutText2}>
              Fundada por <b>Mychel Martins</b> e <b>Thiago Ianni</b> e com um time de programadores fullstack altamente talentosos, a POINT MEDIA une tecnologia e criatividade para criar integrações de soluções surpreendentes que simplificam o acompanhamento das suas campanhas online em diversas plataformas.<br/><br/>
              Imagine ter o poder de agilizar o trabalho operacional e reduzir ao mínimo os erros de mensuração. Com a POINT MEDIA, essa visão se torna realidade. 
            </div>
            <div className={styles.aboutTitle2}>Com uma abordagem focada no futuro, nós estamos transformando o panorama da publicidade digital. Não importa qual seja a plataforma que você escolha para promover sua marca, estamos prontos para integrá-la ao nosso sistema e otimizar cada etapa do processo.</div>
          </div>
        </div>
      </div>

      <div className={styles.team}>
        <div className={styles.teamArt}></div>
        <div id='team' className={styles.teamTitle}>nosso time_</div>
        <div className={styles.teamText}>Montamos um time excepcional de especialistas do mercado digital, com uma vasta experiência e um histórico impressionante em grandes empresas do setor.</div>
        <div className={styles.teamPictures}>
          <div className={styles.Priscila}>
            <div className={styles.PriscilaPicture} />
            <div className={styles.PriscilaName}>Priscila Michelin</div>
            <div className={styles.PriscilaJob}>Jurídico</div>
          </div>
          <div className={styles.Will}>
            <div className={styles.WillPicture} />
            <div className={styles.WillName}>William</div>
            <div className={styles.WillJob}>Head de Produção</div>
          </div>
          <div className={styles.Mariana}>
            <div className={styles.MarianaPicture} />
            <div className={styles.MarianaName}>Mariana</div>
            <div className={styles.MarianaJob}>Head de Operações</div>
          </div>
          <div className={styles.Louro}>
            <div className={styles.LouroPicture} />
            <div className={styles.LouroName}>Leonardo</div>
            <div className={styles.LouroJob}>Head de Tecnologia</div>
          </div>
          <div className={styles.Robson}>
            <div className={styles.RobsonPicture} />
            <div className={styles.RobsonName}>Robson</div>
            <div className={styles.RobsonJob}>Head de Mídia</div>
          </div>
          <div className={styles.Tato}>
            <div className={styles.TatoPicture} />
            <div className={styles.TatoName}>Anderson</div>
            <div className={styles.TatoJob}>Head de <br/>E-mail MKT</div>
          </div>
          <div className={styles.Danielle}>
            <div className={styles.DaniellePicture} />
            <div className={styles.DanielleName}>Danielle</div>
            <div className={styles.DanielleJob}>Head do Financeiro</div>
          </div>
        </div>
      </div>
      
      <div id='wwd' className={styles.wwd}>
        <div className={styles.pinkBalls}></div>
        <div className={styles.wwdTitle}>o que a gente faz_</div>
        <div className={styles.wwdSubtitle}>Vamos da criação ao projeto de automação para mídia e produção. </div>
        <div className={styles.wwdText}>Criamos Hubs de performance para agências e clientes diretos, nos quais oferecemos uma ampla gama de serviços de marketing digital. Utilizando a Mídia Programática, SEM, Social Media, Mobile e WebTV, trabalhamos em sinergia para impulsionar a performance das campanhas. Além disso, integramos nossa equipe de produção à operação de mídia, garantindo um fluxo unificado e eficiente. Com expertise em criação, desenvolvemos banners HTML5, vídeos e imagens estáticas que se adaptam perfeitamente às necessidades da campanha. Essa abordagem dinâmica proporciona um impulso significativo nas publicações das campanhas, maximizando seus resultados.</div>
        <div className={styles.wwdWorks}>
          <div className={styles.wwdWork1}>
            <div className={styles.wwd1image} />
            <div className={styles.wwd1text}>Criação e design (moodboard e kv + motion design);</div>
          </div>
          <div className={styles.wwdWork2}>
            <div className={styles.wwd2image} />
            <div className={styles.wwd2text}>Produção e desdobramento de banners digitais;</div>
          </div>
          <div className={styles.wwdWork3}>
            <div className={styles.wwd3image} />
            <div className={styles.wwd3text}>Projetos de DCO para otimização de produção;</div>
          </div>
          <div className={styles.wwdWork4}>
            <div className={styles.wwd4image} />
            <div className={styles.wwd4text}>HUB mídia de performance e gestão de Adserver;</div>
          </div>
          <div className={styles.wwdWork5}>
            <div className={styles.wwd5image} />
            <div className={styles.wwd5text}>Projetos de automação para mídia e produção.</div>
          </div>
        </div>
      </div>

      <div id='reanimate' className={styles.reanimate}>
        <div className={styles.reanimateLogo}/>
        <div className={styles.reanimateText1}>O Re.animate é uma Startup da POINT MEDIA e utilizamos em nossas operações de produção para desdobramento de banners estáticos, vídeos, html5 com motion e e-mail marketing.</div>
        <div className={styles.reanimateText2}>• Software com escritura pública;<br/><br/>• Código patenteado no INPI;<br/><br/>• Plataforma validada por importantes operações e com alto potencial de mercado;<br/><br/>• Escala global.</div>
        <div className={styles.reanimateCards}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Nunca foi tão fácil criar banners animados, a partir do KV (psd), você pode animar as peças master em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
          </div>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>O formato perfeito para sua necessidade.  Desdobre a peça master, animada pelo primeiro módulo, em diversos formatos e especificações de mídia: Vertical, horizontal, quadrado e mobile.</div>
          </div>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Ter muitos produtos e ofertas para divulgar não é mais dor de cabeça. Caso tenha muitos formatos para divulgar nas redes sociais e displays, com esse módulo você cria diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
          </div>
          <div className={styles.reanimateAM}>
            <div className={styles.reanimateAMlogo}/>
            <div className={styles.reanimateAMtext}>Sua operação muito mais ágil com uma ferramenta que permite a produção otimizada de e-mail marketing através do uso de componentes e templates personalizados e que abraçam a criação.</div>
          </div>
          <div className={styles.reanimateTM}>
            <div className={styles.reanimateTMlogo}/>
            <div className={styles.reanimateTMtext}>Conversor de banners HTMLs em GIF ou MP4 em apenas segundos. Sem necessidade de desdobramento ou de um motion designer especializado em After Effects.</div>
          </div>
        </div>
        <button className={styles.reanimateButton} onClick={openReanimate}>saiba mais &gt;</button>
      </div>

      <div id='hwd' className={styles.hwd}>
        <div className={styles.hwdTitle}>como a gente faz_</div>
        <div className={styles.hwdCircles}>
          <div className={styles.hwdcPinkText1}>
              <div className={styles.cpinkText1}>Criação KV + peça master</div>
              <div className={styles.cpinkText2}>Replicação</div>
              <div className={styles.cpinkText3}>Motion design</div>
            </div>
            <div className={styles.hwdcPinkText2}>
              <div className={styles.cpinkText1}>Planejamento de mídia</div>
              <div className={styles.cpinkText2}>Plano tático</div>
              <div className={styles.cpinkText3}>Configuração de campanhas</div>
            </div>
            <div className={styles.hwdcPinkText3}>
              <div className={styles.cpinkText1}>Acompanhamento</div>
              <div className={styles.cpinkText2}>Otimização</div>
              <div className={styles.cpinkText3}>Status daily</div>
            </div>
            <div className={styles.hwdcPinkText4}>
              <div className={styles.cpinkText1}>Checking financeiro</div>
              <div className={styles.cpinkText2}>Report</div>
              <div className={styles.cpinkText3}>Under-Over</div>
            </div>
            <div className={styles.hwdcPinkText5}>
              <div className={styles.cpinkText1}>KPIs</div>
              <div className={styles.cpinkText2}>Métricas</div>
              <div className={styles.cpinkText3}>Relatório final</div>
            </div>
            <div className={styles.hwdcBlueText1}>
              <div className={styles.cblueText1}>Produção</div>
              <div className={styles.cblueText2}>Pré-campanha</div>
            </div>
            <div className={styles.hwdcBlueText2}>
              <div className={styles.cblueText1}>Mídia</div>
              <div className={styles.cblueText2}>Pré-campanha</div>
            </div>
            <div className={styles.hwdcBlueText3}>
              <div className={styles.cblueText1}>Mídia</div>
              <div className={styles.cblueText2}>Campanha livre</div>
            </div>
            <div className={styles.hwdcBlueText4}>
              <div className={styles.cblueText1}>Controle</div>
              <div className={styles.cblueText2}>Campanha livre</div>
            </div>
            <div className={styles.hwdcBlueText5}>
              <div className={styles.cblueText1}>Dados resultados</div>
              <div className={styles.cblueText2}>Pós-campanha</div>
            </div>
        </div>
          <div className={styles.hwdWhiteBg}>
            <div className={styles.hwdwBgLight}>
              <div className={styles.hwdLightImage} />
              <div className={styles.hwdLightText}>Agência</div>
            </div>
            <div className={styles.hwdwBgLogo} />
            <div className={styles.hwdwBgMegaphone}>
              <div className={styles.hwdMegaphoneImage} />
              <div className={styles.hwdMegaphoneText}>Veículos</div>
            </div>
        </div>
      </div>

      {modal1Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal1} />
          <iframe className={styles.iframe1} src="/01.html" />
        </div> : null}

      {modal2Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal2} />
          <iframe className={styles.iframe2} src="/02.html" scrolling='no' />
        </div> : null}

      {modal3Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal3} />
          <iframe className={styles.iframe3} src="/03.html" />
        </div> : null}

      {modal4Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal4} />
          <video className={styles.video04} controls autoPlay muted>
            <source src="/04.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal5Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal5} />
          <iframe className={styles.iframe5} src="/05.html" />
        </div> : null}

        {modal6Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal6} />
          <video className={styles.video06} controls autoPlay muted>
            <source src="/06.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal7Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal7} />
          <video className={styles.video07} controls autoPlay muted>
            <source src="/07.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal8Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal8} />
          <video className={styles.video08} controls autoPlay muted>
            <source src="/08.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal9Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal9} />
          <iframe className={styles.iframe9} src="/09.html" />
        </div> : null}

        {modal10Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal10} />
          <video className={styles.video10} controls autoPlay muted>
            <source src="/10.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal11Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal11} />
          <iframe className={styles.iframe11} src="/11.html" />
        </div> : null}

        {modal12Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal12} />
          <iframe className={styles.iframe12} src="/12.html" />
        </div> : null}

        {modal13Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal13} />
          <iframe className={styles.iframe13} src="/13.html" />
        </div> : null}

        {modal14Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal14} />
          <iframe className={styles.iframe14} src="/14.html" />
        </div> : null}

        {modal15Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal15} />
          <iframe className={styles.iframe15} src="/15.html" />
        </div> : null}

        {modal16Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal16} />
          <video className={styles.video16} controls autoPlay muted>
            <source src="/16.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal17Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal17} />
          <iframe className={styles.iframe17} src="/17.html" />
        </div> : null}

        {modal18Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal18} />
          <video className={styles.video18} controls autoPlay muted>
            <source src="/18.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal19Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal19} />
          <iframe className={styles.iframe19} src="/19.html" />
        </div> : null}

        {modal20Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal20} />
          <iframe className={styles.iframe20} src="/20.html" />
        </div> : null}

        {modal21Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal21} />
          <iframe className={styles.iframe21} src="/21.html" />
        </div> : null}

        {modal22Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal22} />
          <iframe className={styles.iframe22} src="/22.html" />
        </div> : null}

        {modal23Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal23} />
          <iframe className={styles.iframe23} src="/23.html" />
        </div> : null}

        {modal24Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal24} />
          <iframe className={styles.iframe24} src="/24.html" />
        </div> : null}

        {modal25Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal25} />
          <iframe className={styles.iframe25} src="/25.html" />
        </div> : null}

        {modal26Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal26} />
          <iframe className={styles.iframe26} src="/26.html" />
        </div> : null}

        {modal27Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal27} />
          <iframe className={styles.iframe27} src="/27.html" />
        </div> : null}

        {modal28Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal28} />
          <video className={styles.video28} controls autoPlay muted>
            <source src="/28.mp4" type="video/mp4" />
          </video>
        </div> : null}

        {modal29Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal29} />
          <iframe className={styles.iframe29} src="/29.html" />
        </div> : null}

        {modal30Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal30} />
          <iframe className={styles.iframe30} src="/30.html" />
        </div> : null}

        {modal31Open ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeModal31} />
          <iframe className={styles.iframe31} src="/31.html" />
        </div> : null}

      <div id='prevworks' className={styles.previousWorks}>
        <div className={styles.pwTitle}>o que a gente já fez_</div>
        <div className={styles.pwGallery}>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery1} onClick={openModal1}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery2} onClick={openModal2}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery3} onClick={openModal3}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery4} onClick={openModal4}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery5} onClick={openModal5}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery6} onClick={openModal6}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery7} onClick={openModal7}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery8} onClick={openModal8}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery9} onClick={openModal9}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery10} onClick={openModal10}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery11} onClick={openModal11}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery12} onClick={openModal12}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery13} onClick={openModal13}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery14} onClick={openModal14}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery15} onClick={openModal15}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery16} onClick={openModal16}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery17} onClick={openModal17}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery18} onClick={openModal18}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery19} onClick={openModal19}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery20} onClick={openModal20}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery21} onClick={openModal21}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery22} onClick={openModal22}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery23} onClick={openModal23}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery24} onClick={openModal24}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery25} onClick={openModal25}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery26} onClick={openModal26}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery27} onClick={openModal27}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery28} onClick={openModal28}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery29} onClick={openModal29}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery30} onClick={openModal30}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery31} onClick={openModal31}/>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.gallery32}/>
          </div>
        </div>
      </div>

      <div>
        {renderCases()}
      </div>
     
      <div id='clients' className={styles.clients}>
        <div className={styles.blueBalls}></div>
        <div className={styles.clientsTitle}>clientes atendidos_</div>
        {renderObjectSize()}
      </div>

      <div id='contact' className={styles.contact}>
        <div className={styles.contactTitle}>contato_</div>
        <div className={styles.contactText}>Traga sua marca para um time de talentos que cresce a cada projeto novo.</div>
        {loading ? <div className={styles.formLoading}><ReactLoading type={"spinningBubbles"} color={"#EB6099"} height={"20%"} width={"20%"}/></div> :
        <form className={styles.contactForm} onSubmit={onSubmit}>
          <select className={styles.formSubject} type="text" name="subject" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled hidden>Escolha um assunto</option>
            <option value="1">Comercial</option>
            <option value="2">Projetos</option>
            <option value="3">Administrativo/Financeiro</option>
          </select>
          <input className={styles.formName} type="text" name="name" placeholder="Nome"></input>
          <input className={styles.formEmail} type="text" name="email" placeholder="Email"></input>
          <input className={styles.formPhone} type="text" name="phone" placeholder="Telefone"></input>
          <textarea className={styles.formMessage} type="textarea" name="message" placeholder="Deixe sua mensagem aqui..."></textarea>
          <button className={styles.contactButton}>enviar &gt;</button>
        </form>}
      </div>

      <div className={styles.footer}>
        <div className={styles.footerLogo} onClick={anchorHeader} />
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksAbout}>
            <div className={styles.footerAbout}>SOBRE</div>
            <div className={styles.anchorAbout} onClick={anchorAbout}>a POINT</div>
            <div className={styles.anchorTeam} onClick={anchorTeam}>nosso time</div>
            <div className={styles.anchorWwd} onClick={anchorWwd}>o que a gente faz</div>
            <div className={styles.anchorHwd} onClick={anchorHwd}>como a gente faz</div>
            <div className={styles.anchorPrevWorks} onClick={anchorPrevWorks}>o que a gente já fez</div>
          </div>
          <div className={styles.footerLinksProducts}>
            <div className={styles.footerProducts}>PRODUTOS <br/>& SERVIÇOS</div>
            <div className={styles.anchorCases} onClick={anchorCases}>nossos cases</div>
            <div className={styles.anchorClients} onClick={anchorClients}>clientes atendidos</div>
            <div className={styles.anchorReanimate} onClick={anchorReanimate}>re.animate</div>
            <div className={styles.anchorContact} onClick={anchorContact}>contato</div>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.whatsapp} onClick={openWhatsapp}></div>
          <div className={styles.linkedin} onClick={openLinkedin}></div>
          <div className={styles.instagram} onClick={openInstagram}></div>
          <div className={styles.facebook} onClick={openFacebook}></div>
        </div>
        <div className={styles.footerLocation}>
          <div className={styles.address}>Vila Madalena - São Paulo - SP<br/>
          Telefone: (11) 3368-9006</div>
        </div>
        <button className={styles.complianceButton} onClick={openCompliance}>compliance &gt;</button>
        <div className={styles.footerCopyright}>© pointmedia 2023</div>
      </div>
    </div>
  }

    </div>
  )
}
