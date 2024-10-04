import styles from "../../styles/mosaico.module.css"
import { useEffect, useState } from "react";
import Link from 'next/link'

export default function mosaicoFormatos() {

    const [dataClientes, setDataClientes] = useState([]);
    const [categoriaAtiva, setCategoriaAtiva] = useState('reanimate');
    const [formatoAtivo, setFormatoAtivo] = useState('300x250');
    const [formatosDisponiveis, setFormatosDisponiveis] = useState([]);
    const [menuReanimateAberto, setMenuReanimateAberto] = useState(false);
    const [menuVideoAberto, setMenuVideoAberto] = useState(false);
    const [menuEmktAberto, setMenuEmktAberto] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPecaLink, setSelectedPecaLink] = useState(null);
    const [itemAtivoReanimate, setItemAtivoReanimate] = useState(null);
    const [itemAtivoVideo, setItemAtivoVideo] = useState(null);
    const [itemAtivoEmkt, setItemAtivoEmkt] = useState(null);

    const [width, height] = formatoAtivo.split('x').map(Number);

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('/data_clientes.json');
          const data = await res.json();
          setDataClientes(data);
        };
        fetchData();
      }, []);
    
      const handleFormatoClick = (formato, categoria) => {
        setFormatoAtivo(formato);
        setCategoriaAtiva(categoria)
      };

      const toggleMenuReanimate = () => {
        setMenuReanimateAberto(prev => !prev);
    
        if (!menuReanimateAberto) {
            const categoria = 'reanimate';
    
            const formatos = [];
            dataClientes.forEach(cliente => {
                if (cliente[categoria]) {
                    cliente[categoria].forEach(peca => {
                        if (!formatos.includes(peca.dimensao)) {
                            formatos.push(peca.dimensao);
                        }
                    });
                }
            });

            formatos.sort((a, b) => {
                const numA = parseInt(a.split('x')[0]);
                const numB = parseInt(b.split('x')[0]);
                return numA - numB;
            });
    
            setFormatosDisponiveis(formatos);
        }
        setMenuVideoAberto(false);
        setMenuEmktAberto(false);
    };

    const toggleMenuVideo = () => {
        setMenuVideoAberto(prev => !prev);
    
        if (!menuVideoAberto) {
            const categoria = 'video';
    
            const formatos = [];
            dataClientes.forEach(cliente => {
                if (cliente[categoria]) {
                    cliente[categoria].forEach(peca => {
                        if (!formatos.includes(peca.dimensao)) {
                            formatos.push(peca.dimensao);
                        }
                    });
                }
            });

            formatos.sort((a, b) => {
                const numA = parseInt(a.split('x')[0]);
                const numB = parseInt(b.split('x')[0]);
                return numA - numB;
            });
    
            setFormatosDisponiveis(formatos);
        }
        setMenuReanimateAberto(false);
        setMenuEmktAberto(false);
    };
    
    const toggleMenuEmkt = () => {
        setMenuEmktAberto(prev => !prev);
    
        if (!menuEmktAberto) {
            const categoria = 'emkt';
    
            const formatos = [];
            dataClientes.forEach(cliente => {
                if (cliente[categoria]) {
                    cliente[categoria].forEach(peca => {
                        if (!formatos.includes(peca.dimensao)) {
                            formatos.push(peca.dimensao);
                        }
                    });
                }
            });

            formatos.sort((a, b) => {
                const numA = parseInt(a.split('x')[0]);
                const numB = parseInt(b.split('x')[0]);
                return numA - numB;
            });
    
            setFormatosDisponiveis(formatos);
        }
        setMenuReanimateAberto(false);
        setMenuVideoAberto(false);
    };

    const handleOpenModal = (pecaLink) => {
        setSelectedPecaLink(pecaLink);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPecaLink(null);
    };
    
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/">
                        <div className={styles.headerLogo} />
                    </Link>
                    <div className={styles.headerButtons}>
                        <Link href="/mosaico">
                            <div className={styles.headerButtonClients}>clientes</div>
                        </Link>
                        <div className={styles.headerButtonCases}>cases</div>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                


            <div className={styles.mainContainer}>
                <div className={styles.clientSidebar}>
                    <div>Cases</div>
                    <div className={styles.formatsButtons}>
                        <div className={styles.clientButtonContainer}>

                            <div>
                                {menuReanimateAberto ? (
                                    <div className={styles.clientButtonReanimate} onClick={toggleMenuReanimate}>
                                        Reanimate
                                        <div className={styles.arrowUp} />
                                    </div>
                                ) : (
                                    <div className={styles.clientButtonReanimate} onClick={toggleMenuReanimate}>
                                        Reanimate
                                        <div className={styles.arrowDown} />
                                    </div>
                                )}
                                {menuReanimateAberto && (
                                    <div className={styles.clientButtonFormats}>
                                        {formatosDisponiveis.map((formato, idx1) => (
                                            <div className={`${styles.buttonFormat} ${itemAtivoReanimate === idx1 ? styles.active : ''}`} key={idx1} onClick={() => {
                                                handleFormatoClick(formato, 'reanimate')
                                                setItemAtivoReanimate(idx1); 
                                            }}>
                                                {formato}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>


                            <div>
                                {menuVideoAberto ? (
                                    <div className={styles.clientButtonVideo} onClick={toggleMenuVideo}>
                                        Video
                                        <div className={styles.arrowUp} />
                                    </div>
                                ) : (
                                    <div className={styles.clientButtonVideo} onClick={toggleMenuVideo}>
                                        Video
                                        <div className={styles.arrowDown} />
                                    </div>
                                )}
                                {menuVideoAberto && (
                                    <div className={styles.clientButtonFormats}>
                                        {formatosDisponiveis.map((formato, idx2) => (
                                            <div className={`${styles.buttonFormat} ${itemAtivoVideo === idx2 ? styles.active : ''}`} key={idx2} onClick={() => {
                                                handleFormatoClick(formato, 'video');
                                                setItemAtivoVideo(idx2); 
                                            }}>
                                                {formato}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>


                            <div>
                                {menuEmktAberto ? (
                                    <div className={styles.clientButtonEmkt} onClick={toggleMenuEmkt}>
                                        Emkt
                                        <div className={styles.arrowUp} />
                                    </div>
                                ) : (
                                    <div className={styles.clientButtonEmkt} onClick={toggleMenuEmkt}>
                                        Emkt
                                        <div className={styles.arrowDown} />
                                    </div>
                                )}
                                {menuEmktAberto && (
                                    <div className={styles.clientButtonFormats}>
                                        {formatosDisponiveis.map((formato, idx3) => (
                                            <div className={`${styles.buttonFormat} ${itemAtivoEmkt === idx3 ? styles.active : ''}`} key={idx3} onClick={() => {
                                                handleFormatoClick(formato, 'emkt');
                                                setItemAtivoEmkt(idx3); 
                                            }}>
                                                {formato}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.clientTitleContent}>
                        {categoriaAtiva == 'emkt' ?
                        <div className={styles.clientTitle}>{categoriaAtiva}_ {formatoAtivo}</div>
                        :
                        <div className={styles.clientTitle}>{categoriaAtiva}_ {formatoAtivo}px</div>
                        }
                        
                        {categoriaAtiva && formatoAtivo && (
                            <div className={styles.clientContentContainer}>
                                {dataClientes.map((cliente) =>
                                    cliente[categoriaAtiva]?.map((peca, pecaIdx) =>
                                    peca.dimensao === formatoAtivo ? (
                                        <div className={styles.caseThumb} key={pecaIdx} style={{ backgroundImage: `url(${peca.thumb[0]})` }} onClick={() => handleOpenModal(peca.pecas[0])} />
                                    ) : null
                                    )
                                )}
                            </div>
                        )}
                        {modalOpen && selectedPecaLink && (
                            <div className={styles.modal}>
                                <div className={styles.modalContent}>
                                <div className={styles.closeButton} onClick={handleCloseModal} />
                                <iframe className={styles.iframe}
                                src={`${selectedPecaLink}?autoplay=1&muted=1`}
                                allowFullScreen
                                allow="autoplay; encrypted-media"
                                width={width}
                                height={height}
                                />
                                </div>
                            </div>
                            )}
                </div>
            </div>
        </div>

        <div className={styles.footer}>
                    <div className={styles.footerContainer}>
                        <div className={styles.footerLogo} />
                        <div className={styles.footerSocials}>
                            <div className={styles.whatsapp} />
                            <div className={styles.linkedin} />
                            <div className={styles.instagram} />
                            <div className={styles.facebook} />
                        </div>
                    </div>
                </div>
        </div>
    )

}