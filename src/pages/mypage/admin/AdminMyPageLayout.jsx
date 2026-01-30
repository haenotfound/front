import React from "react";
import AdminHeader from "./component/AdminHeader";
import AdminSidebar from "./component/AdminSidebar";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import FooterS from "../../../components/footer/style";
import S from "./component/style";
import styled from "styled-components";

const AdminMyPageLayoutBase = ({ className }) => {
	return (
		<S.AdminLayoutContainer className={className}>
			<AdminSidebar />
			<AdminHeader />
			<S.AdminMain>
				<Outlet />
			</S.AdminMain>
			<Footer />
		</S.AdminLayoutContainer>
	);
};

const AdminMyPageLayout = styled(AdminMyPageLayoutBase)`
	${FooterS.Footer} {
		grid-area: foot;
		border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale05};
	}
`;

export default AdminMyPageLayout;
