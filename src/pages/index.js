import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function LandingPage() {

  return (
    <div className={styles.page}>
      <Head>
        <title>POINT MEDIA</title>
        <meta name='description' content='Motion é o que realmente nos move' />
      </Head>
      
      <div className={styles.header}>
        <div className={styles.logoPoint} />
        <div className={styles.hamburger} />
      </div>

      <div className={styles.news}>
        <div className={styles.carPicture} />
        <div className={styles.tag}>
          <div className={styles.tagText}>Novo!</div>
          <div className={styles.tagLine} />
        </div>
        <div className={styles.newsTitle}> <div className={styles.newsBullet} /> Tem novidade na POINT! <br/> Ganhamos a conta da CAOA para divulgação do novo Tiggo 8 2022.</div>
        <div className={styles.newsText}>Conquistamos mais um super cliente! Agora a conta de produção digital da CAOA CHERRY é da POINT e logo, logo você já vai poder acompanhar a nova campanha do TIGGO 8 1.6 turbo GDI 2022. <br/> Confira aqui como ficou a peça master!</div>
        <div className={styles.play}>
          <div className={styles.playText}>Dê um play!</div>
          <div className={styles.playButton} />
        </div>
        <div className={styles.carouselBullets}></div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutPoint}>a POINT_</div>
        <div className={styles.aboutTitle}>Somos inspiração, criatividade e muito movimento. A gente não para nunca e motion é o que realmente nos move.</div>
        <div className={styles.aboutImage} />
        <div className={styles.aboutText}>Desde de 2017 seguimos o ritmo dinâmico da mídia online, ad ops e ad server, somos especialistas na produção em larga escala de assets digitais, usando motion design em banners display HTML5 e vídeos. <br/><br/>Desenvolvemos  projetos customizados com tecnologia de DCO, XML e Feeds, inserindo recursos  de interatividade para potencializar o engajamento dos usuários e os resultados das campanhas digitais.</div>
        <div className={styles.aboutLine} />
        <div className={styles.aboutOffice} />
        <div className={styles.blackBg}>
          <div className={styles.owners}>
            <div className={styles.aboutMychel}>
              <div className={styles.aboutMychelPicture} />
              <div className={styles.aboutMychelName}>Mychel Martins</div>
              <div className={styles.aboutMychelJob}>CEO</div>
            </div>
            <div className={styles.aboutThiago}>
              <div className={styles.aboutThiagoPicture} />
              <div className={styles.aboutThiagoName}>Thiago Ianni</div>
              <div className={styles.aboutThiagoJob}>CBO</div>
            </div>
          </div>
          <div className={styles.aboutText2}>Criado por <b>Mychel Martins</b> e <b>Thiago Ianni</b>, a <b>POINT MEDIA</b> opera com um braço de tecnologia, contando com programadores fullstack, desenvolvendo integrações de soluções que facilitam  o acompanhamento das publicações de campanhas online em plataformas diversas.</div>
          <div className={styles.aboutTitle2}>Isso faz com que o trabalho operacional seja mais rápido e minimize erro de mensuração.</div>
        </div>
      </div>

      <div className={styles.team}>
        <div className={styles.teamArt} />
        <div className={styles.teamTitle}>nosso time_</div>
        <div className={styles.teamText}>Reunimos um time de feras do mercado digital com vasta experiência e passagens por grandes empresas digitais.</div>
        <div className={styles.teamPictures}>
          <div className={styles.Priscila}>
            <div className={styles.PriscilaPicture} />
            <div className={styles.PriscilaName}>Priscila Michelin</div>
            <div className={styles.PriscilaJob}>Jurídico</div>
          </div>
          <div className={styles.Will}>
            <div className={styles.WillPicture} />
            <div className={styles.WillName}>William</div>
            <div className={styles.WillJob}>Head Produção</div>
          </div>
          <div className={styles.MarcellaAt}>
            <div className={styles.MarcellaAtPicture} />
            <div className={styles.MarcellaAtName}>Marcella</div>
            <div className={styles.MarcellaAtJob}>Head Atendimento</div>
          </div>
          <div className={styles.Louro}>
            <div className={styles.LouroPicture} />
            <div className={styles.LouroName}>Leonardo</div>
            <div className={styles.LouroJob}>Head Tech</div>
          </div>
          <div className={styles.Robson}>
            <div className={styles.RobsonPicture} />
            <div className={styles.RobsonName}>Robson</div>
            <div className={styles.RobsonJob}>Head de Mídia</div>
          </div>
          <div className={styles.Tato}>
            <div className={styles.TatoPicture} />
            <div className={styles.TatoName}>Anderson</div>
            <div className={styles.TatoJob}>Head E-mail MKT</div>
          </div>
          <div className={styles.Danielle}>
            <div className={styles.DaniellePicture} />
            <div className={styles.DanielleName}>Danielle</div>
            <div className={styles.DanielleJob}>Head Financeiro</div>
          </div>
          <div className={styles.MarcellaRh}>
            <div className={styles.MarcellaRhPicture} />
            <div className={styles.MarcellaRhName}>Marcella</div>
            <div className={styles.MarcellaRhJob}>Head RH</div>
          </div>
        </div>
      </div>
        

    </div>
  )
}
