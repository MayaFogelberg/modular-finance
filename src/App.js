import { useState, useEffect } from 'react';
import NewsItems from './newsitems/NewsItems';
import Filter from './filter/Filter'



function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://feed.mfn.se/v1/feed/7c0dc3f4-0d57-4bea-ba07-94a9ff1f543f.json')
       .then((res) => res.json())
       .then((data) => {
          console.log(data.items)
          setPosts(data.items);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
 

  return (
    <div>
      <h1 >Press releases</h1>
      <h2>Filter:</h2>
      <Filter />
      <NewsItems newsItems={posts} />
    </div>


  );
}

export default App;
