import { useState, useEffect } from 'react';
import NewsItems from './newsitems/NewsItems';
import Radiobuttons from './filter/Radiobuttons';
import Checkbuttons from '.filter/Checkbuttons';




function App() {
  const [posts, setPosts] = useState([]);
  const [categorie, setCategorie] = useState('Both');
  const [report, setReport] = useState('');


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
 
 const filteredPosts = posts.filter((post) => {
  if (categorie == "both") {
    return true
  }
  return post.category == item.properties.type
 })
 
  return (
    <div>
      <h1 >Press releases</h1>
      <h2>Filter:</h2>
      <Radiobuttons categorie={categorie} setCategorie={setCategorie} />
      <Checkbuttons report={report} setReport={setReport } />
      <NewsItems newsItems={filteredPosts(posts)} />
    </div>


  );
}

export default App;
