import Image from 'next/image'
import React from 'react'
import styles from '@/app/navbar.module.css'
import { RxHome } from "react-icons/rx"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import Link from 'next/link'


const AppNavigation = () => {

// Navigation for the entire app
// This will appear on the top of every page

  return (
    <>
      <header className={styles.container}>
        <Image
          src="/images/navigation_bg.png"
          alt="Next.js Logo"
          width={100}
          height={127}
          className={styles.navImage}
          style={{ width: '100vw'}}
        />
        <div className={styles.navItem}>
          <div className={styles.flexItem}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/applogo.png"
                alt='1kball logo'
                width={70}
                height={40}
              />
            </div>
            <div className={styles.searchBox}>
              <div className={styles.container}>
                <input className={styles.searchInput} type="text" id='search' />
                 <BsSearch className={styles.searchIcon} />
                <button className={styles.searchButton} type='submit'>Search</button>
              </div>
              <div className={styles.navLink}>
                <div className={styles.linkItem}>
                  <RxHome className={styles.navIcon} />
                  <Link href="/"> Home</Link>
                </div>
                <div className={styles.linkItem}>
                  <RxHome className={styles.navIcon} />
                  <Link href="result">Result</Link>
                </div>
                <div className={styles.linkItem}>
                  <AiOutlineInfoCircle className={styles.navIcon} />
                  <Link href="about">About us</Link>
                </div>
              </div>
            </div>
            <div className={styles.notice} >
              <p className={styles.notification}>Friday, February 24, 2023, 8:53 PM   Time Zone: China(GMT+8)</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default AppNavigation