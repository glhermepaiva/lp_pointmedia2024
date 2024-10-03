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
                const numA = parseInt(a.split('x')[0]); // Obter a largura
                const numB = parseInt(b.split('x')[0]); // Obter a largura
                return numA - numB; // Ordenar em ordem crescente
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
                const numA = parseInt(a.split('x')[0]); // Obter a largura
                const numB = parseInt(b.split('x')[0]); // Obter a largura
                return numA - numB; // Ordenar em ordem crescente
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
                const numA = parseInt(a.split('x')[0]); // Obter a largura
                const numB = parseInt(b.split('x')[0]); // Obter a largura
                return numA - numB; // Ordenar em ordem crescente
            });
    
            setFormatosDisponiveis(formatos);
        }
        setMenuReanimateAberto(false);
        setMenuVideoAberto(false);
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
                                        {formatosDisponiveis.map((formato, index) => (
                                            <div className={styles.buttonFormat} key={index} onClick={() => handleFormatoClick(formato, 'reanimate')}>
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
                                        {formatosDisponiveis.map((formato, index) => (
                                            <div className={styles.buttonFormat} key={index} onClick={() => handleFormatoClick(formato, 'video')}>
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
                                        {formatosDisponiveis.map((formato, index) => (
                                            <div className={styles.buttonFormat} key={index} onClick={() => handleFormatoClick(formato, 'emkt')}>
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
                                        <div className={styles.caseThumb} key={pecaIdx}>
                                        <img
                                            src={peca.thumb[0]}
                                            alt={`Thumbnail de ${formatoAtivo}`}
                                            onClick={() => handleOpenModal(peca.pecas[0])}
                                        />
                                        </div>
                                    ) : null
                                    )
                                )}
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