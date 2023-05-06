'use client'
import Image from 'next/image'
import styles from './css/page.module.css'
import dash from './css/dash.module.css'
import main from './css/main.module.css'
//import Sendxrp from './xrp/Sendxrp.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
      <>
          <main className={styles.main}>
              <h1>DropLend</h1>
                  <Row>
                      <Col xs={8}>
                          <Row>
                              <Col class={dash.dashBox1}>
                                  <h2 className={dash.dashBoxHeader}>Market</h2>
                                  <button className={main.circleBtn}>A</button>
                              </Col>
                              <Col className={dash.dashBox2}>
                                  <h2 className={dash.dashBoxHeader}>Borrowed</h2>
                              </Col>
                          </Row>
                          <Row>
                              <Col className={dash.dashBox3}>
                                  <h2 className={dash.dashBoxHeader}>Lending Overview</h2>
                              </Col>
                          </Row>
                      </Col>
                      <Col xs={4}>
                          <Row>
                              <Col className={dash.dashBox4}>
                                  <h2 className={dash.dashBoxHeader}>AI Consultant</h2>
                              </Col>
                          </Row>
                          <Row>
                              <Col className={dash.dashBox5}><h2 className={dash.dashBoxHeader}>Recent History</h2></Col>
                          </Row>
                      </Col>
                  </Row>

          </main>
      </>

  )
}
