import React from "react";
import Feature from "./Feature";

export default function Experience() {
	return (
		<div className="experienceSection flex flex-col items-center justify-start px-20 bg-[#020917] h-[60rem] pt-72 mt-[-10rem] relative z-[3] rounded-b-[5rem]">
			{/* Tilde icon */}
			<img src={require("../img/Path 318.png")} alt="" className="w-20" />
			{/* Heading */}
			<div className="experienceHeading mt-7 flex flex-col items-center text-[2rem]">
				<span>An Amazing App Can Change Your Daily Life</span>
				<span>
					<b>Music Experience</b>
				</span>
			</div>
			{/* Features */}
			<div className="featuresPart flex items-center justify-around mt-24 w-full">
				<Feature icon="Group 2.png" title="For Live Music" />
				<Feature icon="music icon.png" title="For Daily Music" />
				<Feature icon="Group 4.png" title="For Artists  " />
			</div>
		</div>
	);
}
