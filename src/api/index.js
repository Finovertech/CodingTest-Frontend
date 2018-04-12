// your AJAX code goes here

// example: https://github.com/typicode/jsonplaceholder#how-to

// http://jsonplaceholder.typicode.com/posts
// http://jsonplaceholder.typicode.com/posts/1
// http://jsonplaceholder.typicode.com/posts/1/comments
// http://jsonplaceholder.typicode.com/comments?postId=1

const base = 'http://jsonplaceholder.typicode.com';

export const getPosts = async () => 
    fetch(`${base}/posts`)
    .then(resp => resp.json())
    .catch(alert);

export const getComments = async (postId) => 
    ([]); // I didn't have time to finish this, sorry...
