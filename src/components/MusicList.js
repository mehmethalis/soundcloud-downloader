import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';



class MusicList extends Component {

  render() {
    const iframeUri=`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.state.music.musicList.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
    const uploaderUri=this.props.state.music.musicList.uploader_url;
    const uploader=this.props.state.music.musicList.uploader;
    const musicUri=this.props.state.music.musicList.url;
    const title=this.props.state.music.musicList.title;
    console.log(this.props)
    return (
      <Container className='content-container '>
        <Row className='content-row'>
          <Col className='music-card'>
            <h3 className='music-title'><i className="fab fa-napster" />  {title}</h3>
            <div>
              <div>
                <iframe title='sound-embed' width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={iframeUri}></iframe>
                <div className='sound-em'><a href={uploaderUri} title={uploader} target="_blank" rel="noreferrer" className='sound-em-i'>{uploader}</a> · <a href={musicUri} title={title} target="_blank" rel="noreferrer" className='sound-em-i'>{title}</a></div>
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
const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = {
 
};
export default connect(mapStateToProps,mapDispatchToProps) (MusicList);