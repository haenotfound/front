import React from "react";
import S from "./style";

const menuItems = [
	{ path: "/admin", label: "대시보드", end: true },
	{ path: "/admin/post", label: "정보제공 관리" },
	{ path: "/admin/users", label: "사용자 관리" },
	{ path: "/admin/community", label: "커뮤니티 관리" },
	{ path: "/admin/report", label: "신고 관리" },
];

const AdminSidebar = () => {
	return (
		<S.Sidebar>
			<S.SidebarLogo to="/admin">
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
					alt="자취연구소"
				/>
			</S.SidebarLogo>
			<S.SidebarNav>
				<S.SidebarMenu>
					{menuItems.map((item) => (
						<S.SidebarMenuItem key={item.path}>
							<S.SidebarNavLink to={item.path} end={item.end}>
								{item.label}
							</S.SidebarNavLink>
						</S.SidebarMenuItem>
					))}
				</S.SidebarMenu>
			</S.SidebarNav>
		</S.Sidebar>
	);
};

export default AdminSidebar;
