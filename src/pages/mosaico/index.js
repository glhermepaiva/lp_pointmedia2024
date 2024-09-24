import styles from "../../styles/mosaico.module.css"
import { useEffect, useState } from "react"
import Link from 'next/link'

const fetchEmpresas = async () => {
    const res = await fetch('/data_clientes.json');
    const data = await res.json();
    return data;
};

const handleReload = () => {
    window.location.href = '/mosaico';
};

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

export default function mosaico() {

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
                        <div className={styles.headerButtonClients} onClick={handleReload}>clientes</div>
                        <Link href="/mosaico/cases">
                            <div className={styles.headerButtonCases}>cases</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                {empresas.map((empresa, index) => (
                    <Link href={`/mosaico/${empresa.cliente}`} key={index}>
                    <div className={styles.client} style={{ backgroundImage: `url(${empresa.thumb})` }}>
                        <div className={styles.courtain} />
                        <img className={styles.clientLogo} src={empresa.logo} alt={`${empresa.cliente} Logo`} />
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLogo} onClick={handleReload} />
                    <div className={styles.footerSocials}>
                        <div className={styles.instagram} onClick={openInstagram}></div>
                        <div className={styles.linkedin} onClick={openLinkedin}></div>
                        <div className={styles.facebook} onClick={openFacebook}></div>
                    </div>
                </div>
            </div>
        </div>
    )

}