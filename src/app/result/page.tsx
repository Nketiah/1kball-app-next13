"use client"

import React,{useEffect} from 'react'
import styles from '@/app/result.module.css'
import DrawNums from '@/components/DrawNums'
import { BiSearch } from "react-icons/bi"
import { GoCalendar } from "react-icons/go"
import { VscWorkspaceTrusted } from "react-icons/vsc"


const Result = () => {

  const buttonList: string[] = ["5D", "3D", "Fast", "PK 10", "11x5", "PC 28", "49/7"]
  const gameNames: string[] = ["Unlimited 5D Games", "Unlimited 3D Games", "Unlimited 4D Games", "Unlimited", "5D Games", "3D Games"]
  const draws: number[] = [4, 5, 6, 8, 7]
  


  return (
    <>
      <main className={styles.main}>
        <div>
          <div>
            <h1 style={{ color: "white", marginBottom: 10, paddingTop: 20 }}>1K Ball Results</h1>
          </div>
          <div>
            <h5 style={{ color: "white" }}>
              The latest 1kball results are published here immediately after the draw has taken place.
              <br />You can view the latest numbers including detailed information of winners and prizes.
            </h5>
          </div>
        </div>
        <section>
          <div style={{ marginTop: 25 }}>
            {buttonList && buttonList.map((button, index) =>
              <button className={`${index === 0 ? styles.activeGame : styles.buttons}`} key={index}>{button }</button>
            )}
          </div>
          <div className={styles.resultSection}>
            <div className={styles.gameNames}>
              <div className={styles.gameNamesHeader}>{gameNames[0]} <BiSearch className={styles.searchIcon} size={30} /> </div>
              <ul>

                {

                  gameNames.map((button) =>
                    <li style={{ alignSelf: "flex-start" }} key={Math.random()}>{button}</li>
                  )
                }
              </ul>
            </div>
            <div className={styles.gameDraws}>
              <div>
               <div className={styles.drawsTableHeader}>
                   <div className={styles.activeDate} >All Games</div>
                   <div className={styles.datesWrapper}><div>SUN</div> <div>26 FEB</div> </div>
                   <div className={styles.datesWrapper}><div style={{color:"tomato"}}>MON</div> <div style={{color:"tomato"}}>26 FEB</div> </div>
                   <div className={styles.datesWrapper}><div>TUE</div> <div>26 FEB</div> </div>
                   <div className={styles.datesWrapper}><div>WED</div> <div>26 FEB</div> </div>
                   <div className={styles.datesWrapper}><div>THUR</div> <div>26 FEB</div> </div>
                   <div className={styles.datesWrapper}><div>FRI</div> <div>26 FEB</div> </div>
                   <div className={styles.datesWrapper}><div>SAT</div> <div>26 FEB</div> </div>
                   <div> <GoCalendar size={30}/> </div>
               </div>
                <table className={styles.tableHeader} >
                  <thead>
                    <tr style={{ height: 35 }}>
                      <th>ID Number</th>
                      <th>Result Number</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.tableRow}>
                      <td>001020</td>
                      <td className={styles.drawNumbers}><DrawNums draws={draws} /></td>
                      <td>00:00:00</td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>001020</td>
                      <td className={styles.drawNumbers}><DrawNums draws={draws} /></td>
                      <td>00:00:00</td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>001020</td>
                      <td className={styles.drawNumbers}><DrawNums draws={draws} /></td>
                      <td>00:00:00</td>
                    </tr>
                  </tbody>
                </table>
                 <div className={styles.pagination}>pagination placeholder</div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.footer}>
           <h5>Trusted and Secured</h5>
           <VscWorkspaceTrusted style={{margin: 5}}/>
        </div>
      </main>
    </>
  )
}

export default Result