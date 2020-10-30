import {Container,Row,Col} from 'react-bootstrap'
const Footer =()=>{
    return(
        <Container  className='footer-container'>
            <Row className='footer-row'>
                <Col>©{new Date().getFullYear()} Tüm Hakları Çok Pis Saklıdır</Col>
            </Row>
        </Container>
    )
}

export default Footer;