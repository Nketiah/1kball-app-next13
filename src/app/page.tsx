import { Inter } from 'next/font/google'
import styles from '@/app/home.module.css'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io"
import { VscWorkspaceTrusted } from "react-icons/vsc"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <div>
        <Image
          src={"/images/home_bg.png"}
          alt="home"
          height={400}
          width={200}
          style={{ width: '100%' }}
          className={styles.bgImage}
        />

        <Image
          src={"/images/poolBallN.png"}
          alt="poolball"
          sizes='100vw'
          width={200}
          height={492}
          className={styles.mainImage}
        />
      </div>
      <section className={styles.homeSection}>
        <div className={styles.sectionContent}>
        <h1 style={{color:"white", fontSize: 26}}>Integrate your Mobile or Web Application
            with our 1KBALL API
          </h1>
          <div>
            <button className={styles.homeButton}>Get Started</button>
             <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
               <IoIosArrowForward size={25}/>
               <p style={{fontSize: 20}}>View Docs</p>
             </div>
          </div>

          <div style={{marginTop: 60, marginBottom: 70, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h5 style={{margin: 5}}>Trusted and Secured</h5>
            <VscWorkspaceTrusted/>
          </div>
        </div>
      </section>
     
    </>
  )
}
