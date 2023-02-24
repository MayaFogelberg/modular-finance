import NewsItem from "./NewsItem"

//function that iterates over newsItems
const NewsItems = ({ newsItems }) => {
    return (
        <div className="news-items">
            {newsItems.map((newsItem) => {
                return <NewsItem key={newsItem.news_id} item={newsItem} />
            })}
        </div>
    )
}

export default NewsItems