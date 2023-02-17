import React from "react";
import Spinner from "../../../../SharedComponent/Spinner/Spinner";
const OutputDetails = ({ outputDetails, processing}) => {
	if (processing) {
	return <Spinner/>

	
}
  return (
		<>
			{outputDetails && (
				<div className="metrics-container mt-4 flex flex-col space-y-3">
					<p className="text-sm">
						Status:{" "}
						<span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
							{outputDetails?.status?.description}
						</span>
					</p>
					<p className="text-sm">
						Memory:{" "}
						<span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
							{(outputDetails?.memory * 0.0001).toFixed(2)}mb
						</span>
					</p>
					<p className="text-sm">
						Exec Time:{" "}
						<span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
							{outputDetails?.time}sec
						</span>
					</p>
				</div>
			)}
		</>
	);
};

export default OutputDetails;
