import React, { useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

export default function Hero() {
	const [visible, setVisible] = useState(false);

	// Animate Constant
	const bg = {
		true: { left: "7rem" },
		false: { left: "19rem" },
	};
	const musicPlayer = {
		true: { left: "295px" },
		false: { left: "235px" },
	};
	const rect = {
		true: { left: "11rem" },
		false: { left: "13rem" },
	};
	const heart = {
		true: { left: "9rem" },
		false: { left: "12.5rem" },
	};

	return (
		<VisibilitySensor onChange={(isVisible) => setVisible(isVisible)} minTopValue={300}>
			<div className="heroSection bg-[#081730] flex items-center justify-between px-20 rounded-b-[5rem] w-full h-[35rem] relative z-[4]">
				{/* Left Side */}
				<div className="heroLeft flex flex-col items-start justify-center h-full text-12">
					<span>Experience The</span>
					<span className="font-bold">Best Quality Music</span>
					<span className="text-[15px] text-[#525D6E]">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, unde!
						<br />
						Lorem, ipsum dolor sit amet consectetur adipisicing.
					</span>
					{/* Download ads */}
					<div>
						<span className="text-[13px]">Download now on IOS and Android</span>
						<DownloadAds />
					</div>
				</div>
				{/* Right Side */}
				<div className="heroRight relative w-1/2">
					<motion.img
						variants={bg}
						animate={`${visible}`}
						transition={{ duration: 1, type: "ease-out" }}
						src={require("../img/backgraphics.png")}
						alt=""
						className="absolute top-[-8rem] left-[19rem]"
					/>
					<img src={require("../img/p 1.png")} alt="" className="absolute top-[-15rem] left-52 h-[34rem]" />
					<motion.img
						variants={musicPlayer}
						animate={`${visible}`}
						transition={{ duration: 1, type: "ease-out" }}
						src={require("../img/p 2.png")}
						alt=""
						className="absolute top-[94px] left-[235px] w-[175px]"
					/>
					<motion.img
						variants={rect}
						animate={`${visible}`}
						transition={{ duration: 1, type: "ease-out" }}
						src={require("../img/p 3.png")}
						alt=""
						className="absolute top-48 left-52 w-20"
					/>
					<motion.img
						variants={heart}
						animate={`${visible}`}
						transition={{ duration: 1, type: "ease-out" }}
						src={require("../img/p 4.png")}
						alt=""
						className="absolute top-48 left-[12.5rem] w-20"
					/>
				</div>
			</div>
		</VisibilitySensor>
	);
}
