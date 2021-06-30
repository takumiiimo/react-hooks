import axios from 'axios'
import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [clicked, setClicked] = useState(false)

    const handleClicked = () => {
        setClicked(!clicked)
    }

    useEffect(() => {
        // axiosの方法でjsonファイルを取得
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // 返り値
    .then(res => {
        setPosts(res.data)
    })

        // fetchの方法でjsonファイルを取得
        // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})
        // .then(res => res.json())
        // .then(data => {
        //     setPosts(data)
        // })
    }, [clicked])
    return (
        <div>
            <input type='text' value={id} onChange={evt => setId(evt.target.value)} />
            <br />
            <button type='button' onClick={handleClicked}>Get post</button>
            <br />
            {posts.title}
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}> {post.title} </li>)
                }
            </ul> */}
        </div>
    )
}

export default ApiFetch
