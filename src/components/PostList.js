import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMessage:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                console.log(response);
                this.setState({
                    posts:response.data
                })
            })
            .catch((error) =>{
                console.log(error);
                this.setState({
                    errorMessage:'Error Occurred...!!!'
                })
            })
    }
    render() {
        const {posts, errorMessage} = this.state;
        return (
            <div>
                Lists of posts
                {
                    posts.length? 
                    posts.map((post) => 
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <h3>{post.body}</h3>
                        </div>
                    ):null
                }
                {
                    errorMessage?<h2>{errorMessage}</h2>:null
                }
            </div>
        )
    }
}

export default PostList
