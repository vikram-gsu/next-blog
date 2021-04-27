import {getAllPosts} from '@api';

getAllPosts().then((posts) => console.log(posts));
export default function Blog(){
    return <p>Test blog</p>
}