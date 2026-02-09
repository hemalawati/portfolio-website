import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
	HeroSection,
	IntroDescription,
	LeftSection,
	Resume,
} from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection nopadding>
			<LeftSection>
				<TypeAnimation
					sequence={[`Hi, I'm Hema.`]}
					speed={(50, { type: 'keyStrokeDelayInMs', value: 100 })}
					style={{ fontSize: '65px' }}
				/>
				<IntroDescription>
					I am a developer with a passion for beautiful interfaces. I like to
					craft quality and interactive products with great user experiences.
				</IntroDescription>
			</LeftSection>
		</HeroSection>
	);
};

export default Hero;
