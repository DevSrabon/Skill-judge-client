const PrimaryButton = ({
	children,
	onClick, isDisabled
}: {
	children: React.ReactNode;
		onClick?: () => void;
	isDisabled?:boolean;
}) => {
	return (
		<button
		disabled={isDisabled}
			onClick={onClick}
			className={`bg-emerald-400 hover:bg-emerald-600 text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white`}>
			{children}
		</button>
	);
};

export default PrimaryButton