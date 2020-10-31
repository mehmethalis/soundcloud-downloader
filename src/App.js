import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from 'antd';

import HeaderC from './components/Layout/Header';
import FooterC from './components/Layout/Footer';
import MusicList from './components/MusicList';


const { Header, Footer, Content } = Layout;
function App() {

  return (
      <Layout >
        <Header className='header'> <HeaderC /> </Header>
        <Content className='content'>
          <MusicList />
          </Content>
        <Footer className='footer'><FooterC /></Footer>
      </Layout>
  );
}

export default App;
