import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section id="projects">
		<SectionDivider />
		<br />
		<SectionTitle>Projects</SectionTitle>
		<GridContainer>
			{projects.map(({ id, image, title, description, tags, code, visit }) => (
				<BlogCard key={id}>
					<a href={visit}>
						<div>
							<Img src={image} />
						</div>
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							<Hr />
						</TitleContent>
					</a>
					<CardInfo>{description}</CardInfo>
					<div>
						<TitleContent>Stack</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						<ExternalLinks href={code}>Code</ExternalLinks>
						<ExternalLinks href={visit}>Visit</ExternalLinks>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
