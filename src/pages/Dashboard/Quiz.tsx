import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Quiz = () => {
    	const [quiz, setQuiz]: any = useState({});
    	const { data }: any = useQuery({
				queryKey: ["quiz"],
				queryFn: () =>
					fetch(`${process.env.REACT_APP_API_URL}/allquiz`, {
						headers: {
							authorization: `bearer ${localStorage.getItem("token")}`,
						},
					}).then((res) => res.json()),
			});
			console.log(quiz);
			useEffect(() => {
				if (data?.length) {
					setQuiz(data);
				}
			}, [data]);
    return (
        <div>
            
        </div>
    );
};

export default Quiz;