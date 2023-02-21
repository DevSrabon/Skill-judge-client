import { useQuery } from "@tanstack/react-query";
import {
    createContext,
    ReactElement,
    useContext,
} from "react";


const POST_CONTEXT = createContext<unknown>(null);

const PostProvider = ({ children }: { children: ReactElement }) => {

    const { isLoading, error, refetch, data: posts }: any = useQuery({
        queryKey: ["communityPost"],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/community/posts`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`,
                },
            }).then((res) => res.json()),
    });

    const postInfo = {
        isLoading,
        error,
        refetch,
        posts,
    };

    return (
        <POST_CONTEXT.Provider value={postInfo}>{children}</POST_CONTEXT.Provider>
    );
};
export const usePosts = () => {
    const context = useContext(POST_CONTEXT);
    return context;
};

export default PostProvider;
