import React from "react";

export default function DownloadAds() {
	return (
		<div className="downloadAdsPart">
			<div className="flex">
				<img src={require("../img/App Store.png")} alt="" className="downloadImgStyle mr-8" />
				<img src={require("../img/Google Play.png")} alt="" className="downloadImgStyle" />
			</div>
		</div>
	);
}
