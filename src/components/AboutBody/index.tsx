import { useState } from 'react'

import "./styles.css";

import beginning from "../../assets/about/beginning.svg"
import growth from "../../assets/about/growth.svg"
import future from "../../assets/about/future.svg"

function AboutBody() {
  return (
		<div id="about-body_container">
			<div className="about-section_container">
				<img src={beginning} />
				<div className="about-text_container">
					<h1>A Humble Beginning.</h1>
					<h2>Learnwell began when founders Allen Lee and Jack Phifer shared a vision to make quality education accessible. In 2020, they began developing the platform from their small apartment, hosting their first video about entrepreneurship.</h2>
				</div>
			</div>
			<div className="about-section_container">
				<div className="about-text_container">
					<h1>Early success and growth.</h1>
					<h2>The first iteration of Learnwell attracted a small but passionate user base, overcoming technical and marketing challenges. Within a year, the platform hosted hundreds of videos across various subjects.</h2>
				</div>
				<img src={growth} />
			</div>
			<div className="about-section_container">
				<img src={future} />
				<div className="about-text_container">
					<h1>Future goals and support.</h1>
					<h2>Today, backed by passionate educators and investors, Learnwell continues to innovate, striving to make learning engaging and accessible for everyone. We continue to grow and learn as a company, tackling the ever-evolving challenges in education.</h2>
				</div>
			</div>
		</div>
  )
}

export default AboutBody