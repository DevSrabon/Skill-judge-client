export type BookType = {
	title: string;
	_id: string;
	price: string | boolean;
	detail: string;
	duration: string;
	btn: string;
	plan: string;
};
export type QuizTopicCardType = {
	_id: string;
	name: string;
	logo: string;
	total: string;
};
export type QuizQuesCardType = {
	_id: string;
	options: Array<string>;
	question: string;
	correctAnswer: string;
};

