import { Container, Row, Col } from 'react-bootstrap'
import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Input } from 'antd';
import { getMusic } from '../../actions/music';
const { Search } = Input;
const icon = <i className="fab fa-napster" />

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        this.props.getMusic(this.state.value);
        this.setState({value:''});
      }
   
    render() {
        
        return (
            <Container className='header-container'>
                <Row className='header-row'>
                    <Col><Search onSearch={this.handleSubmit} onChange={this.handleChange} value={this.state.value} className='search-box' size='large' prefix={icon} placeholder='SoundCloud Music Link...' enterButton /></Col>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = {
    getMusic: getMusic
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);