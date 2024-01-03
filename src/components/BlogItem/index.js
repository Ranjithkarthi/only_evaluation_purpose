// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachPost} = props
  const {title, description, publishedDate} = eachPost
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>{publishedDate}</p>
    </div>
  )
}

export default BlogItem
