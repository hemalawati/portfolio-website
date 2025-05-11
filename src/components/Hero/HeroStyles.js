import styled from 'styled-components';

export const HeroSection = styled.div`
	height: 100vh;
	display: flex;
`;

export const IntroDescription = styled.p`
	color: rgba(255, 255, 255, 0.5);
	animation: fadeIn 4s;

	@keyframes fadeIn {
		0%,
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const LeftSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		margin: 0 auto;
	}
`;

export const Resume = styled.a`
	color: rgba(255, 255, 255, 0.5);
	animation: fadeIn 6s;

	border: 3px solid white;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    text-align: center;
    width: 150px;

	@keyframes fadeIn {
		0%,
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
