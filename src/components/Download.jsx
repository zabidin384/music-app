import React from "react";
import DownloadAds from "./DownloadAds";

export default function Download() {
	return (
		<div className="downloadSection flex flex-col items-center justify-start px-20 bg-[#020917] h-[48rem] pt-72 mt-[-10rem] relative z-[1] rounded-b-[5rem]">
			{/* Tilde icon or path icon */}
			<img src={require("../img/Path 318.png")} alt="" className="w-20" />
			{/* Heading */}
			<div className="downloadHeading mt-7 flex flex-col items-center text-[2rem]">
				<span>Download The Best Music</span>
				<span>
					<b>App Now!</b>
				</span>
				<span className="text-base text-gray-400 px-60 text-center mt-4">Duis feugiat congue metus, ultrices vulputate nibh viverra eget. Vestibulum ullamcorper volutpat varius.</span>
			</div>
			{/* Download ads */}
			<div className="mt-14">
				<DownloadAds />
			</div>
		</div>
	);
}
