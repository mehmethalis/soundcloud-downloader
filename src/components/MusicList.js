import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getMusic } from '../actions/music';

class MusicList extends Component {

  title = this.props.state.music.musicList.title;
  musicUri = this.props.state.music.musicList.url;
  iframeUri = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.state.music.musicList.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  uploaderUri = this.props.state.music.musicList.uploader_url;
  uploader = this.props.state.music.musicList.uploader;
  file = this.props.state.music.musicList.streams[0].url;
  size = this.props.state.music.musicList.streams[0].filesize_pretty;
  
  dowloand=()=> {
    saveAs(this.file,`${this.title}.mp3`);
  }

  render() {
    
    return (
      <Container className='content-container '>
        <Row className='content-row'>
          <Col className='music-card'>
            <h3 className='music-title'><i className="fab fa-napster" />  {this.title}</h3>
            <div>
              <div>
                <iframe title='sound-embed' width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={this.iframeUri}></iframe>
                <div className='sound-em'><a href={this.uploaderUri} title={this.uploader} target="_blank" rel="noreferrer" className='sound-em-i'>{this.uploader}</a> · <a href={this.musicUri} title={this.title} target="_blank" rel="noreferrer" className='sound-em-i'>{this.title}</a></div>
              </div>

            </div>

            <div className='music-meta'>
              <Row>
                <Col>
                  <Button  onClick={this.dowloand} type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
                    Download
                  </Button>
                  <h6 className='music-size'>{this.size}</h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

    );
  }
}
const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = {
  
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicList);