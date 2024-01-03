// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {BlogsList} = props
  return (
    <div>
      {BlogsList.map(each => (
        <BlogItem key={each.id} eachPost={each} />
      ))}
    </div>
  )
}

export default BlogList
