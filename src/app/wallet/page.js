'use client'
import Image from 'next/image'
import styles from '../css/page.module.css'
import dash from '../css/dash.module.css'
import main from '../css/main.module.css'
import nav from '../css/nav.module.css'
import wallet from '../css/wallet.module.css'
import Link from 'next/link';
//import Sendxrp from './xrp/Sendxrp.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, signInWithGoogle, logout } from 'firebase/clientApp.js'

export default function Wallet() {
    return (
        <>
            <main className={styles.main}>
                <Row>
                    <Col xs={1} className={nav.navContainer}>
                        <div className={nav.navButtons}>
                            <Link href="/"><button className={nav.unselected}>A</button></Link>
                            <Link href="/wallet"><button className={nav.selected}>B</button></Link>
                            <button className={nav.unselected}>C</button>
                        </div>
                    </Col>
                    <Col xs={11}>
                        <h1>Wallet</h1>
                        <Row>
                            <Col xs={8}>
                                <Row>
                                    <Col className={dash.dashBox2}>
                                        <h2 className={dash.dashBoxHeader}>Total Borrowed</h2>
                                        <span className={dash.dashBoxNum}>1,508.87<span className={dash.dashBoxNumUnit}>XRP</span> → $1234.42</span>
                                        <p className={dash.dashBoxDescription}>Last transaction: 2023-05-02</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={dash.dashBox3}>
                                        <h2 className={dash.dashBoxHeader}>Repay</h2>
                                    </Col>
                                    <Col className={dash.dashBox3}>
                                        <h2 className={dash.dashBoxHeader}>Borrow</h2>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4}>
                                <Row>
                                    <Col className={wallet.walletTransactionsBox}>
                                        <h2 className={dash.dashBoxHeader}>Transaction History</h2>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>


            </main>
        </>

    )
}
