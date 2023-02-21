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
                    <h4>Title: 
                        <b> {item.content.title}</b>
                    </h4>
                    <h5>Author: {item.author.name} </h5>
                    <h5>Tags: {translatedValidTags} 
                    </h5>
                    <h5>Type: {item.properties.type}</h5>
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


