import axios from "axios"

export default async function Blog({params}:any) { 
    
    const postId = (await params).blogId
    const blogs = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = blogs.data
    return <div>
        HII from Blog {data.id}
        <br />
        <h1>title- {data.title}</h1>
        <h1> body - {data.body}</h1>
    </div>
}

