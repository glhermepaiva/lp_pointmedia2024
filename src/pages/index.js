import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import ReactLoading from 'react-loading'
import { GoogleTagManager } from '@next/third-parties/google'
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


register();


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

/***** SWIPER  *****/

const swiperRef = useRef(null);

useEffect(() => {
  const swiperContainer = swiperRef.current;
  const params = {
    navigation: true,
    injectStyles: [
      `
        .swiper-button-next,
        .swiper-button-prev {
          padding: 0 0 0 0;
          color: #EB6099;
          transform: scale(1.4)
        }
        .swiper-pagination-bullet {
          width: 50px;
        }
        @media (min-width: 1280px) and (max-width: 1365px) {
          .swiper-button-next,
          .swiper-button-prev {
            padding: 0 15px;
            color: #EB6099;
            transform: scale(1.4)
          }
        }
        @media (min-width: 1366px) and (max-width: 1799px) {
          .swiper-button-next,
          .swiper-button-prev {
            padding: 0 20px;
          }
        }
        @media (min-width: 1800px) and (max-width: 2559px) {
          .swiper-button-next,
          .swiper-button-prev {
            padding: 0 30px;
            transform: scale(1.5)
          }
        }
        @media (min-width: 2560px) {
          .swiper-button-next,
          .swiper-button-prev {
            padding: 0 50px;
            transform: scale(2.2)
          }
        }
    `,
    ],
  };

  Object.assign(swiperContainer, params);
  swiperContainer.initialize();
}, []);

/***** PAGINATION *****/

const paginationRef = useRef(null);

useEffect(() => {
  const swiperContainer = paginationRef.current;
  const params = {
    pagination: {
      clickable: true,
    },
    injectStyles: [
      `
        .swiper-wrapper {
          width: 100vw;
          height: 600px;
          margin: 0px 0 20px 0;
        }
        .swiper-pagination {
          margin: -50px 0 0 0 !important;
        } 
        .swiper-pagination-bullet {
          width: 15px;
          height: 15px;
          margin: 0px 10px !important;
        } @media (min-width: 430px) and (max-width: 767px) {
          .swiper-wrapper {
            height: 640px;
            margin: 0px 0 5px 0;
          }
          .swiper-pagination {
            margin: -50px 0 0 0 !important;
          }
        } @media (min-width: 768px) and (max-width: 1279px) {
          .swiper-wrapper {
            height: 450px;
            margin: 0px 0 0px 0;
          }
        } @media (min-width: 1280px) and (max-width: 1365px) {
          .swiper-wrapper {
            height: 600px;
            margin: 0px 0 30px 0;
          }       
        } @media (min-width: 1366px) and (max-width: 1599px) {
          .swiper-wrapper {
            height: 600px;
            margin: 0px 0 30px 0;
          }      
        } @media (min-width: 1600px) and (max-width: 1799px) {
          .swiper-wrapper {
            height: 600px;
            margin: 0px 0 30px 0;
          }   
        } @media (min-width: 1800px) and (max-width: 2559px) {
          .swiper-wrapper {
            height: 710px;
            margin: 0px 0 30px 0;
          }
        } @media (min-width: 2560px) {
          .swiper-wrapper {
            height: 900px;
            margin: 0px 0 30px 0;
          }
          .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            margin: 0px 15px !important;
          }
        }
    `,
    ],
  };

  Object.assign(swiperContainer, params);
  swiperContainer.initialize();
}, []);


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

/***** WINDOW SIZE  *****/

const [offsetY, setOffsetY] = useState(0);

const handleScroll = () => setOffsetY(window.pageYOffset);

const [galleryClosedHeight, setGalleryClosedHeight] = useState('370px')
const [galleryOpenHeight, setGalleryOpenHeight] = useState('1500px')

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

      if (window.innerWidth >= 2400) {
        setGalleryClosedHeight('550px')
        setGalleryOpenHeight('1000px')
      } else if (window.innerWidth >= 1800) {
        setGalleryClosedHeight('650px')
        setGalleryOpenHeight('1200px')
      } else if (window.innerWidth >= 1600) {
        setGalleryClosedHeight('620px')
        setGalleryOpenHeight('1450px')
      } else if (window.innerWidth >= 1366) {
        setGalleryClosedHeight('650px')
        setGalleryOpenHeight('1950px')
      } else if (window.innerWidth >= 1280) {
        setGalleryClosedHeight('620px')
        setGalleryOpenHeight('1950px')
      } else if (window.innerWidth >= 768) {
        setGalleryClosedHeight('400px')
        setGalleryOpenHeight('950px')
      } else if (window.innerWidth >= 430) {
        setGalleryClosedHeight('370px')
        setGalleryOpenHeight('1500px')
      } else {
        setGalleryClosedHeight('370px')
        setGalleryOpenHeight('1420px')
      }

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const size = useWindowSize();

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

const videoRef = useRef(null);
const aboutRef = useRef(null);
const teamRef = useRef(null);  
const wwdRef = useRef(null);
const hwdRef = useRef(null);
const pwRef = useRef(null);
const casesRef = useRef(null);
const clientsRef = useRef(null);
const reanimateRef = useRef(null);


const anchorVideo = () => {
    setMenuOpen(false)
    const videoPosition = videoRef.current.offsetTop;
    window.scrollTo({
      top: videoPosition,
      behavior: 'smooth',
    })
  }

  const anchorAbout = () => {
    setMenuOpen(false)
    const aboutPosition = aboutRef.current.offsetTop;
    window.scrollTo({
      top: aboutPosition,
      behavior: 'smooth',
    })
  }

  const anchorTeam = () => {
    setMenuOpen(false)
    const teamPosition = teamRef.current.offsetTop;
    window.scrollTo({
      top: teamPosition,
      behavior: 'smooth',
    })
  }

  const anchorWwd = () => {
    setMenuOpen(false)
    const wwdPosition = wwdRef.current.offsetTop;
    window.scrollTo({
      top: wwdPosition,
      behavior: 'smooth',
    })
  }

  const anchorHwd = () => {
    setMenuOpen(false)
    const hwdPosition = hwdRef.current.offsetTop;
    window.scrollTo({
      top: hwdPosition,
      behavior: 'smooth',
    })
  }

  const anchorPrevWorks = () => {
    setMenuOpen(false)
    const pwPosition = pwRef.current.offsetTop;
    window.scrollTo({
      top: pwPosition,
      behavior: 'smooth',
    })
  }

  const anchorCases = () => {
    setMenuOpen(false)
    const casesPosition = casesRef.current.offsetTop;
    window.scrollTo({
      top: casesPosition,
      behavior: 'smooth',
    })
  }

  const anchorClients = () => {
    setMenuOpen(false)
    const clientsPosition = clientsRef.current.offsetTop;
    window.scrollTo({
      top: clientsPosition,
      behavior: 'smooth',
    })
  }

  const anchorReanimate = () => {
    setMenuOpen(false)
    const reanimatePosition = reanimateRef.current.offsetTop;
    window.scrollTo({
      top: reanimatePosition,
      behavior: 'smooth',
    })
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
      subject: e.target[3].value,
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      message: e.target[4].value,
    }

    console.log(formData)
    const isValid = await schema.isValid(formData);

    if (isValid && formData.subject == '1') {
        emailjs.sendForm('service_ibuddku', 'template_comercial', e.target, 'psXKDji6qs060IYw5')

        .then((result) => {
            console.log(result);
            alert("Sucesso! Logo entraremos em contato!")
            window.location.href = "/?uri=";
        }, (error) => {
            console.log(error);
            setLoading(false)
        });

    } else if (isValid && formData.subject == '2') {
      emailjs.sendForm('service_ibuddku', 'template_atendimento', e.target, 'psXKDji6qs060IYw5')

      .then((result) => {
          console.log(result);
          alert("Sucesso! Logo entraremos em contato!")
          window.location.href = "/?uri=";
      }, (error) => {
          console.log(error);
          setLoading(false)
      });

    } else if (isValid && formData.subject == '3') {
      emailjs.sendForm('service_ibuddku', 'template_financeiro', e.target, 'psXKDji6qs060IYw5')

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

/***** BUTTON SHOW REEL *****/

const [reelOpen, setReelOpen] = useState(false)

    const openReel = () => {
      setReelOpen(true)
    }
  
    const closeReel = () => {
      setReelOpen(false)
    }


/***** VIDEO LOADER ******/
 
const [isLoading, setIsLoading] = useState(true);

useEffect(()=> {
  handleVideoLoad()
},[isLoading])

const handleVideoLoad = () => {
  setTimeout(()=> {
    setIsLoading(false);
  }, 100)
  };

/***** PREV WORKS CONTAINER ******/
 
const [prevWorksExpanded, setPrevWorksExpanded] = useState(false);

const [removerGradiente, setRemoverGradiente] = useState(false);

const gradientClasses = `${styles.gradientOverlay} ${removerGradiente ? styles.gradientRemoved : ''}`;

const openPrevWorks = () => {
  setPrevWorksExpanded(true)
  setRemoverGradiente(true);
}

/***** MODAL CONTATO ******/
 
const [contatoOpen, setContatoOpen] = useState(false);

const openModalContato = () => {
  setContatoOpen(true)
}

const closeModalContato = () => {
  setContatoOpen(false)
}
  
/***** RETURN *****/

  return (
    <div className={styles.page}>
      <Head>
        <title>POINT MEDIA</title>
        <meta name='description' content='Motion é o que realmente nos move' />
      </Head>

      <GoogleTagManager gtmId="GTM-WC43G6L2" />
      
      <div id='header' className={styles.header}>
        <div className={styles.logoPoint} onClick={anchorVideo} />
        <div className={styles.hamburger} onClick={openMenu}/>
      </div>

      <div>
      <div className={`${styles.hoverMenu} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.menuClose} onClick={closeMenu}/>
        <div className={styles.menuLinks}>
          <div className={styles.anchorAbout} onClick={anchorAbout}>a POINT</div>
          <div className={styles.anchorTeam} onClick={anchorTeam}>nosso time</div>
          <div className={styles.anchorWwd} onClick={anchorWwd}>o que a gente faz</div>
          <div className={styles.anchorHwd} onClick={anchorHwd}>como a gente faz</div>
          <div className={styles.anchorPrevWorks} onClick={anchorPrevWorks}>o que a gente já fez</div>
          <div className={styles.anchorCases} onClick={anchorCases}>nossos cases</div>
          {/* <Link href="/mosaico" >
            <a className={styles.anchorMosaico}>mosaico</a>
          </Link> */}
          <div className={styles.anchorClients}><a href="https://producaopoint.s3.sa-east-1.amazonaws.com/mosaico/index.html">mosaico</a></div>
          <div className={styles.anchorClients} onClick={anchorClients}>clientes atendidos</div>
          <div className={styles.anchorReanimate} onClick={anchorReanimate}>re.animate</div>
          <div className={styles.anchorContact} onClick={openModalContato}>contato</div>
        </div>
        <div className={styles.menuSocials}>
          <div className={styles.whatsapp} onClick={openWhatsapp} />
          <div className={styles.instagram} onClick={openInstagram}/>
          <div className={styles.linkedin} onClick={openLinkedin}/>
          <div className={styles.facebook} onClick={openFacebook}/>
        </div>
        <div className={styles.menuLogo} onClick={anchorVideo}></div>
      </div> 

      <div id='video' ref={videoRef} className={styles.headerVideoContainer}>
        {isLoading ? 
          <div className={styles.videoLoader}></div>
        :
          <video className={styles.demoReelVideo} style={{ display: isLoading ? 'none' : 'block' }} autoPlay={true} loop={true} controls={false} playsInline muted onLoadedData={handleVideoLoad}>
            <source src="/demoreel2.mp4" type="video/mp4" />
          </video>
        } 
      </div>

      {reelOpen ? <div className={styles.galleryModal}>
        <div className={styles.modalClose} onClick={closeReel} />
          <video className={styles.openReel} autoPlay={true} loop={false} controls={true} playsInline>
            <source src="/demoreel1.mp4" type="video/mp4" />
          </video>
        </div> : null}

      <div className={styles.buttonReel} onClick={openReel}>VER REEL</div>
 
      <swiper-container ref={paginationRef} init="false">
        <SwiperSlide>
        <div className={styles.news}>
          <div className={styles.news7Picture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.news1Tag}>
              <div className={styles.news1TagText}>Cogna é POINT MEDIA!</div>
              <div className={styles.news7TagLine} />
            </div>
            <div className={styles.news1NewsText}>
            Além de ser uma das principais organizações educacionais do mundo, agora a Cogna também é nossa cliente! Vamos, lado a lado, <b>rumo ao inimaginável</b>. Muitas novidades estão por vir! 👀
            </div>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className={styles.news}>
          <div className={styles.newsFirstPicture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.news1Tag}>
              <div className={styles.news1TagText}>Track & Field é POINT MEDIA!</div>
              <div className={styles.news1TagLineXl} />
            </div>
            <div className={styles.news1NewsText}>
            <b></b> A <b>maior marca brasileira de esporte</b> no setor de vestuário entrou pro nosso time. É uma honra ter essa marca tão <b>gigante</b> e <b>inspiradora</b> com a gente e poder surfar na mesma onda! ❤️
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.news}>
          <div className={styles.news1Picture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.news1Tag}>
              <div className={styles.news1TagText}>PicPay é POINT MEDIA!</div>
              <div className={styles.news1TagLine} />
            </div>
            <div className={styles.news1NewsText}>
              O jeito divertido de lidar com o dinheiro chegou na POINT! A empresa que <b>simplificou as finanças</b> dos brasileiros agora faz parte da nossa família de clientes. Vamos juntos <b>dar um pique</b> na vida financeira de milhares de pessoas! 😄
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.news}>
        <div className={styles.news3Picture} />
        <div className={styles.newsTextsContainer}>
          <div className={styles.news3Tag}>
              <div className={styles.news3TagText}>Havaianas é POINT MEDIA!</div>
              <div className={styles.news3TagLine} />
            </div>
            <div className={styles.news3NewsText}>
              Iniciamos uma nova etapa em nossa parceria com a Havaianas! Após o <b>ótimo desempenho</b> da equipe <b>POINT MEDIA</b> com os serviços de mídia online para a marca brasileira de sandálias, também assumimos os serviços de CRM para o <b>time global</b> e <b>nacional</b>.
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.news}>
          <div className={styles.news4Picture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.news4Tag}>
                <div className={styles.news4TagText}>C&#38;A é POINT MEDIA!</div>
                <div className={styles.news4TagLine} />
              </div>
              <div className={styles.news4NewsText}>
                A mais nova cliente a fazer parte do time. Nossa equipe <b>assumiu a operação</b> de comunicação <b>digital</b> e <b>CRM</b> e já está à frente na produção das principais campanhas destes meios da <b>gigante varejista</b>!
              </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.news}>
          <div className={styles.news5Picture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.news5Tag}>
                <div className={styles.news5TagText}>Veloe é POINT MEDIA!</div>
                <div className={styles.news5TagLine} />
              </div>
              <div className={styles.news5NewsText}>
                Pegamos a estrada com a Veloe e agora não tem pedágio que segure! A responsabilidade de <b>desenvolver toda a produção</b> e operação das campanhas digitais da Veloe agora é nossa. Vamos juntos nessa!
              </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.news}>
          <div className={styles.news2Picture} />
          <div className={styles.newsTextsContainer}>
            <div className={styles.news2Tag}>
              <div className={styles.news2TagText}>DM9 é POINT MEDIA!</div>
              <div className={styles.news2TagLine} />
            </div>
            <div className={styles.news2NewsText}>
            Os especialistas em transformar <b>ideias em realidade</b> estão com a gente! Temos o prazer de sermos parceiros da agência DM9. Juntos, estamos criando um mundo mais animado e cheio de surpresas. 😄🎉
            </div>
          </div>
        </div>
        </SwiperSlide>
        
      </swiper-container>
      
      <div id='about' ref={aboutRef} className={styles.about}>
        <div className={styles.aboutWind} />
        <div className={styles.aboutPointsV} />
        <div className={styles.aboutWrap}>
          <div className={styles.aboutPoint}>a POINT_</div>
          <div className={styles.aboutTag} />
          <div className={styles.aboutText}>
            Somos uma equipe <b>apaixonada por criatividade</b> e movidos pela constante busca por inovação. Desde 2017, estamos imersos no universo dinâmico da mídia online, ad ops e ad server.<br/><br/>
            Junte-se a nós nessa jornada e descubra como a POINT MEDIA pode <b>transformar</b> sua presença digital em algo verdadeiramente extraordinário.
          </div>
        </div>
        <div className={styles.aboutImage} />
        <div className={styles.aboutPointsH} />
      </div>

      <div id='team' ref={teamRef} className={styles.team}>
        <div className={styles.teamQuote}>onde a inspiração ganha vida e o movimento nunca para!</div>
        {size.width >= 1280 ? 

        <div>
          <div className={styles.teamPictures}>
            <div className={styles.Mychel}>
              <div className={styles.MychelPicture} />
            </div>
            <div className={styles.Thiago}>
              <div className={styles.ThiagoPicture} />
            </div>
            <div className={styles.Will}>
              <div className={styles.WillPicture} />
            </div>
            <div className={styles.Mariana}>
              <div className={styles.MarianaPicture} />
            </div>
            <div className={styles.Louro}>
              <div className={styles.LouroPicture} />
            </div>
            <div className={styles.Priscila}>
              <div className={styles.PriscilaPicture} />
            </div>
          </div>

          <div className={styles.teamPictures2}>
            <div className={styles.Raphael}>
              <div className={styles.RaphaelPicture} />
            </div>
            <div className={styles.Vinicius}>
              <div className={styles.ViniciusPicture} />
            </div>
            <div className={styles.Leandro}>
              <div className={styles.LeandroPicture} />
            </div>
            <div className={styles.Nicole}>
              <div className={styles.NicolePicture} />
            </div>
            <div className={styles.Georgia}>
              <div className={styles.GeorgiaPicture} />
            </div>
            <div className={styles.Marco}>
              <div className={styles.MarcoPicture} />
            </div>
            <div className={styles.Thais}>
              <div className={styles.ThaisPicture} />
            </div>
            <div className={styles.Andre}>
              <div className={styles.AndrePicture} />
            </div>
          </div>
        </div>
        :
        size.width >= 768 ? 
        <Swiper slidesPerView={4.4} spaceBetween={-20} freeMode={true} modules={[FreeMode]} className={styles.teamPictures}>
          <SwiperSlide className={styles.Mychel}>
            <div className={styles.MychelPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Thiago}>
            <div className={styles.ThiagoPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Will}>
            <div className={styles.WillPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Mariana}>
            <div className={styles.MarianaPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Louro}>
            <div className={styles.LouroPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Priscila}>
            <div className={styles.PriscilaPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Raphael}>
            <div className={styles.RaphaelPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Vinicius}>
            <div className={styles.ViniciusPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Leandro}>
            <div className={styles.LeandroPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Nicole}>
            <div className={styles.NicolePicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Georgia}>
            <div className={styles.GeorgiaPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Marco}>
            <div className={styles.MarcoPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Thais}>
            <div className={styles.ThaisPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Andre}>
            <div className={styles.AndrePicture} />
          </SwiperSlide>
        </Swiper>
        :
        <Swiper slidesPerView={2.2} spaceBetween={-25} freeMode={true} modules={[FreeMode]} className={styles.teamPictures}>
          <SwiperSlide className={styles.Mychel}>
            <div className={styles.MychelPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Thiago}>
            <div className={styles.ThiagoPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Will}>
            <div className={styles.WillPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Mariana}>
            <div className={styles.MarianaPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Louro}>
            <div className={styles.LouroPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Priscila}>
            <div className={styles.PriscilaPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Raphael}>
            <div className={styles.RaphaelPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Vinicius}>
            <div className={styles.ViniciusPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Leandro}>
            <div className={styles.LeandroPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Nicole}>
            <div className={styles.NicolePicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Georgia}>
            <div className={styles.GeorgiaPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Marco}>
            <div className={styles.MarcoPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Thais}>
            <div className={styles.ThaisPicture} />
          </SwiperSlide>
          <SwiperSlide className={styles.Andre}>
            <div className={styles.AndrePicture} />
          </SwiperSlide>
        </Swiper>
        }
        
        <div className={styles.teamTitle}>nosso time_</div>
        <div className={styles.teamTitleTag} />
        <div className={styles.teamText}>Montamos um time excepcional de <b>especialistas do mercado digital</b>, com uma vasta experiência e um histórico impressionante em grandes empresas do setor.</div>
        <div className={styles.teamWind} />
        <div className={styles.teamPinkBalls} />
      </div>
      
      <div id='wwd' ref={wwdRef} className={styles.wwd}>
        <div className={styles.wwdTitle}>o que a gente faz_</div>
        <div className={styles.wwdTitleTag} />
        <div className={styles.wwdText}>
          Criamos <b>hubs de performance</b> para agências e clientes diretos, nos quais oferecemos uma ampla gama de serviços de marketing digital. Com expertise em <b>criação</b>, desenvolvemos <b>banners HTML5</b>, <b>vídeos</b> e <b>imagens estáticas</b> que se adaptam perfeitamente às necessidades da campanha.
        </div>
        {size.width >= 1280 ? 
        <div className={styles.wwdWorks}>
          <div className={styles.wwd1}>
            <div className={styles.wwd1image} />
          </div>
          <div className={styles.wwd2}>
            <div className={styles.wwd2image} />
          </div>
          <div className={styles.wwd3}>
            <div className={styles.wwd3image} />
          </div>
          <div className={styles.wwd4}>
            <div className={styles.wwd4image} />
          </div>
          <div className={styles.wwd5}>
            <div className={styles.wwd5image} />
          </div>
        </div>
        :
        size.width >= 768 ? 
        <Swiper slidesPerView={3.1} spaceBetween={-20} freeMode={true} modules={[FreeMode]} className={styles.wwdWorks}>
          <SwiperSlide className={styles.wwd1}>
            <div className={styles.wwd1image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd2}>
            <div className={styles.wwd2image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd3}>
            <div className={styles.wwd3image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd4}>
            <div className={styles.wwd4image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd5}>
            <div className={styles.wwd5image} />
          </SwiperSlide>
        </Swiper>
        :
        <Swiper slidesPerView={1.4} spaceBetween={-20} freeMode={true} modules={[FreeMode]} className={styles.wwdWorks}>
          <SwiperSlide className={styles.wwd1}>
            <div className={styles.wwd1image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd2}>
            <div className={styles.wwd2image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd3}>
            <div className={styles.wwd3image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd4}>
            <div className={styles.wwd4image} />
          </SwiperSlide>
          <SwiperSlide className={styles.wwd5}>
            <div className={styles.wwd5image} />
          </SwiperSlide>
        </Swiper>
        }
        <div className={styles.wwdWind} />
        <div className={styles.wwdPoints} />
      </div>

      <div id='hwd' ref={hwdRef} className={styles.hwd}>
        <div className={styles.hwdTitle}>como a gente faz_</div>
        <div className={styles.hwdTitleTag} />
        <div className={styles.hwdWind} />
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
      
      <div id='prevworks' ref={pwRef} className={styles.previousWorks}>
        <div className={styles.pwPoints} />
        <div className={styles.pwTitle}>o que a gente já fez_</div>
        <div className={styles.pwTitleTag} />
        <div className={styles.pwGallery} style={{height: prevWorksExpanded ? galleryOpenHeight : galleryClosedHeight}}>
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
          <div id="gradientOverlay" className={gradientClasses} />
        </div>
        <div className={styles.pwButtonContainer} style={{display: prevWorksExpanded ? 'none' : 'flex'}}>
          <div onClick={openPrevWorks} className={styles.prevWorksButton}>exibir mais</div>
          <div className={styles.prevWorksButton2} />
        </div>
      </div>

      <div id='cases' ref={casesRef} className={styles.cases}>
        <div className={styles.casesTitle}>nossos cases_</div>
        <div className={styles.casesTitleTag} />
        <swiper-container ref={swiperRef} init="false">
          <SwiperSlide className={styles.casesSlide}>
            <div className={styles.case1Image} />
            <div className={styles.case1logo} />
            <div className={styles.case1Subtitle}>Highlights</div>
            <div className={styles.case1Text}>
              • Crescimento de 2.000% na área de CRM para vendas.<br/>
              • Redução do prazo de entrega do pack de banners de uma semana para horas.<br/>
              • Operação de produção digital global.<br/>
              • Operação de produção de e-mail marketing global.
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.casesSlide}>
            <div className={styles.case2Image} />
            <div className={styles.case2logo} />
            <div className={styles.case2Subtitle}>Highlights</div>
            <div className={styles.case2Text}>
              • Gestão de Ad Ops via Adserver.<br/>
              • Zeladoria da taxonomia de mídia Vivo.<br/>
              • Automação para produção digital.<br/>
              • Automação para e-mail marketing.<br/>
              • Redução do prazo de entrega do pack de banners de uma semana para horas.
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.casesSlide}>
            <div className={styles.case3Image} />
            <div className={styles.case3logo} />
            <div className={styles.case3Subtitle}>Highlights</div>
            <div className={styles.case3Text}>
              • Produção digital com automação.<br/>
              • Produção de e-mail marketing com automação.<br/>
              • Redução do prazo de entrega do pack de banners de uma semana para horas.<br/>
              • Criação de um dashboard com indicadores operacionais dos países.
            </div>
          </SwiperSlide>
        </swiper-container>
      </div>
     
      <div id='clients' ref={clientsRef} className={styles.clients}>
        <div className={styles.blueBalls}></div>
        <div className={styles.clientsTitle}>clientes atendidos_</div>
        <div className={styles.clientsTitleTag} />
        {size.width >= 2400 ? 
        <Swiper slidesPerView={8.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
          <SwiperSlide className={styles.clientsSwipe}>
            <div className={styles.client1} />
            <div className={styles.client2} />
            <div className={styles.client3} />
            <div className={styles.client4} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client5} />
            <div className={styles.client6} />
            <div className={styles.client7} />
            <div className={styles.client8} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client9} />
            <div className={styles.client10} />
            <div className={styles.client11} />
            <div className={styles.client12} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client13} />
            <div className={styles.client14} />
            <div className={styles.client15} />
            <div className={styles.client16} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client17} />
            <div className={styles.client18} />
            <div className={styles.client19} />
            <div className={styles.client20} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client21} />
            <div className={styles.client22} />
            <div className={styles.client23} />
            <div className={styles.client24} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client25} />
            <div className={styles.client26} />
            <div className={styles.client27} />
            <div className={styles.client28} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client29} />
            <div className={styles.client30} />
            <div className={styles.client31} />
            <div className={styles.client32} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client33} />
            <div className={styles.client34} />
            <div className={styles.client35} />
            <div className={styles.client36} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client37} />
            <div className={styles.client38} />
            <div className={styles.client39} />
            <div className={styles.client40} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client41} />
            <div className={styles.client42} />
            <div className={styles.client43} />
            <div className={styles.client44} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client45} />
            <div className={styles.client46} />
            <div className={styles.client47} />
            <div className={styles.client48} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client49} />
            <div className={styles.client50} />
            <div className={styles.client51} />
            <div className={styles.client52} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client53} />
            <div className={styles.client54} />
            <div className={styles.client55} />
            <div className={styles.client56} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client57} />
            <div className={styles.client58} />
            <div className={styles.client59} />
            <div className={styles.client60} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client61} />
            <div className={styles.client62} />
            <div className={styles.client63} />
            <div className={styles.client64} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client65} />
            <div className={styles.client66} />
            <div className={styles.client67} />
            <div className={styles.client68} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client69} />
            <div className={styles.client70} />
            <div className={styles.client71} />
            <div className={styles.client72} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client73} />
            <div className={styles.client74} />
            <div className={styles.client75} />
            <div className={styles.client76} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client77} />
            <div className={styles.client78} />
            <div className={styles.client79} />
            <div className={styles.client80} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client81} />
            <div className={styles.client82} />
            <div className={styles.client83} />
            <div className={styles.client84} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client85} />
            <div className={styles.client86} />
            <div className={styles.client87} />
            <div className={styles.client88} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client89} />
            <div className={styles.client90} />
            <div className={styles.client91} />
            <div className={styles.client92} />
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 1600 ?
      <Swiper slidesPerView={6.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
        <SwiperSlide className={styles.clientsSwipe}>
            <div className={styles.client1} />
            <div className={styles.client2} />
            <div className={styles.client3} />
            <div className={styles.client4} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client5} />
            <div className={styles.client6} />
            <div className={styles.client7} />
            <div className={styles.client8} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client9} />
            <div className={styles.client10} />
            <div className={styles.client11} />
            <div className={styles.client12} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client13} />
            <div className={styles.client14} />
            <div className={styles.client15} />
            <div className={styles.client16} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client17} />
            <div className={styles.client18} />
            <div className={styles.client19} />
            <div className={styles.client20} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client21} />
            <div className={styles.client22} />
            <div className={styles.client23} />
            <div className={styles.client24} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client25} />
            <div className={styles.client26} />
            <div className={styles.client27} />
            <div className={styles.client28} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client29} />
            <div className={styles.client30} />
            <div className={styles.client31} />
            <div className={styles.client32} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client33} />
            <div className={styles.client34} />
            <div className={styles.client35} />
            <div className={styles.client36} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client37} />
            <div className={styles.client38} />
            <div className={styles.client39} />
            <div className={styles.client40} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client41} />
            <div className={styles.client42} />
            <div className={styles.client43} />
            <div className={styles.client44} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client45} />
            <div className={styles.client46} />
            <div className={styles.client47} />
            <div className={styles.client48} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client49} />
            <div className={styles.client50} />
            <div className={styles.client51} />
            <div className={styles.client52} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client53} />
            <div className={styles.client54} />
            <div className={styles.client55} />
            <div className={styles.client56} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client57} />
            <div className={styles.client58} />
            <div className={styles.client59} />
            <div className={styles.client60} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client61} />
            <div className={styles.client62} />
            <div className={styles.client63} />
            <div className={styles.client64} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client65} />
            <div className={styles.client66} />
            <div className={styles.client67} />
            <div className={styles.client68} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client69} />
            <div className={styles.client70} />
            <div className={styles.client71} />
            <div className={styles.client72} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client73} />
            <div className={styles.client74} />
            <div className={styles.client75} />
            <div className={styles.client76} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client77} />
            <div className={styles.client78} />
            <div className={styles.client79} />
            <div className={styles.client80} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client81} />
            <div className={styles.client82} />
            <div className={styles.client83} />
            <div className={styles.client84} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client85} />
            <div className={styles.client86} />
            <div className={styles.client87} />
            <div className={styles.client88} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client89} />
            <div className={styles.client90} />
            <div className={styles.client91} />
            <div className={styles.client92} />
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 1280 ? 
        <Swiper slidesPerView={4.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
          <SwiperSlide>
            <div className={styles.client1} />
            <div className={styles.client2} />
            <div className={styles.client3} />
            <div className={styles.client4} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client5} />
            <div className={styles.client6} />
            <div className={styles.client7} />
            <div className={styles.client8} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client9} />
            <div className={styles.client10} />
            <div className={styles.client11} />
            <div className={styles.client12} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client13} />
            <div className={styles.client14} />
            <div className={styles.client15} />
            <div className={styles.client16} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client17} />
            <div className={styles.client18} />
            <div className={styles.client19} />
            <div className={styles.client20} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client21} />
            <div className={styles.client22} />
            <div className={styles.client23} />
            <div className={styles.client24} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client25} />
            <div className={styles.client26} />
            <div className={styles.client27} />
            <div className={styles.client28} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client29} />
            <div className={styles.client30} />
            <div className={styles.client31} />
            <div className={styles.client32} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client33} />
            <div className={styles.client34} />
            <div className={styles.client35} />
            <div className={styles.client36} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client37} />
            <div className={styles.client38} />
            <div className={styles.client39} />
            <div className={styles.client40} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client41} />
            <div className={styles.client42} />
            <div className={styles.client43} />
            <div className={styles.client44} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client45} />
            <div className={styles.client46} />
            <div className={styles.client47} />
            <div className={styles.client48} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client49} />
            <div className={styles.client50} />
            <div className={styles.client51} />
            <div className={styles.client52} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client53} />
            <div className={styles.client54} />
            <div className={styles.client55} />
            <div className={styles.client56} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client57} />
            <div className={styles.client58} />
            <div className={styles.client59} />
            <div className={styles.client60} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client61} />
            <div className={styles.client62} />
            <div className={styles.client63} />
            <div className={styles.client64} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client65} />
            <div className={styles.client66} />
            <div className={styles.client67} />
            <div className={styles.client68} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client69} />
            <div className={styles.client70} />
            <div className={styles.client71} />
            <div className={styles.client72} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client73} />
            <div className={styles.client74} />
            <div className={styles.client75} />
            <div className={styles.client76} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client77} />
            <div className={styles.client78} />
            <div className={styles.client79} />
            <div className={styles.client80} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client81} />
            <div className={styles.client82} />
            <div className={styles.client83} />
            <div className={styles.client84} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client85} />
            <div className={styles.client86} />
            <div className={styles.client87} />
            <div className={styles.client88} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client89} />
            <div className={styles.client90} />
            <div className={styles.client91} />
            <div className={styles.client92} />
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 768 ? 
        <Swiper slidesPerView={3.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
          <SwiperSlide>
            <div className={styles.client1} />
            <div className={styles.client2} />
            <div className={styles.client3} />
            <div className={styles.client4} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client5} />
            <div className={styles.client6} />
            <div className={styles.client7} />
            <div className={styles.client8} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client9} />
            <div className={styles.client10} />
            <div className={styles.client11} />
            <div className={styles.client12} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client13} />
            <div className={styles.client14} />
            <div className={styles.client15} />
            <div className={styles.client16} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client17} />
            <div className={styles.client18} />
            <div className={styles.client19} />
            <div className={styles.client20} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client21} />
            <div className={styles.client22} />
            <div className={styles.client23} />
            <div className={styles.client24} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client25} />
            <div className={styles.client26} />
            <div className={styles.client27} />
            <div className={styles.client28} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client29} />
            <div className={styles.client30} />
            <div className={styles.client31} />
            <div className={styles.client32} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client33} />
            <div className={styles.client34} />
            <div className={styles.client35} />
            <div className={styles.client36} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client37} />
            <div className={styles.client38} />
            <div className={styles.client39} />
            <div className={styles.client40} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client41} />
            <div className={styles.client42} />
            <div className={styles.client43} />
            <div className={styles.client44} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client45} />
            <div className={styles.client46} />
            <div className={styles.client47} />
            <div className={styles.client48} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client49} />
            <div className={styles.client50} />
            <div className={styles.client51} />
            <div className={styles.client52} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client53} />
            <div className={styles.client54} />
            <div className={styles.client55} />
            <div className={styles.client56} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client57} />
            <div className={styles.client58} />
            <div className={styles.client59} />
            <div className={styles.client60} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client61} />
            <div className={styles.client62} />
            <div className={styles.client63} />
            <div className={styles.client64} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client65} />
            <div className={styles.client66} />
            <div className={styles.client67} />
            <div className={styles.client68} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client69} />
            <div className={styles.client70} />
            <div className={styles.client71} />
            <div className={styles.client72} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client73} />
            <div className={styles.client74} />
            <div className={styles.client75} />
            <div className={styles.client76} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client77} />
            <div className={styles.client78} />
            <div className={styles.client79} />
            <div className={styles.client80} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client81} />
            <div className={styles.client82} />
            <div className={styles.client83} />
            <div className={styles.client84} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client85} />
            <div className={styles.client86} />
            <div className={styles.client87} />
            <div className={styles.client88} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client89} />
            <div className={styles.client90} />
            <div className={styles.client91} />
            <div className={styles.client92} />
          </SwiperSlide>
        </Swiper>
        :
        <Swiper slidesPerView={1.7} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
          <SwiperSlide>
            <div className={styles.client1} />
            <div className={styles.client2} />
            <div className={styles.client3} />
            <div className={styles.client4} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client5} />
            <div className={styles.client6} />
            <div className={styles.client7} />
            <div className={styles.client8} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client9} />
            <div className={styles.client10} />
            <div className={styles.client11} />
            <div className={styles.client12} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client13} />
            <div className={styles.client14} />
            <div className={styles.client15} />
            <div className={styles.client16} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client17} />
            <div className={styles.client18} />
            <div className={styles.client19} />
            <div className={styles.client20} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client21} />
            <div className={styles.client22} />
            <div className={styles.client23} />
            <div className={styles.client24} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client25} />
            <div className={styles.client26} />
            <div className={styles.client27} />
            <div className={styles.client28} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client29} />
            <div className={styles.client30} />
            <div className={styles.client31} />
            <div className={styles.client32} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client33} />
            <div className={styles.client34} />
            <div className={styles.client35} />
            <div className={styles.client36} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client37} />
            <div className={styles.client38} />
            <div className={styles.client39} />
            <div className={styles.client40} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client41} />
            <div className={styles.client42} />
            <div className={styles.client43} />
            <div className={styles.client44} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client45} />
            <div className={styles.client46} />
            <div className={styles.client47} />
            <div className={styles.client48} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client49} />
            <div className={styles.client50} />
            <div className={styles.client51} />
            <div className={styles.client52} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client53} />
            <div className={styles.client54} />
            <div className={styles.client55} />
            <div className={styles.client56} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client57} />
            <div className={styles.client58} />
            <div className={styles.client59} />
            <div className={styles.client60} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client61} />
            <div className={styles.client62} />
            <div className={styles.client63} />
            <div className={styles.client64} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client65} />
            <div className={styles.client66} />
            <div className={styles.client67} />
            <div className={styles.client68} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client69} />
            <div className={styles.client70} />
            <div className={styles.client71} />
            <div className={styles.client72} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client73} />
            <div className={styles.client74} />
            <div className={styles.client75} />
            <div className={styles.client76} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client77} />
            <div className={styles.client78} />
            <div className={styles.client79} />
            <div className={styles.client80} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client81} />
            <div className={styles.client82} />
            <div className={styles.client83} />
            <div className={styles.client84} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client85} />
            <div className={styles.client86} />
            <div className={styles.client87} />
            <div className={styles.client88} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.client89} />
            <div className={styles.client90} />
            <div className={styles.client91} />
            <div className={styles.client92} />
          </SwiperSlide>
        </Swiper>
        }
      </div>

      {contatoOpen ? 
      
      <div className={styles.galleryModal}>
        <div className={styles.modalCloseContato} onClick={closeModalContato} />
            <div id='contact' className={styles.contact}>
              <div className={styles.contactWind} />
              <div className={styles.contactPointsV} />
              <div className={styles.contactTitle}>contato_</div>
              <div className={styles.contactTitleTag} />
              <div className={styles.contactText}>Traga sua marca para um time de talentos que cresce a cada novo projeto.</div>
              {loading ? <div className={styles.formLoading}><ReactLoading type={"spinningBubbles"} color={"#EB6099"} height={"20%"} width={"20%"}/></div> :
              <form className={styles.contactForm} onSubmit={onSubmit}>
                <input className={styles.formName} type="text" name="name" placeholder="Nome"></input>
                <input className={styles.formEmail} type="text" name="email" placeholder="Email"></input>
                <input className={styles.formPhone} type="text" name="phone" placeholder="Telefone"></input>
                <select className={styles.formSubject} type="text" name="subject" defaultValue={"DEFAULT"}>
                  <option value="DEFAULT" disabled hidden>Escolha um assunto</option>
                  <option value="1">Comercial</option>
                  <option value="2">Projetos</option>
                  <option value="3">Administrativo/Financeiro</option>
                </select>
                <textarea className={styles.formMessage} type="textarea" name="message" placeholder="Deixe sua mensagem aqui..."></textarea>
                <button className={styles.contactButton}>enviar &gt;</button>
              </form>}
              <div className={styles.contactPointsH} />
          </div>
        </div> 
      : null}
      
      <div id='reanimate' ref={reanimateRef} className={styles.reanimate}>
        <div className={styles.reanimateLogo}/>
        <div className={styles.reanimateText}>O <b>Re.animate</b> é uma Startup da POINT MEDIA utilizada na <b>produção de desdobramentos</b> de banners estáticos, vídeos e html5 com motion.</div>
        <div className={styles.reanimateLines} />
        {size.width >= 2400 ? 
        <Swiper slidesPerView={6} spaceBetween={10} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 1800 ? 
        <Swiper slidesPerView={4.4} spaceBetween={10} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 1600 ? 
        <Swiper slidesPerView={3.7} spaceBetween={10} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 1366 ? 
        <Swiper slidesPerView={3.2} spaceBetween={10} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 1280 ? 
        <Swiper slidesPerView={3.8} spaceBetween={10} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 768 ?
        <Swiper slidesPerView={2.5} spaceBetween={20} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        :
        size.width >= 430 ?
        <Swiper slidesPerView={1.4} spaceBetween={20} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        :
          <Swiper slidesPerView={1.2} spaceBetween={20} freeMode={true} loop={true} modules={[FreeMode]} className={styles.reanimateCards}>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateDA1}>
          <div className={styles.reanimateDA}>
            <div className={styles.reanimateDAlogo}/>
            <div className={styles.reanimateDAtext}>Crie diversas variações de conteúdos dinâmicos em um template animado com o seu KV.</div>
            <button className={styles.daButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateMM1}>
          <div className={styles.reanimateMM}>
            <div className={styles.reanimateMMlogo}/>
            <div className={styles.reanimateMMtext}>Anime as peças masters em HTML5 sem a necessidade de saber o código CSS ou Java Script.</div>
            <button className={styles.mmButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reanimateRA1}>
          <div className={styles.reanimateRA}>
            <div className={styles.reanimateRAlogo}/>
            <div className={styles.reanimateRAtext}>Desdobre a peça master em diversos formatos e especificações de mídia.</div>
            <button className={styles.raButton} onClick={openReanimate}>saiba mais &gt;</button>
          </div>
          </SwiperSlide>
        </Swiper>
        }
        <div className={styles.reanimatePoints} />
      </div>

      <div className={styles.footer}>
        <div className={styles.footerLogo} onClick={anchorVideo} />
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
            {/* <Link href="/mosaico" >
              <a className={styles.anchorMosaico}>mosaico</a>
            </Link> */}
            <div className={styles.anchorClients}><a href="https://producaopoint.s3.sa-east-1.amazonaws.com/mosaico/index.html">mosaico</a></div>
            <div className={styles.anchorClients} onClick={anchorClients}>clientes atendidos</div>
            <div className={styles.anchorReanimate} onClick={anchorReanimate}>re.animate</div>
            <div className={styles.anchorContact} onClick={openModalContato}>contato</div>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.whatsapp} onClick={openWhatsapp}></div>
          <div className={styles.linkedin} onClick={openLinkedin}></div>
          <div className={styles.instagram} onClick={openInstagram}></div>
          <div className={styles.facebook} onClick={openFacebook}></div>
        </div>
        <div className={styles.footerLocation}>
          <div className={styles.address}>Vila Madalena - São Paulo - SP</div>
        </div>
        <div className={styles.footerCopyright}>© pointmedia 2024</div>
        <button className={styles.complianceButton} onClick={openCompliance}>compliance &gt;</button>
      </div>
    </div>

  </div>
  )
}
