import React from "react";
import BaseButton from "../../../../components/button/BaseButton";
import S from "./style";

const AdminHeader = () => {
	const handleLogout = () => {
		// TODO: 로그아웃 로직 구현
		console.log("로그아웃 클릭");
	};

	return (
		<S.Header>
			<S.HeaderUsername>안녕하세요, OOO 관리자님</S.HeaderUsername>
			<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
				<S.HeaderLink to="/">앱으로 이동</S.HeaderLink>
				<BaseButton
					size="bttxt"
					variant="solid"
					shape="rounded"
					color="white"
					padding="medium"
					onClick={handleLogout}
				>
					로그아웃
				</BaseButton>
			</div>
		</S.Header>
	);
};

export default AdminHeader;
