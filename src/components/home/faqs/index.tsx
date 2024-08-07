// IMPORT USESTATE FROM REACT
import { useState } from "react";

const Questions = ({ faq_data }) => {
	const [visible, setVisible] = useState(null);

	// Logic for dropdown
	const handleOnClick = (index) => {
		setVisible(visible === index ? null : index);
	};

	return (
		<>
			{faq_data.map((item, index) => (
				<div className="w-[90%] my-2" key={index}>
					<div
						className="flex justify-between items-center border-b-[1px] border-gray-300 p-2 md:p-8 lg:p-8 cursor-pointer"
						onClick={() => handleOnClick(index)}
					>
						<p className="text-xl font-poppins tracking-wide font-medium">
							{item.data.title}
						</p>
						<img
							src={
								visible === index
									? "/icons/minus.png"
									: "/icons/plus.png"
							}
							className="w-10 aspect-square"
							alt={visible === index ? "Collapse" : "Expand"}
						/>
					</div>
					{visible === index && (
						<div className="p-2 md:p-8 lg:p-8">
							<p className="text-xl font-poppins tracking-wide leading-loose">
								{item.body}
							</p>
						</div>
					)}
				</div>
			))}
		</>
	);
};

export default Questions;
