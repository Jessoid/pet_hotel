import React from "react";
import { Container, Col, Row, Carousel} from 'react-bootstrap';


export default function Contacts() {
    return (
        <Container fluid className="p-0" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
            <div fluid className="text-white" style={{
                backgroundImage: 'url(/images/page-banner1.png)',
                backgroundSize:'cover',
                textAlign: 'center',
                paddingTop: '5rem',
                paddingBottom: '3rem'
            }}>
                <h2 style={{fontSize: '32px'}}>КОНТАКТЫ И НАШИ РАБОТНИКИ</h2>
                <p style={{fontSize: '16px', marginTop:'30px'}}>Домашние питомцы - наши особые гости</p>
            </div>

            <Row xs={2} md={2} lg={1} className="g-4 mx-auto my-2 justify-content-center mt-5" style={{maxWidth: '900px' }}>
                <Col >
                    <p style={{ color: 'rgb(229, 86, 4)', fontWeight: 'bold', fontSize:'24px'}}>О НАС</p>
                    <p className="lh-lg" style={{fontSize:'16px', fontWeight:'500'}}> Мы - команда профессионалов, готовых заботиться о вашем питомце, как о собственном. В гостинице мы создали уютное пространство, где каждый животное чувствует себя как дома. Наши сотрудники - это не просто специалисты, но и любящие друзья ваших питомцев. Вместе мы создаем атмосферу заботы, веселья и безопасности.</p>
                </Col>
            </Row>
            <Row xs={2} md={2} lg={1} className="g-4 mx-auto my-2 justify-content-center mt-5" style={{maxWidth: '900px' }}>
                <Col>
                    <div>
                        <p style={{ color: 'rgba(38, 87, 124, 1)', fontWeight: 'bold', fontSize:'24px'}}>КОНТАКТЫ</p>
                        <ul className="lh-lg" style={{fontSize:'16px', fontWeight:'400', textDecoration:'underLine', color:'rgba(38, 87, 124, 1)'}}>
                            <li style={{listStyleImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnVTPaxNREP5mMzGhViWHFEkbPEpVggcvvUjBehBKEWpC9WT/Bo8K3gUvgh48ePAkbiz446KHqjdRFEXBSi+2JmklCsUSsPreTmfTpt1uk5KXD/btvPnmfTs7b94jRFCdQl4s3wfhd+qvmc4+wSocwS2jUkyeRCDPiTAQztdSnAbMOBxB4bByCZmG4W9qZqOkBFIaKlsfDvDCoWH5alxsk70p1zdinAQhMtWOJFB++QuG4SI4fw4Hdelge0Gs8n8swgFeun97Y3aKSd0KjbnuNIk+tRL/Ubs/4q8nxRQGfCzDER6FFQTexvwfexFrCm6kKXdj/lPVcfShBzQFlzJ2RhONFj9DfXwNPYBaRq2UmBRQOcIFWouzQ76ZhQO2mjb30D4KBI+jnB7DmYUijrVb+PMiCtUijnYUbKaUNNP66wsR1yEmft0855t4OQquFBP3jOVPIJ6rlNifm8CBFk/xLyxN4niQ4DfY2UZrQYAb+p7VrK/oE780vu7zzFj2AWq7BENoX57WVnqhZgrdQmT+X90WqBP/4wKPJjw8U+H96FYTZqTjTZIvm1eemBEN+47u5J4OCt7teTUd9vH514o9ocG3dGo6KWmD3c4N2/PkwxK6xOIEcpzmy1qCMyKSJ6KGan0wYu8c8fG+FbcOO1qnE/AazUQAAAAASUVORK5CYII=")'}}>
                                +372 5846 9585
                            </li>
                            <li style={{listStyleImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGSSURBVHgB5ZS7LwRRFId/Z+aOpZXIhiWsSGSJRIuERIFGiHhEp9NoNBTiH6DRqFQK1QSdQqHxSDToEPFM1iNKspvdvXePM5bNJjb2QbdfM+fMmfPl3jtnBig56Du4G0G1UmqOwA0oAALdxlgvBV08p3Lhdgrlvoh9waB6FAXfJ9mE6lxELS8te3NCIvOjaMgvK2v2ok9hYDNxGmcdZPCapKYAU1J61pOsm2pdnKWFj+Oq32epGeUzs2DdKue4ncvEwE7c6NYyNjMgNR0eVX1poTZcwYwFE1MPBGfg8dpMSN4pXQc/RIxjr/Z8rYcd5fQmSN2IZFEqFWlhBpVMvFLdaF/JKoM1ru42zENy/1y2dmkRDwZc3WGDAzVN9gUxr0qtKlNgZd0Pydsm2giPqRMbFD1k3RYImRZt6F2O5yRJ5DJTY7ZWhV8gQrtcdrug9sLnsC0LPciBQn70Up4PWvhnUoPt0Bv+ClEkLUwYfeR9PigSmYj7+KveT8VfvEzCb4yal/EIogC8n0Nc6+WGLTyhNPkAUfCYUlZuVQgAAAAASUVORK5CYII=")'}}>
                                pawpalace@info.ee
                            </li>
                            <li style={{listStyleImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgBlZM7aFRBFIb/c+/saiNbWGWTNQlGsBcRC/FViLa6q2ghdmIlSlQIsoiiKCiiTbQRC4vs+kglgmI0lUWwtAga1F1XJCjxhZKdmeO5wSR37iN388PlzJzHN2cel5CiRnnFAJE5SsBumfbLR8R4xx6eMPTtnhFMJtVRkrNZVkNEqMowh2T9lcLzxZq+mAn8VFaXxHsGnelKd02fTgU2K/kKwY5gOWI+0F03CzWeQ2d7LpL+y2N7bKWn14B1r8SPi++3wyNcGNsGFeuwsTe3yfP5VSjABthZqumxMKBRVlt9wjNGCGJoY/FBe8LpUCmzwemN8TQKC1Sq65fMeO6kKrM5tmXD3mp3K/wWaYrEiL1CDAjYabeIBpBOXBueWbZfY0DP+BNODWNHa5/aEkUFZyhml5Nq/dcLSy3Wg1oVf0pMXwj6k0BnGe1H8OWBcG4PMV+WSGExh5tFmD6qwzgdBrcqB3fHaYewSs7yOkh9gFUfBTbswObWpOF5mAMMNNvWN8R8Q4ci8Jc/eX0z7HOA/aOYkS2cQoeylqvr7uFHKjDQ5LS5K2Yc2RrvuW9vRZ0x4PYX0KIj8nhnUkDBBX73ZvXhpJiX5Ox9iCm5jEMyNNEYBf8A+GDXKN53DAxUqpnHYoaifsuo/o8lipCh1n51VbZ/Yi6Zca1Y1yeXylcZPHSt14Of3/gFC+SLdTOYlf8PZR/I184nPrkAAAAASUVORK5CYII=")'}}>
                                Narva mnt 9, Lasnamäe, Tallinn Estonia
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row  xs={2} md={2} lg={1} className="g-4 mx-auto my-2 justify-content-center mt-5" style={{maxWidth: '900px' }}>
                <div>
                    <p style={{ color: 'rgb(229, 86, 4)', fontWeight: 'bold', fontSize:'24px'}}>НАШИ РАБОТНИКИ</p>
                </div>
                <Carousel style={{ marginLeft: '200px', marginBottom:'100px'}}>
                    <Carousel.Item>
                        <Row  xs={2} md={2} lg={3} flex justify-content-between>
                            <Col>
                                <img src="images/employee1.png" alt="Employee 1" />
                            </Col>
                            <Col>
                                <img src="images/employee2.png" alt="Employee 2" />
                            </Col>
                            <Col>
                                <img src="images/employee3.png" alt="Employee 3" />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <img src="images/employee1.png" alt="Employee 1" />
                            </Col>
                            <Col>
                                <img src="images/employee2.png" alt="Employee 2" />
                            </Col>
                            <Col>
                                <img src="images/employee3.png" alt="Employee 3" />
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}