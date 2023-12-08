import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const BlogPage = () => {
    // define state
    const [blog, setBlog] = useState<any>([])
    // get campaignName from params
    const {blogID} = useParams()
    
    useEffect(() => {
        const fetchCampaign = async() => {
            // collect response
            const blogResponse = await fetch('http://localhost:3001/community-blog/' + blogID)
            // get campaign Data
            const blogData = await blogResponse.json()   
            // set the campaign data to be received by the UI
            setBlog(blogData)
        }
        fetchCampaign()
    }, [blogID]
    )

    if(!blog || !blog._id) {
        return <h1>404: Campaign Not Found!</h1>
    }

  return (
    <div className='campaign-page'>
        <h1>{blog.title}</h1>
        <p>We are on the Blog page... It will be updated soon!</p>
    </div>
  )
}

export default BlogPage
