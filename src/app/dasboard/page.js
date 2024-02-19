import React from 'react'
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import styles from './dashboard.module.css'
import DashBoardNav from '@/components/DashBoardNav/DashBoardNav';
import OverallNav from '@/components/OverallNav/OverallNav';
const page = () => {
    return (
        <div className={styles.body_container}>
            <div className='absolute inset-0 -z-10'>
                <Image src="/images/about/about.png" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100vh' }}></Image>
            </div>

            <div className={styles.marquee}>
                <div className={styles.typing}>
                    <p id="word"></p><p className={styles.blink}>|</p>
                </div>
            </div>

            <div>

                <div className={styles.card_holder}>
                    <Link href="/profile">
                        <div className={styles.card}>
                            <div className={styles.wrapper}>
                                <img src="/assets/card-cover2.jpg" />
                            </div>
                            <h1 className={`${styles.title}`}>MY PROFILE</h1>
                            <img src="/assets/card3.png" className={styles.character} />
                        </div>
                    </Link>
                    <Link href="/registrations">
                        <div className={styles.card}>
                            <div className={styles.wrapper}>
                                <img src="/assets/card-cover5.jpg" />
                            </div>
                            <h1 className={`${styles.title}`}>MY REGISTERED EVENTS</h1>
                            <img src="/assets/card6.png" className={styles.character} />
                        </div>
                    </Link>

                </div>
                <div className={styles.card_holder}>
                    <Link href="/pending-registrations">
                        <div className={styles.card}>
                            <div className={styles.wrapper}>
                                <img src="/assets/card-cover4.jpg" />
                            </div>
                            <h1 className={`${styles.title}`}>PENDING REGISTRATIONS</h1>
                            <img src="/assets/card9.png" className={styles.character} />
                        </div>
                    </Link>
                    <Link href="/watchlist">
                        <div className={styles.card}>
                            <div className={styles.wrapper}>
                                <img src="/assets/card-cover1.jpg" />
                            </div>
                            <h1 className={`${styles.title}`}>MY WATCHLIST</h1>
                            <img src="/assets/card4(1).png" className={styles.character} />
                        </div>
                    </Link>
                </div>


            </div>
            

            <Script src="/js/profile.js" defer></Script>
        </div>

    );
}

export default page
