import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
	return(
		<div className = "flex flex-row bg-gray-100 justify-left p-10">
			<h1 className = "px-5 text-4xl border-r border-solid border-black">
				<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          			Pupsterr
        		</Link>
			</h1>
			<h1 className = "px-5 text-3xl border-r border-solid border-black">
				<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          			About
        		</Link>
			</h1>
			<h1 className = "px-5 text-3xl border-r border-solid border-black">
				<Link to="/discover" className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
          			Discover
        		</Link>
			</h1>
			<h1 className = "px-5 text-3xl">
				<Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          			Search
        		</Link>
			</h1>
		</div>
	)
}

export default NavTabs;