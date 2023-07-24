import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Hero = () => {
	const [showResume, setshowResume] = React.useState(false);
	const toggleShowResume = () => {
		setshowResume((current) => !current);
	};

	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>
					I am a developer with a passion for beautiful interfaces. I like to
					craft quality and interactive products with great user experiences.
				</SectionText>
				<Document file="/Resume.pdf">
					<a target="_blank">
						<Button onClick={toggleShowResume}>
							{showResume ? 'Close' : 'View my Resume'}
						</Button>
						{showResume && (
							<Page
								pageNumber={1}
								renderAnnotationLayer={false}
								renderTextLayer={false}
								canvasBackground="transparent"
							/>
						)}
					</a>
				</Document>
			</LeftSection>
		</Section>
	);
};

export default Hero;
