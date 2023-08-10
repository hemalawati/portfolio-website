import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';
import { accomplishments } from '../../constants/constants';

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Acomplishments</SectionTitle>
		<Boxes>
			{accomplishments.map((card, index) => (
				<Box key={index} style={{ display: 'flex' }}>
					<BoxText>{card.text}</BoxText>
					{card.image ? (
						<img src={card.image} style={{ width: '100px', height: '50px' }} />
					) : (
						''
					)}
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
