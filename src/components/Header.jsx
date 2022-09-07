import React from "react";
import CenterMenu from "./CenterMenu";

export default function Header() {
	return (
		<div className="headerSection bg-[#081730] flex items-center justify-between px-20 pt-[2.4rem] text-sm">
			{/* Logo */}
			<div className="flex gap-8 items-center">
				<img src={require("../img/MuzicLogo.png")} alt="" className="logo w-[42px] h-[42px]" />
				<span className="font-bold text-xl px-3 py-1 rounded-xl bg-gradient-to-bl from-[#F3071D] to-[#E600FF]">Music App</span>
			</div>
			{/* Side Menu */}
			<CenterMenu />
			{/* Buttons */}
			<div className="headerButtons flex">
				<button className="buttonStyle mr-[35px] hover:bg-[#232A4E]">Sign up</button>
				<button className="buttonStyle hover:bg-[#232A4E]">Log in</button>
			</div>
		</div>
	);
}
