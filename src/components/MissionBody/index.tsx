import { useState } from 'react'

import "./styles.css";

import educationImage from "../../assets/mission/education.svg"
import globalImage from "../../assets/mission/global.svg"
import growImage from "../../assets/mission/grow.svg"

function MissionBody() {
  return (
		<div id="mission-body_container">
			<div className="mission-section_container">
				<img src={educationImage} />
				<div className="mission-text_container">
					<h1>Empowering students with <i>quality</i> education.</h1>
					<h2>Our mission is to create a platform where every learner can thrive with high-quality educational videos.</h2>
				</div>
			</div>
			<div className="mission-section_container">
				<img src={globalImage} />
				<div className="mission-text_container">
					<h1>Making education <i>accessible</i>.</h1>
					<h2>We're growing a global community committed to making learning accessible for everyone, everywhere.</h2>
				</div>
			</div>
			<div className="mission-section_container">
				<img src={growImage} />
				<div className="mission-text_container">
					<h1>Investing in <i>growth</i> and <i>innovation</i>.</h1>
					<h2>We're continuously listening and improving as a company so that our learners can also achieve their fullest potential.</h2>
				</div>
			</div>
		</div>
  )
}

export default MissionBody