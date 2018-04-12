import React from 'react';
import { getPosts } from '../api';
import Post from '../Post';

export default class Posts extends React.PureComponent {
    state = {
        posts: []
    }

    componentDidMount() {
        getPosts().then(posts => this.setState({ posts }) )
    }

    componentWillUnmount() {
        this.setState = () => {};
    }

    render() {
        return (
            <React.Fragment>
                <hr />
                I just listed some Posts data HERE for now:
                <hr />
                {
                    this.state.posts.map(post => (
                        <Post
                            showComment={false}
                            {...post}
                        />
                    ))
                }
            </React.Fragment>
        );
    }
}
