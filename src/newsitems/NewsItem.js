import "./newsitem.css"
import { useState } from 'react';

const NewsItem = ({ item }) => {

    const [isClicked, setIsClicked] = useState(false);

    const translatedValidTags = item.properties.tags
        .map((Tag) => { return tagTranslator[Tag] })
        .filter((tag) => tag !== undefined)
        .join(", ")
   

    function toggleInformation(){
        setIsClicked(!isClicked);
    }

  
    
    return <div className="news-item">
         <div className="card">
            <div className="container">
                    <h3>Title: 
                        <b> {item.content.title}</b>
                    </h3>
                    <h4>Author: {item.author.name} </h4>
                    <h4>Tags: {translatedValidTags} 
                    </h4>
                    <h4>Type: {item.properties.type}</h4>
                    {!isClicked &&
                    <button className="button" onClick={toggleInformation}>
                          Read more
                    </button>
                    }
                    {isClicked &&
                    <div>
                    <div dangerouslySetInnerHTML={{ __html: item.content.html}} />
                    <button className="button" onClick={toggleInformation}>
                          Close
                    </button>
                    </div>
                    
                    
                    }
                    
                    
                </div>
            </div> 
        </div>
}

export default NewsItem

/* { <div dangerouslySetInnerHTML={{ __html: item.content.html}} /> } */

const tagTranslator = {
    ":regulatory": "Regulatory",
    "sub:report:annual": "Annual report",
    "sub:report:interim": "Interrim report",
    "sub:ci" : "Corporate Information"
}


