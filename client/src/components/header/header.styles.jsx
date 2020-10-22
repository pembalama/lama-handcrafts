import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 350px;
	margin: 0 0 0 50px;
	padding: 10px;
	font-weight: 800;
	font-size: 26px;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 20px;
	margin: 0 50px 0 0;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
