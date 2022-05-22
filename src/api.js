import axios from 'axios';

let currPage = 0;
let pageSize = 12;

export const getData = async () => {
  currPage++;
  console.log(currPage);
  const start = (currPage - 1) * pageSize + 1;
  const end = start + pageSize;
  const data = await axios.get('./mockData.json');
  return {
    count: data.data.length,
    data: data.data.slice(start, end),
    done: end >= data.data.length,
  };
};
