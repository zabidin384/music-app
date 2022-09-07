import React from "react";
import CenterMenu from "./CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

export default function Footer() {
	return (
		<div className="footerSection flex flex-col items-center justify-start px-20 bg-[#081730] h-[45rem] pt-72 mt-[-10rem] relative z-[0]">
			<CenterMenu />
			{/* Social icons */}
			<div className="footerSocialIcons flex w-full justify-center mt-14">
				<div className="socialStyle">
					<Facebook />
				</div>
				<div className="socialStyle">
					<Twitter />
				</div>
				<div className="socialStyle">
					<YouTube />
				</div>
				<div className="socialStyle">
					<LinkedIn />
				</div>
			</div>
			{/* Detail */}
			<span className="text-base text-gray-400 px-60 text-center mt-16">Zainal Abidin corporation. &copy; 2022</span>
		</div>
	);
}
