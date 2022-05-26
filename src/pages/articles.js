import styles from '../styles/articles.module.css'
import Link from 'next/link'

const articles = () => {

    return (
        <div className={styles.articlesPage}>
            <div className={styles.articlesHeader}>
                <Link href="/?uri=" as={"/"}>
                    <span className={styles.articlesLogo} />
                </Link> 
                <Link href="/?uri=" as={"/"}>
                    <span className={styles.articlesClose} />
                </Link> 
            </div>
            <div className={styles.articlesImage} />

            <div className={styles.articlesTitle1}>
                <div className={styles.articlesTag}>
                    <div className={styles.articlesTagtext}>Novo!</div>
                    <div className={styles.articlesTagline} />
                </div>
                <div className={styles.articlesBullet1} />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </div>

            <div className={styles.articlesText1}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is</div>
            
            <div className={styles.articlesBlueTitle}>
                <div className={styles.articlesBullet2} />
                E tem mais...
            </div>

            <div className={styles.articlesNews}>
                
                <div className={styles.news1}>
                    <div className={styles.articlesSubtitle1}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners.</div>
                    <div className={styles.articlesSubtext1}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners. A partir de agora o que levava dias de trabalho, a POINT otimizou para algumas horas ou minutos com o lançamento do re.animate. Uma plataforma de automação que veio pra facilitar a agilizar a produção de banners digitais,</div>
                </div>
                
                <div className={styles.news2}>
                    <div className={styles.articlesSubtitle2}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners.</div>
                    <div className={styles.articlesSubtext2}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners. A partir de agora o que levava dias de trabalho, a POINT otimizou para algumas horas ou minutos com o lançamento do re.animate. Uma plataforma de automação que veio pra facilitar a agilizar a produção de banners digitais,</div>
                </div>
                
                <div className={styles.news3}>
                    <div className={styles.articlesSubtitle3}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners.</div>
                    <div className={styles.articlesSubtext3}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners. A partir de agora o que levava dias de trabalho, a POINT otimizou para algumas horas ou minutos com o lançamento do re.animate. Uma plataforma de automação que veio pra facilitar a agilizar a produção de banners digitais,</div>
                </div>
                
                <div className={styles.news4}>
                    <div className={styles.articlesSubtitle4}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners.</div>
                    <div className={styles.articlesSubtext4}>A POINT traz para o mercado digital o re.animate, uma plataforma única de produção de banners. A partir de agora o que levava dias de trabalho, a POINT otimizou para algumas horas ou minutos com o lançamento do re.animate. Uma plataforma de automação que veio pra facilitar a agilizar a produção de banners digitais,</div>
                </div>
                
            </div>
            
        </div>
    )
}

export default articles;