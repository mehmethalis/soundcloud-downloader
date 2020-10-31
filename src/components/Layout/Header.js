import {Container,Row,Col} from 'react-bootstrap'
import { Input } from 'antd';
const { Search } = Input;

const icon = <i className="fab fa-napster"/>
const Header=()=>{
    return(
        <Container  className='header-container'>
            <Row className='header-row'>
                <Col><Search className='search-box' size='large'  prefix={icon} placeholder='SoundCloud Music Link...' enterButton /></Col>
            </Row>
        </Container>
    )
}

export default Header;