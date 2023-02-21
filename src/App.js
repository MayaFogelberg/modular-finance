import { useState, useEffect } from 'react';
import NewsItems from './newsitems/NewsItems';
import Radiobuttons from './filter/Radiobuttons';
import Checkbuttons from './filter/Checkbuttons';




function App() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('Both');
  const [reportStates, setReportStates] = useState([]);

  


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
  if (category === "Both") {
    return posts
  }
  return category === post.properties.type 

 })
 .filter((post) => {
  if(reportStates.includes("Regulatory"))
  {
    return post.properties.tags.includes(":regulatory")
 }
 if(reportStates.includes("annualReport"))
  {
    return post.properties.tags.includes("sub:report:annual")
 }
 if(reportStates.includes("interrimReport"))
 {
   return post.properties.tags.includes("sub:report:interim")
}
if(reportStates.includes("corporateInformation"))
{
  console.log("includes")
  return post.properties.tags.includes("sub:ci")
}
 
 else return posts
}
 )


  return (
    <div style={{ padding: 20 }}>
      <h1 >Press releases</h1>
      <h4>Type:</h4>
      <Radiobuttons category={category} setCategory={setCategory} />
      <h4>Type of report:</h4>
      <Checkbuttons reportStates={reportStates} setReportStates={setReportStates } />
      <NewsItems newsItems={filteredPosts} />
    </div>


  );
}

export default App;
