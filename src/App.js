import './App.css';
import InfiniteScroller from './components/InfiniteScroller';
import { getData } from './api';
import Product from './components/Product';
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
        setData((currData) => [...currData, ...res.data]);
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
        <div className='grid'>
          {data.map((prod, idx) => (
            <Product key={idx} product={prod}></Product>
          ))}
        </div>
      </InfiniteScroller>
    </div>
  );
}

export default App;
