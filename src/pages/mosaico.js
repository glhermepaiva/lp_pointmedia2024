import styles from "../styles/mosaico.module.css"
import { useEffect, useState } from "react";

const fetchEmpresas = async () => {
    const res = await fetch('/data_clientes.json');
    const data = await res.json();
    return data;
  };

export default function formbr() {

    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        fetchEmpresas().then(setEmpresas);
    }, []);
    // teste
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLogo} />
                    <div className={styles.headerButtons}>
                        <div className={styles.headerButtonClients}>clientes</div>
                        <div className={styles.headerButtonCases}>cases</div>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                {empresas.map((empresa, index) => (
                    <div key={index} className={styles.client} style={{ backgroundImage: `url(${empresa.thumb})` }}>
                        <div className={styles.courtain} />
                        <img className={styles.clientLogo} src={empresa.logo} alt={`${empresa.nome} Logo`} />
                    </div>
                ))}
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