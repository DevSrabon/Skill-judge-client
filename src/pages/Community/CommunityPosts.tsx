import { usePosts } from "../../contexts/PostProvider";
import Spinner from "../../SharedComponent/Spinner/Spinner";
import PostCard from "./PostCard";


const CommunityPosts: any = () => {
    const { posts, isLoading, error }: any = usePosts();

    console.log(posts);

    if (isLoading) return <Spinner></Spinner>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>All Posts</h2>
            {
                posts.slice(0).reverse().map(post => <PostCard key={post._id} post={post}></PostCard>)
            }
        </div>
    );
};

export default CommunityPosts;