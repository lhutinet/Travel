import React, { useEffect, useState } from "react";

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handdleScroll = () => {
			setScrolled(window.scrollY > 500);
		};
		window.addEventListener("scroll", handdleScroll);
		return () => {
			window.removeEventListener("scroll", handdleScroll);
		};
	}, []);
	return (
		<>
			<nav
				className={`navbar navbar-expand-lg  custom-nav position-fixed w-100 ${
					scrolled ? "black-them" : "white-them"
				}`}
			>
				<div className="container-fluid d-flex justify-content-between align-items-center">
					<a href="#" className="logo navbar-brand">
						Frost <span>Quest</span>
					</a>
					<div className="d-flex align-items-center">
						<i
							className="bi bi-search search-icon me-2"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#searchModal"
						></i>
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
			{/* Searching */}
			<div
				className="modal fade"
				id="searchModal"
				tabIndex="-1"
				aria-labelledby="searchModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content bg-dark text-white">
						<div className="modal-header border-0">
							<h5 className="modal-title" id="searchModalLabel">
								Search
							</h5>
							<button
								className="btn-close btn-close-shite"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="input-group" modal-input>
								<input
									type="text"
									className="form-control"
									placeholder="Search here..."
								/>
								<span className="input-group-text bg-white">
									<i className="bi bi-search text-dark"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
