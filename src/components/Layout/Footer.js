import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='footer-container'>
            <Row className='footer-row'>
                <Col ><i className="far fa-heart" />&nbsp; {new Date().getFullYear()} Tüm Hakları <a href='https://www.instagram.com/halisscicek/' target='_blank' rel='noreferrer'>Bana</a> Aittir.</Col>
                <div className='footer-link'>
                    <a href='https://github.com/mehmethalis' target='_blank' rel='noreferrer' ><i className="fab fa-github" /></a>
                    <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i className="fab fa-linkedin-in" /></a>
                </div>
            </Row>
        </Container>
    )
}

export default Footer;