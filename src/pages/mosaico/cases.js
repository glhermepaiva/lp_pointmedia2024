import styles from "../../styles/mosaico.module.css"
import { useEffect, useState } from "react";
import Link from 'next/link'

const fetchEmpresas = async () => {
    const res = await fetch('/data_clientes.json');
    const data = await res.json();
    return data;
};

export default function mosaicoFormatos() {

    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        fetchEmpresas().then(setEmpresas);
    }, []);
    
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
                    {empresas.map((empresa, index) => (
                        <Link href={`/mosaico/${empresa.cliente}`} key={index}>
                        <div className={styles.clienteLista}>{empresa.cliente}</div>
                        </Link>
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