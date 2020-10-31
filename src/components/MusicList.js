import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


class MusicList extends Component {
  render() {
    return (
      <Container className='content-container'>
        <Row className='content-row'>
          <Col className='music-card'>
            <h3 className='music-title'>Eminem | Not Afraid</h3>
            <div>
              <div>
                <iframe title='sound-embed' width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256257141&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div className='sound-em'><a href="https://soundcloud.com/eminemofficial" title="Eminem" target="_blank" rel="noreferrer" className='sound-em-i'>Eminem</a> · <a href="https://soundcloud.com/eminemofficial/not-afraid-2" title="Not Afraid" target="_blank" rel="noreferrer" className='sound-em-i'>Not Afraid</a></div>
              </div>

            </div>

            <div className='music-meta'>
              <Row>
                <Col>
                  <Button type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
                    Download
                  </Button>
                  <h6 className='music-size'>11.2MB</h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

    );
  }
}
export default MusicList;