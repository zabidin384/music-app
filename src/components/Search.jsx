import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

export default function Search() {
	const [visible, setVisible] = useState(false);

	// Animate Constant
	const bg = {
		true: { left: "-44rem" },
		false: { left: "-50rem" },
	};
	const redimg = {
		true: { left: "18rem" },
		false: { left: "16rem" },
	};
	const musicimg = {
		true: { left: "2rem" },
		false: { left: "6rem" },
	};

	return (
		<div className="searchSection relative h-[65rem] p-20 bg-[#081730] pt-72 pb-40 mt-[-15rem] z-[2] flex items-center justify-between rounded-b-[5rem]">
			{/* Left Side */}
			<div className="searchLeft flex-1">
				<motion.img
					variants={bg}
					animate={`${visible}`}
					transition={{ duration: 1, type: "ease-out" }}
					src={require("../img/backgraphics.png")}
					alt=""
					className="absolute top-[22rem] left-[-47rem]"
				/>
				<motion.img src={require("../img/d1.png")} alt="" className="absolute top-[26rem] w-64" />
				<motion.img src={require("../img/d2.png")} alt="" className="absolute top-[32.7rem] w-36 left-28" />
				<motion.img
					variants={redimg}
					animate={`${visible}`}
					transition={{ duration: 1.2, type: "ease-out" }}
					src={require("../img/d3.png")}
					alt=""
					className="absolute top-[33rem] w-36 left-[17rem]"
				/>
				<motion.img
					variants={musicimg}
					animate={`${visible}`}
					transition={{ duration: 1, type: "ease-out" }}
					src={require("../img/d4.png")}
					alt=""
					className="absolute top-[50rem] w-[17rem] left-8"
				/>
			</div>
			{/* Right Side */}
			<div className="searchRight flex items-start flex-col justify-start flex-1 h-full pt-36">
				{/* Searchbar */}
				<div className="searchbarRight flex justify-start w-full">
					<input type="text" placeholder="Enter the keyword or url" className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-12" />
					{/* Search icon */}
					<div className="searchRightIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-12 cursor-pointer">
						<img src={require("../img/search.png")} alt="" className="w-[1.5rem]" />
					</div>
				</div>
				{/* Tilde icon */}
				<div className="searchRightTilde flex justify-start mt-7 items-center w-full">
					<img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
				</div>

				{/* Paragraph */}
				<div className="searchRightDetail flex flex-col mt-5 text-4xl">
					<span>Search Music by</span>
					<span>
						<b>Name or Direct url</b>
					</span>
					<span className="text-sm mt-3 text-[#4D586A]">
						Lorem ipsum dolor sit amet consectetur. <br /> Lorem ipsum dolor sit amet. <br /> Lorem, ipsum.
					</span>
				</div>
				{/* Music Player */}
				<VisibilitySensor onChange={(isVisible) => setVisible(isVisible)}>
					<MusicPlayer />
				</VisibilitySensor>
			</div>
		</div>
	);
}
