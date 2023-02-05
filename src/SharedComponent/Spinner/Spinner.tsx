import { Player } from "@lottiefiles/react-lottie-player";
const Spinner = () => {
	return (
		<div className="h-[100vh] flex items-center justify-center">
			<Player
				autoplay
				loop
				src="https://lottie.host/0f156911-f4d0-4ac2-affb-3a0f8d00a34c/nl0nw8z2ha.json"></Player>
		</div>
	);
};

export default Spinner;
