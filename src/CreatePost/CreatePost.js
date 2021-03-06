import React, { Component } from 'react';
import PostForm from '../PostForm/PostForm';
import './CreatePost.css'

export default class CreatePost extends Component {
    constructor(props) {
        super()
        this.state= {
            isButtonClicked: false
        }
    }

    handleFormRender = (e) => {
        // console.log('function working')
        this.setState({
            isButtonClicked: true
        }) 
    }


    render() {
        return (
            <div className='create-form'>
                <button className='create-button' onClick={(e) => this.handleFormRender(e)}>Create Post</button>
                {this.state.isButtonClicked ? <PostForm movie_db_id={this.props}/> : null }
            </div>
        )
    }
}