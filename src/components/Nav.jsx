import React from "react";

const Nav = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg  custom-nav position-fixed">
				<div className="container-fluid d-flex justify-content-between align-items-center">
					<a href="#" className="logo navbar-brand">
						Frost <span>Quest</span>
					</a>
					<div className="d-flex align-items-center">
						<i className="bi bi-search search-icon me-2"></i>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
				</div>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav align-items-center">
						<li className="nav-item">
							<a href="#">Home</a>
						</li>
						<li className="nav-item">
							<a href="#">About</a>
						</li>
						<li className="nav-item">
							<a href="#">Tour</a>
						</li>
						<li className="nav-item">
							<a href="#">Blog</a>
						</li>
						<li className="nav-item">
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;
