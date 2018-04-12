import React from 'react';
import Comment from '../Comment';

export default props => {
    const { 
        id: postId,
        showComment,
        title,
    } = props;

    return (
        <div>
            <h2>{title}</h2>

            {showComment && 
                <Comment
                    postId={postId}
                />
            }
        </div>
    );
}
