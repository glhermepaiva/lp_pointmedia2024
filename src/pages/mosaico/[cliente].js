import styles from "../../styles/mosaico.module.css"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'

const fetchData = async () => {
    const res = await fetch('/data_clientes.json');
    const data = await res.json();
    return data;
};

export default function mosaicoCliente() {

    const router = useRouter();
    const { cliente } = router.query;
    const [dataCliente, setDataCliente] = useState(null);
    const [menuReanimateAberto, setMenuReanimateAberto] = useState(false);
    const [menuVideoAberto, setMenuVideoAberto] = useState(false);
    const [menuEmktAberto, setMenuEmktAberto] = useState(false);
    const [categoriaAtiva, setCategoriaAtiva] = useState('');
    const [formatoAtivo, setFormatoAtivo] = useState('');
    const [itemAtivoReanimate, setItemAtivoReanimate] = useState(null);
    const [itemAtivoVideo, setItemAtivoVideo] = useState(null);
    const [itemAtivoEmkt, setItemAtivoEmkt] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            const filteredData = data.find(item => item.cliente === cliente);
            setDataCliente(filteredData);
        };

        if (cliente) {
            getData();
        }
    }, [cliente]);

    useEffect(() => {
        if (dataCliente) {
            const primeiraCategoria = dataCliente.itens[0];
            setCategoriaAtiva(primeiraCategoria);
    
            if (primeiraCategoria === 'video' && dataCliente.video.length > 0) {
                setFormatoAtivo(dataCliente.video[0].dimensao);
            } else if (primeiraCategoria === 'reanimate' && dataCliente.reanimate.length > 0) {
                setFormatoAtivo(dataCliente.reanimate[0].dimensao);
            } else if (primeiraCategoria === 'emkt' && dataCliente.emkt.length > 0) {
                setFormatoAtivo(dataCliente.emkt[0].dimensao);
            }
        }
    }, [dataCliente]);

    if (!dataCliente) {
        return <div>Carregando...</div>;
    }

    if (!dataCliente.itens || dataCliente.itens.length === 0) {
        return <div>Nenhum item disponível</div>;
    }

    const toggleMenuReanimate = () => {
        setMenuReanimateAberto(!menuReanimateAberto);
    };

    const toggleMenuVideo = () => {
        setMenuVideoAberto(!menuVideoAberto);
    };

    const toggleMenuEmkt = () => {
        setMenuEmktAberto(!menuEmktAberto);
    };

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/mosaico">
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
                        {dataCliente ?
                        <div>{dataCliente.cliente}</div>
                        :
                        <div></div>
                        }
                        <div className={styles.formatsButtons}>
                            {dataCliente.itens.map((item, index) => (
                                <div className={styles.clientButtonContainer} key={index}>

                                    {item === 'reanimate' && Array.isArray(dataCliente.reanimate) && (<div>
                                        {menuReanimateAberto ? 
                                        <div className={styles.clientButtonReanimate} onClick={toggleMenuReanimate}>Reanimate<div className={styles.arrowUp} /></div> 
                                        :
                                        <div className={styles.clientButtonReanimate} onClick={toggleMenuReanimate}>Reanimate<div className={styles.arrowDown} /></div>
                                        }
                                        {menuReanimateAberto && (
                                            <div className={styles.clientButtonFormats}>
                                                {dataCliente.reanimate.map((pecaRean, idx1) => (
                                                    <div className={`${styles.buttonFormat} ${itemAtivoReanimate === idx1 ? styles.active : ''}`} key={idx1} onClick={()=> {
                                                        setCategoriaAtiva('reanimate');
                                                        setFormatoAtivo(pecaRean.dimensao);
                                                        setItemAtivoReanimate(idx1); 
                                                        setItemAtivoVideo(null);
                                                        setItemAtivoEmkt(null);
                                                    }}>{pecaRean.dimensao}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>)}

                                    {item === 'video' && Array.isArray(dataCliente.video) && (<div>
                                        {menuVideoAberto ? 
                                        <div className={styles.clientButtonVideo} onClick={toggleMenuVideo}>Video<div className={styles.arrowUp} /></div> 
                                        :
                                        <div className={styles.clientButtonVideo} onClick={toggleMenuVideo}>Video<div className={styles.arrowDown} /></div>
                                        }
                                        {menuVideoAberto && (
                                            <div className={styles.clientButtonFormats}>
                                                {dataCliente.video.map((pecaVid, idx2) => (
                                                    <div className={`${styles.buttonFormat} ${itemAtivoVideo === idx2 ? styles.active : ''}`} key={idx2} onClick={()=> {
                                                        setCategoriaAtiva('video');
                                                        setFormatoAtivo(pecaVid.dimensao);
                                                        setItemAtivoVideo(idx2);
                                                        setItemAtivoReanimate(null);
                                                        setItemAtivoEmkt(null);
                                                    }}>{pecaVid.dimensao}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>)}

                                    {item === 'emkt' && Array.isArray(dataCliente.emkt) && (<div>
                                        {menuEmktAberto ? 
                                        <div className={styles.clientButtonEmkt} onClick={toggleMenuEmkt}>Emkt<div className={styles.arrowUp} /></div> 
                                        :
                                        <div className={styles.clientButtonEmkt} onClick={toggleMenuEmkt}>Emkt<div className={styles.arrowDown} /></div>
                                        }
                                        {menuEmktAberto && (
                                            <div className={styles.clientButtonFormats}>
                                                {dataCliente.emkt.map((pecaEmkt, idx3) => (
                                                    <div className={`${styles.buttonFormat} ${itemAtivoEmkt === idx3 ? styles.active : ''}`} key={idx3} onClick={()=> {
                                                        setCategoriaAtiva('emkt');
                                                        setFormatoAtivo(pecaEmkt.dimensao);
                                                        setItemAtivoEmkt(idx3);
                                                        setItemAtivoReanimate(null);
                                                        setItemAtivoVideo(null);
                                                    }}>{pecaEmkt.dimensao}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.clientTitleContent}>
                        <div className={styles.clientTitle}>{categoriaAtiva}_ {formatoAtivo}px</div>
                        <div className={styles.clientContent}>
                            {dataCliente ?
                            <div>
                                Oi mundo
                            </div>
                            :
                            <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerContainer}>
                    <Link href="/">
                        <div className={styles.footerLogo} />
                    </Link>
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