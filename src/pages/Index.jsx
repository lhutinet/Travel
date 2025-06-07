import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper/modules";

const Index = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div>
			<Swiper
				modules={[Navigation, EffectFade]}
				slidesPerView={1}
				effect="fade"
				loop={true}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				className="overflow-hidden"
			>
				{[1, 2, 3].map((n) => (
					<SwiperSlide key={n}>
						<div
							className={`hero hero${n} d-flex flex-column justify-content-center align-items-center`}
						>
							<div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
								<h2 className="text-white">THE KINGDOM OF ICE</h2>
								<h1 className="text-white">Green Lan</h1>
								<button className="btn text-white hero-btn mt-5">
									LEARN MORE{" "}
									<img
										src="./btn-arrow.svg"
										alt="bouton"
										className="img-fluid"
									/>
								</button>
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* Custom navigation buttons */}
				<i
					ref={prevRef}
					className="bi bi-arrow-left-short swiper-btn swiper-prev"
				></i>
				<i
					ref={nextRef}
					className="bi bi-arrow-right-short swiper-btn swiper-next"
				></i>
			</Swiper>
		</div>
	);
};

export default Index;
