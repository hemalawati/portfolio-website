import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';
import { accomplishments } from '../../constants/constants';

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Acomplishments</SectionTitle>
		<Boxes>
			{accomplishments.map((card, index) => (
				<Box key={index}>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
