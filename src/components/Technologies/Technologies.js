import React from 'react';
import { DiReact, DiFirebase, DiMootoolsBadge } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
	ListIcon,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web development world from
			Front-end to Back-end.
		</SectionText>
		<List>
			<ListItem>
				<ListIcon>
					<DiReact size="3rem" />
				</ListIcon>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						JavaScript, ES6, HTML, CSS, TypeScript, React.js, Less, Sass,
						InVision, Chrome Dev Tool
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListIcon>
					<DiFirebase size="3rem" />
				</ListIcon>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						MySQL, MS SQL Server, Python
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListIcon>
					<DiMootoolsBadge size="3rem" />
				</ListIcon>
				<ListContainer>
					<ListTitle>Tools</ListTitle>
					<ListParagraph>
						Experience with <br />
						Git, GitHub, SourceTree, Confluence, Jira, Shortcut, DataDog, Circle
						CI, Octopus Deploy, TeamCity
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
