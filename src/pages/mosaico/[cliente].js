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
    const [menuAberto, setMenuAberto] = useState(false);

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

    if (!dataCliente) {
        return <div>Carregando...</div>;
    }

    if (!dataCliente.itens || dataCliente.itens.length === 0) {
        return <div>Nenhum item disponível</div>;
    }

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
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
                                    {item === 'reanimate' && (<div>
                                        <div className={styles.clientButtonReanimate} onClick={toggleMenu}>Reanimate</div>
                                        
                                        {menuAberto && (
                                            <div className={styles.clientButtonFormats}>
                                                {dataCliente.reanimate.map((peca, idx) => (
                                                    <div className={styles.buttonFormat} key={idx}>{peca.dimensao}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>)}
                                    {item === 'video' && <div className={styles.clientButtonVideo}>Vídeo</div>}
                                    {item === 'emkt' && <div className={styles.clientButtonEmkt}>Email Marketing</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.clientTitleContent}>
                        <div className={styles.clientTitle}>reanimate_ 300x250px</div>
                        <div className={styles.clientContent}>
                            {dataCliente ?
                            <div>
                                <div>{dataCliente.reanimate[0].pecas[0]}</div>
                                <div>{dataCliente.reanimate[0].pecas[1]}</div>
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