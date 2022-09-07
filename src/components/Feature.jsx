import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

export default function Feature({ icon, title }) {
	const [visible, setVisible] = useState(false);

	const variant = {
		true: { transform: "scale(1)" },
		false: { transform: "scale(0.5)" },
	};

	return (
		<VisibilitySensor onChange={(isVisible) => setVisible(isVisible)}>
			<div className="featurePart flex items-center justify-center flex-col relative text-center mx-12">
				{/* Icon */}
				<motion.div variants={variant} animate={`${visible}`} transition={{ duration: 1, type: "ease-out" }} className="icon bg-[#081730] rounded-2xl p-4">
					<img src={require(`../img/${icon}`)} alt="" className="w-12" />
				</motion.div>
				<span className="mt-5">{title}</span>
				<span className="text-[#707070] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia voluptas explicabo adipisci sequi!</span>
				<span className="text-[#E600FF] underline mt-12 cursor-pointer">Learn more</span>
			</div>
		</VisibilitySensor>
	);
}
