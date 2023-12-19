import { dataContactInfo } from "@/data/contact";
import React from "react";
import Reveal from "../utils/Reveal";
import ContactForm from "./ContactForm";

export default function ContactSection() {
	return (
		<section className="py-15 pt-lg-30">
			<div className="container">
				<div className="row justify-center">
					<div className="col-lg-10">
						<div className="row row-cols-1 row-cols-md-2 gy-20 gx-lg-20">
							<Reveal className="col" delay={0.05}>
								<div className="text-center">
									<div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
										<i className="ti ti-map-2 fs-2"></i>
									</div>
									<h3 className="fw-medium mb-0">{dataContactInfo.address}</h3>
								</div>
							</Reveal>
							<Reveal className="col" delay={0.1}>
								<div className="text-center">
									<div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
										<i className="ti ti-phone-call fs-2"></i>
									</div>
									<h3 className="fw-medium mb-0">
										{dataContactInfo.phone.map((item) => (
											<React.Fragment key={item}>
												<span>{item}</span>
												<br />
											</React.Fragment>
										))}
									</h3>
								</div>
							</Reveal>
						</div>
					</div>
				</div>
				<Reveal className="ratio ratio-16x9 rounded-4 overflow-hidden mt-18" delay={0.15}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43342.12379278494!2d-115.1832297027355!3d36.15626909390534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1681845950495!5m2!1sen!2sbd"
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="border-0"
					></iframe>
				</Reveal>
				<Reveal className="row justify-center mt-18" delay={0.05}>
					<div className="col-lg-8 col-xl-6">
						<ContactForm />
					</div>
				</Reveal>
			</div>
		</section>
	);
}
