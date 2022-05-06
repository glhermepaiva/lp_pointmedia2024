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
        <div className={styles.newsText}>Conquistamos mais um super cliente! <br/>Agora a conta de produção digital da CAOA CHERRY é da POINT e logo, logo você já vai poder acompanhar a nova campanha do TIGGO 8 1.6 turbo GDI 2022. <br/> Confira aqui como ficou a peça master!</div>
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
      



      
      <div className={styles.wwd}>
        <div className={styles.wwdAlien} />
        <div className={styles.wwdTitle}>o que a gente faz_</div>
        <div className={styles.wwdSubtitle}>Vamos da criação ao projeto de automação para mídia e produção. </div>
        <div className={styles.wwdWorks}>
          <div className={styles.wwdWork1}>
            <div className={styles.wwd1image} />
            <div className={styles.wwd1text}>Criação e design (moodboard e kv + motion design);</div>
          </div>
          <div className={styles.wwdWork2}>
            <div className={styles.wwd2image} />
            <div className={styles.wwd2text}>Produção e desdobramento de banners digitais;</div>
          </div>
          <div className={styles.wwdWork3}>
            <div className={styles.wwd3image} />
            <div className={styles.wwd3text}>Projetos de DCO para otimização de produção;</div>
          </div>
          <div className={styles.wwdWork4}>
            <div className={styles.wwd4image} />
            <div className={styles.wwd4text}>HUB mídia de performance e gestão de Adserver;</div>
          </div>
          <div className={styles.wwdWork5}>
            <div className={styles.wwd5image} />
            <div className={styles.wwd5text}>Projetos de automação para mídia e produção.</div>
          </div>
        </div>
        <div className={styles.wwdText}>Criamos Hubs de performance para agências e clientes diretos, onde operamos Mídia Programática, SEM, Social, Mobile, WebTV e podemos interligar a operação de mídia com a nossa equipe de produção, criando e desdobrando banners HTML5, vídeos e estáticos para que o processo operacional de mídia flua de forma unificada e ganhe dinâmica nas publicações das campanhas.</div>
      </div>





      <div className={styles.hwd}>
        <div className={styles.hwdBalls} />
        <div className={styles.hwdTitle}>como a gente faz_</div>
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
        <div className={styles.hwdArrows}>
          <div className={styles.arrowLeft} />
          <div className={styles.arrowRight} />
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





      <div className={styles.previousWorks}>
        <div className={styles.pwArt} />
        <div className={styles.pwBalls} />
        <div className={styles.pwTitle}>o que a gente já fez_</div>
        <div className={styles.pwGallery}>
          <div className={styles.gallery1} />
          <div className={styles.gallery2} />
          <div className={styles.gallery3} />
          <div className={styles.gallery4} />
          <div className={styles.gallery5} />
          <div className={styles.gallery6} />
          <div className={styles.gallery7} />
          <div className={styles.gallery8} />
          <div className={styles.gallery9} />
          <div className={styles.gallery10} />
          <div className={styles.gallery11} />
          <div className={styles.gallery12} />
          <div className={styles.gallery13} />
          <div className={styles.gallery14} />
          <div className={styles.gallery15} />
          <div className={styles.gallery16} />
          <div className={styles.gallery17} />
          <div className={styles.gallery18} />
          <div className={styles.gallery19} />
          <div className={styles.gallery20} />
          <div className={styles.gallery21} />
          <div className={styles.gallery22} />
          <div className={styles.gallery23} />
          <div className={styles.gallery24} />
        </div>
      </div>





      <div className={styles.cases}>
        <div className={styles.casesTitle}>nossos cases_</div>
        <div className={styles.case1Title}>AdOps Vivo</div>
        <div className={styles.casesArrows}>
          <div className={styles.arrowLeft} />
          <div className={styles.arrowRight} />
        </div>
        <div className={styles.case1Image} />
        <div className={styles.case1Info}>
          <div className={styles.case1Highlights}>
            <div className={styles.case1Subtitle1}>Highlights</div>
            <div className={styles.case1Text1}>• Inicio da operação em 2019 <br/><br/>• Gestão de Ad Ops via Adserver CM Google <br/><br/>• Zeladoria da taxonomia de mídia Vivo <br/><br/>• Gestão da operação de DCO via Studio Google <br/><br/>• Operação de produção digital com automação <br/><br/>• Operação de produção de email mkt com automação</div>
          </div>
          <div className={styles.case1Results}>
            <div className={styles.case1Subtitle2}>Resultados</div>
            <div className={styles.case1Text2}>• Em 2022 ainda estamos com a operação Vivo CM + DCO (criamos processo com SLA de 2h) <br/><br/>• Desenvolvemos um Sistema de Taxonomia automatizado para as agências que trabalham com Vivo <br/><br/>• Produção digital: media de uma semana para entregar do Pack de banners, reduzimos para horas <br/><br/>• Produção de email mkt: zeramos o backlog de meses em 2 dias <br/><br/>• Implementamos ferramenta de automação de banners no processo da Vivo</div>
          </div>
        </div>
      </div>





      <div className={styles.clients}>
        <div className={styles.clientsTitle}>nossos clientes_</div>
        <div className={styles.clientsArt} />
        <div className={styles.clientsGallery}>
          <div className={styles.client1} />
          <div className={styles.client2} />
          <div className={styles.client3} />
          <div className={styles.client4} />
          <div className={styles.client5} />
          <div className={styles.client6} />
          <div className={styles.client7} />
          <div className={styles.client8} />
          <div className={styles.client9} />
          <div className={styles.client10} />
          <div className={styles.client11} />
          <div className={styles.client12} />
          <div className={styles.client13} />
          <div className={styles.client14} />
          <div className={styles.client15} />
          <div className={styles.client16} />
          <div className={styles.client17} />
          <div className={styles.client18} />
          <div className={styles.client19} />
          <div className={styles.client20} />
          <div className={styles.client21} />
          <div className={styles.client22} />
          <div className={styles.client23} />
          <div className={styles.client24} />
          <div className={styles.client25} />
          <div className={styles.client26} />
          <div className={styles.client27} />
          <div className={styles.client28} />
          <div className={styles.client29} />
          <div className={styles.client30} />
          <div className={styles.client31} />
          <div className={styles.client32} />
          <div className={styles.client33} />
          <div className={styles.client34} />
          <div className={styles.client35} />
          <div className={styles.client36} />
          <div className={styles.client37} />
          <div className={styles.client38} />
          <div className={styles.client39} />
          <div className={styles.client40} />
          <div className={styles.client41} />
          <div className={styles.client42} />
          <div className={styles.client43} />
          <div className={styles.client44} />
          <div className={styles.client45} />

        </div>
      </div>





      <div className={styles.careers}>
        <div className={styles.careersArt} />
        <div className={styles.careersTitle}>vagas_</div>
        <div className={styles.careersText}>Se você é uma pessoa inquieta, inovadora, gosta de desafios e está sempre atras de novidades, então você tem muito do que buscamos para fazer parte do time de talentos da POINT.</div>
        <div className={styles.careersOpenings}>02 vagas para DA pleno <br/><br/>01 vaga para atendimento sênior<br/><br/>01 vaga para redator junior</div>
      </div>





      <div className={styles.contact}>
        <div className={styles.contactArt} />
        <div className={styles.contactTitle}>contato_</div>
        <div className={styles.contactText}>Traga sua marca para um time de talentos que cresce a cada projeto novo.</div>
        <div className={styles.contactForm}>
          <select className={styles.formSubject}>
            <option value="" disabled selected hidden>Escolha um assunto</option>
            <option>Ajuda 1</option>
            <option>Ajuda 2</option>
            <option>Ajuda 3</option>
          </select>
          <input className={styles.formName} type="text" name="name" placeholder="Nome"></input>
          <input className={styles.formEmail} type="text" name="email" placeholder="Email"></input>
          <input className={styles.formPhone} type="text" name="phone" placeholder="Telefone"></input>
          <textarea className={styles.formMessage} type="textarea" name="message" placeholder="Deixe sua mensagem aqui..."></textarea>
        </div>
        <button className={styles.contactButton}>enviar &gt;</button>
      </div>





      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <div className={styles.linkAbout}>a POINT</div>
          <div className={styles.linkTeam}>nosso time</div>
          <div className={styles.linkWwd}>o que a gente faz</div>
          <div className={styles.linkHwd}>como a gente faz</div>
          <div className={styles.linkPw}>o que a gente já fez</div>
          <div className={styles.linkCases}>nossos cases</div>
          <div className={styles.linkClients}>nossos clientes</div>
          <div className={styles.linkCareers}>vagas</div>
          <div className={styles.linkContact}>contato</div>
        </div>
        <div className={styles.footerLogo} />
        <div className={styles.footerSocials}>
          <div className={styles.instagram}></div>
          <div className={styles.twitter}></div>
          <div className={styles.facebook}></div>
        </div>
        <div className={styles.footerLocation}>
          <div className={styles.pin}></div>
          <div className={styles.address}>Vila Madalena - São Paulo - SP<br/>Telefone: (11) 3368-9006</div>
        </div>
        <div className={styles.footerCopyright}>© pointmedia 2022</div>
      </div>





    </div>
  )
}
