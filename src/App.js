import './App.css';
import InfiniteScroller from './components/InfiniteScroller';
import { getData } from './api';
import ProductPage from './components/ProductPage';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const loadNextPage = () => {
    if (!dataLoading) {
      console.log('calling next page');
      setDataLoading(true);
      getData().then((res) => {
        setData((currData) => {
          currData.push({ data: res.data, isVisible: true });
          return currData;
        });
        setDataLoading(false);
        if (res.done) {
          setDataLoaded(true);
        }
      });
    }
  };
  return (
    <div className='App'>
      <InfiniteScroller callback={loadNextPage} shouldDisconnect={dataLoaded}>
        <div>
          {data.map((prodPage, idx) => (
            <ProductPage productPage={prodPage} key={idx}></ProductPage>
          ))}
        </div>
      </InfiniteScroller>
    </div>
  );
}

export default App;
