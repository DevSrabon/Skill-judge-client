import axios from 'axios';
import { useQuery } from "@tanstack/react-query";


const fetchQuestionData = (id:string) =>
    axios
        .get(`${process.env.REACT_APP_API_URL}/top-questions/${id}`)
        .then((response) => response.data)

const useFetchQuestionData = (id: string) => {
    return useQuery(["single-questions", id ], () => fetchQuestionData(id));
};

export default useFetchQuestionData;
