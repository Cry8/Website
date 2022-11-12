import React , {Suspense, lazy}from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

const Error = lazy(() => delayForDemo(import('../pages/Error')));
const About = lazy(() => delayForDemo(import('../pages/About')));
const Author = lazy(() => delayForDemo(import('../pages/Author')));
const Trading = lazy(() => delayForDemo(import('../pages/Trading')));
const TradingIdeas = lazy(() => delayForDemo(import('../pages/TradingIdeas')));
const TechnicalAnalysis = lazy(() => delayForDemo(import('../pages/TechnicalAnalysis')));
const TradingSystem = lazy(() => delayForDemo(import('../pages/TradingSystem')));
const LatestPost = lazy(() => delayForDemo(import('../pages/LatestPost')));
const MostRead = lazy(() => delayForDemo(import('../pages/MostRead')));
const Blockchain = lazy(() => delayForDemo(import('../pages/crypto/Blockchain')));
const Nft = lazy(() => delayForDemo(import('..//pages/crypto/Nft')));
const Eth = lazy(() => delayForDemo(import('../pages/crypto/Eth')));
const Altcoins = lazy(() => delayForDemo(import('../pages/crypto/Altcoins')));
const Zk = lazy(() => delayForDemo(import('../pages/crypto/Zk')));
const PrivacyNetworks = lazy(() => delayForDemo(import('../pages/crypto/PrivacyNetworks')));
const GameFinance = lazy(() => delayForDemo(import('../pages/crypto/GameFinance')));
const DataManagement = lazy(() => delayForDemo(import('../pages/crypto/DataManagement')));
const News = lazy(() => delayForDemo(import('../pages/News')));
const UserProfile = lazy(() => delayForDemo(import('../pages/UserProfile')));


const Stack = () => {


  return (
    <React.Fragment>
      <BrowserRouter>
      <Suspense>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/author" element={<Author />} />
          <Route path="/Trading" element={<Trading />} />
          <Route path="/Tradingideas" element={<TradingIdeas />} />
          <Route path="/TechnicalAnalysis" element={<TechnicalAnalysis />} />
          <Route path="/TradingSystem" element={<TradingSystem />} />
          <Route path="/MostRead" element={<MostRead />} />
          <Route path="/LatestPost" element={<LatestPost />} /> 
          <Route path="/News" element={<News />} /> 
          <Route path="/Blockchain" element={<Blockchain />} />
          <Route path="/Nft" element={<Nft />} />
          <Route path="/Eth" element={<Eth />} />
          <Route path="/Altcoins" element={<Altcoins />} />
          <Route path="/Zk" element={<Zk />} />
          <Route path="/PrivacyNetworks" element={<PrivacyNetworks />} />
          <Route path="/GameFinance" element={<GameFinance />} />
          <Route path="/DataManagement" element={<DataManagement />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Stack
