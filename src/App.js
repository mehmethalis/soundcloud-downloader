import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { Layout } from 'antd';

import HeaderC from './components/Layout/Header';
import FooterC from './components/Layout/Footer';
import MusicList from './components/MusicList';

const { Header, Footer, Content } = Layout;

function App({music}) {
 
  return (
      <Layout className='app'>
        <Header className='header'> <HeaderC/> </Header>
          <Content className='content'><MusicList/></Content>
        <Footer className='footer'><FooterC/></Footer>
    </Layout>
  );
}

const mapStateToProps=({music})=>({
  music
});

const mapDispatchToProps={

};
export default connect(mapStateToProps,mapDispatchToProps)(App);
