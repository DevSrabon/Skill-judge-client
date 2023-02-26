import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/AuthProvider";

const AddProblems = () => {
	const categories = ["Easy", "Medium", "Hard"];
	const skills = ["Basic", "Medium", "Advanced"];
	type FormValues = {
		title: string;
		difficulty: string;
		skills: string;
		types: string;
		titleDetails: string;
		example1: string;
		example2: string;
		default: string;
		output: string;
		output2: string;
		img: string;
		image: string;
		valueDefault: string;
	};
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>();
	const { user }: any = useAuth();

	const imageHostKey = process.env.REACT_APP_imgbb_key;

	const handleAddProblem = (data: FormValues) => {
		console.log(data);
		const image = data.img[0];
		const image1 = data.img[0];
		console.log(image);
		const formData = new FormData();
		formData.append("image", image);
		formData.append("image1", image1);
		const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				console.log(imgData);
				if (imgData.success) {
					const add = {
						email: user.email,
						name: user.displayName,
						title: data.title,
						difficulty: data.difficulty,
						skills: data.skills,
						types: data.types,
						titleDetails: data.titleDetails,
						example1: data.example1,
						example2: data.example2,
						output1: data.output,
						output2: data.output2,
						image: imgData?.data?.url,
						valueDefault: data.valueDefault,
						date: new Date(),
					};
					// save problem information into the database
					fetch(`${process.env.REACT_APP_API_URL}/addProblem`, {
						method: "POST",
						headers: {
							"content-type": "application/json",
							authorization: `bearer ${localStorage.getItem("accessToken")}`,
						},
						body: JSON.stringify(add),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);
							toast.success(`${data.title} is added successfully`);
							reset();
						});
				} else {
					const add = {
						email: user.email,
						name: user.displayName,
						title: data.title,
						difficulty: data.difficulty,
						skills: data.skills,
						types: data.types,
						titleDetails: data.titleDetails,
						example1:data.example1,
						example2: data.example2,
						output1: data.output,
						output2: data.output2,
						valueDefault: data.valueDefault,
						date: new Date(),
					};
					// save problem information into the database
					fetch(`${process.env.REACT_APP_API_URL}/addProblem`, {
						method: "POST",
						headers: {
							"content-type": "application/json",
							authorization: `bearer ${localStorage.getItem("accessToken")}`,
						},
						body: JSON.stringify(add),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);
							toast.success(`${data.title} is added successfully`);
							reset();
						});
				}
			});
	};
	return (
		<section className="lg:ml-[265px] lg:mr-4  mt-14">
			<h1 className="text-xl font-semibold my-4 pt-4">Add Problem</h1>
			<hr />
			<form onSubmit={handleSubmit(handleAddProblem)}>
				<div className="grid gap-4 grid-cols-4 my-5">
					<div className="col-span-2 border rounded p-3">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">
									Title <sup className="top-0 text-red-700 text-xl">*</sup>
								</span>
							</label>
							<input
								className="input input-bordered w-full"
								type="text"
								{...register("title", {
									required: "title is required",
								})}
							/>
							{errors.title ? (
								<p className="text-red-600">{errors.title?.message}</p>
							) : null}
						</div>
						<div className="flex justify-between gap-3">
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text font-semibold">
										Difficulty{" "}
										<sup className="top-0 text-red-700 text-xl">*</sup>
									</span>
								</label>
								<select
									{...register("difficulty")}
									className="select input-bordered w-full max-w-xs">
									{categories.map((category, i: number) => (
										<option key={i + 1} value={category}>
											{category}
										</option>
									))}
								</select>
							</div>
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text font-semibold">
										Skills <sup className="top-0 text-red-700 text-xl">*</sup>
									</span>
								</label>
								<select
									{...register("skills")}
									className="select input-bordered w-full max-w-xs">
									{skills.map((skill, i: number) => (
										<option key={i + 1} defaultValue={skill[0]} value={skill}>
											{skill}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">Example1 image</span>
							</label>
							<input
								className="file-input w-full"
								type="file"
								{...register("img")}
							/>
							{errors.img && (
								<p className="text-red-600">{errors.img?.message}</p>
							)}
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">
									Example1 <sup className="top-0 text-red-700 text-xl">*</sup>
								</span>
							</label>
							<textarea
								placeholder={"console.log('Hello')"}
								className="textarea textarea-bordered w-full"
								{...register("example1", {
									required: "example1 is required",
								})}
							/>
							{errors.example1 ? (
								<p className="text-red-600">{errors.example1?.message}</p>
							) : null}
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">Example2</span>
							</label>
							<textarea
								placeholder={"print('Hello Universe!')"}
								className="textarea textarea-bordered w-full"
								{...register("example2")}
							/>
						</div>
					</div>
					<div className="col-span-2 border rounded p-3">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">
									Types <sup className="top-0 text-red-700 text-xl">*</sup>
								</span>
							</label>
							<input
								placeholder="Addition"
								className="input input-bordered w-full"
								type="text"
								{...register("types", {
									required: "types is required",
								})}
							/>
							{errors.types && (
								<p className="text-red-600">{errors.types?.message}</p>
							)}
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">
									Title details{" "}
									<sup className="top-0 text-red-700 text-2xl">*</sup>
								</span>
							</label>
							<textarea
								placeholder="Here is a sample line of code"
								className="input input-bordered w-full"
								{...register("titleDetails", {
									required: "titleDetails is required",
								})}
							/>
							{errors.titleDetails && (
								<p className="text-red-600">{errors.titleDetails?.message}</p>
							)}
						</div>

						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">
									Output1 <sup className="top-0 text-red-700 text-xl">*</sup>
								</span>
							</label>
							<input
								className="input input-bordered w-full"
								type="text"
								{...register("output", {
									required: "output is required",
								})}
							/>
							{errors.output && (
								<p className="text-red-600">{errors.output?.message}</p>
							)}
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">Output2</span>
							</label>
							<input
								className="input input-bordered w-full"
								type="text"
								{...register("output2")}
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">Default Value</span>
							</label>
							<textarea
								className="input input-bordered w-full"
								{...register("valueDefault")}
							/>
						</div>
						<input
							className="btn  btn-active hover:btn-outline w-full mt-3"
							value="Add Problem"
							type="submit"
						/>
					</div>
				</div>
			</form>
		</section>
	);
};

export default AddProblems;
