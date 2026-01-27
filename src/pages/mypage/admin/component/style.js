import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const S = {};

S.Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	padding: 16px 24px;
	height: max-content;
	background: ${({ theme }) => theme.PALLETE.white};
	border-bottom: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale05};

	grid-area: head;
`;

S.HeaderLink = styled(Link)`
	font-size: ${({ theme }) => theme.FONT_SIZE.h6};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.PALLETE.primary};
	}
`;

S.HeaderUsername = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.h6};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
`;

S.Sidebar = styled.aside`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: ${({ theme }) => theme.PALLETE.white};
	border-right: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale05};

	grid-area: nav;
`;

S.SidebarLogo = styled(Link)`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 24px;
	text-decoration: none;

	img {
		height: 32px;
	}
`;

S.SidebarNav = styled.nav`
	flex: 1;
	padding: 16px 0;
`;

S.SidebarMenu = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

S.SidebarMenuItem = styled.li``;

S.SidebarNavLink = styled(NavLink)`
	display: block;
	padding: 12px 24px;
	font-size: ${({ theme }) => theme.FONT_SIZE.h6};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		background: ${({ theme }) => theme.PALLETE.gray.greyscale01}60;
		color: ${({ theme }) => theme.PALLETE.primary};
	}

	&.active {
		background: ${({ theme }) => theme.PALLETE.primary}10;
		color: ${({ theme }) => theme.PALLETE.primary};
	}
`;

S.AdminMain = styled.div`
	grid-area: main;
	padding: 24px;
`;

S.AdminLayoutContainer = styled.div`
	display: grid;
	grid-template-areas:
		"nav head"
		"nav main"
		"foot foot";
	grid-template-columns: 1fr 5fr;
	grid-template-rows: auto 1fr auto;
`;

export default S;
