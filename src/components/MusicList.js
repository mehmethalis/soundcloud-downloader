import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { HoopSpinner } from "react-spinners-kit";


const loaderTag = <h6 className='loaderTag'>Yükleniyor...</h6>
const errorMessage = <h5 className='error'>Günlük Limit(50) Aşıldı... <i className="far fa-frown" /></h5>

class MusicList extends Component {

  constructor(props) {
    super(props);
    this.dowloand = this.dowloand.bind(this);
  }

  dowloand() {
    saveAs(this.props.state.music.musicList.streams[0].url, `${this.props.state.music.musicList.title}.mp3`);
  }

  render() {

    const card =
      (
        <Col className='music-card'>
          <h3 className='music-title'><i className="fab fa-napster" />  {this.props.state.music.musicList.title}</h3>
          <div>
            <iframe title='sound-embed' width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.state.music.musicList.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
            <div className='sound-em'><a href={this.props.state.music.musicList.uploader_url} title={this.props.state.music.musicList.uploader} target="_blank" rel="noreferrer" className='sound-em-i'>{this.props.state.music.musicList.uploader}</a> · <a href={this.props.state.music.musicList.url} title={this.props.state.music.musicList.title} target="_blank" rel="noreferrer" className='sound-em-i'>{this.props.state.music.musicList.title}</a></div>
          </div>

          <div className='music-meta'>
            <Row >
              <Col>
                <Button onClick={this.dowloand} type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
                  Gerçek İndirme Butonu
              </Button>
              </Col>
            </Row>
          </div>
        </Col>
      )

    return (
      <Container className='content-container '>
        {this.props.state.music.error.message && errorMessage}
        <Row className='content-row'>
          {!this.props.state.music.fetching && card}
          <div className='loader'>
            <HoopSpinner size={150} color="#ffffff" loading={this.props.state.music.fetching} />
          </div>
        </Row>
        {this.props.state.music.fetching && loaderTag}
      </Container>

    );
  }
}
const mapStateToProps = (state) => ({
  state
});


export default connect(mapStateToProps, null)(MusicList);