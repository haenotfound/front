import React, { useMemo, useState, useCallback } from "react";
import BaseTable from "../../../../components/table/BaseTable";
import ReportActionModal from "./ReportActionModal";

const REPORT_STATUS = {
	PENDING: "미처리",
	TEMP_BAN: "임시 차단",
	PERM_BAN: "영구 차단",
	NO_ACTION: "제재하지 않음",
};

const REPORT_FILTER = {
	ALL: null,
	PENDING: "pending",
	PROCESSED: "processed",
};

// 샘플 데이터
const SAMPLE_REPORTS = [
	{
		id: 1,
		reportedUser: {
			nickname: "강한사람",
			email: "strong12@naver.com",
			badge: "N",
		},
		reporter: { nickname: "오소리", email: "osori12@kakao.com" },
		reportDate: "2026-10-31",
		reason: "성적인 콘텐츠",
		content: "해당 게시물에 부적절한 성적 콘텐츠가 포함되어 있습니다.",
		status: "미처리",
	},
	{
		id: 2,
		reportedUser: {
			nickname: "약한사람",
			email: "weak211@naver.com",
			badge: "N",
		},
		reporter: { nickname: "아재맹수", email: "lim123@naver.com" },
		reportDate: "2026-10-16",
		reason: "잘못된 정보",
		content: "게시물에 허위 정보가 포함되어 있어 신고합니다.",
		status: "미처리",
	},
	{
		id: 3,
		reportedUser: {
			nickname: "보통사람",
			email: "normal11@kakao.com",
			badge: "N",
		},
		reporter: { nickname: "아기맹수", email: "baby321@kakao.com" },
		reportDate: "2026-09-15",
		reason: "유해하거나 위험한 행위",
		content: "위험한 행위를 조장하는 내용이 포함되어 있습니다.",
		status: "미처리",
	},
	{
		id: 4,
		reportedUser: { nickname: "오리너구리", email: "owner33@kakao.com" },
		reporter: { nickname: "고양이", email: "cat123@naver.com" },
		reportDate: "2026-07-24",
		reason: "스팸 또는 혼동을 야기하는 콘텐츠",
		content: "반복적인 스팸 게시물입니다.",
		status: "임시 차단",
	},
	{
		id: 5,
		reportedUser: { nickname: "햄스터", email: "spam11@kakao.com" },
		reporter: { nickname: "강아지", email: "dog123@naver.com" },
		reportDate: "2026-05-21",
		reason: "증오 또는 악의적인 콘텐츠",
		content: "특정 집단을 향한 혐오 발언이 포함되어 있습니다.",
		status: "영구 차단",
	},
	{
		id: 6,
		reportedUser: { nickname: "햄스터", email: "spam11@kakao.com" },
		reporter: { nickname: "호랑이", email: "tiger55@naver.com" },
		reportDate: "2026-05-20",
		reason: "증오 또는 악의적인 콘텐츠",
		content: "악의적인 콘텐츠가 포함된 게시물입니다.",
		status: "영구 차단",
	},
	{
		id: 7,
		reportedUser: { nickname: "하늘다람쥐", email: "sky321@naver.com" },
		reporter: { nickname: "바다표범", email: "seal13@kakao.com" },
		reportDate: "2026-04-13",
		reason: "잘못된 정보",
		content: "사실과 다른 정보를 게시하고 있습니다.",
		status: "제재하지 않음",
	},
];

const ReportList = () => {
	const [currentFilter, setCurrentFilter] = useState(REPORT_FILTER.ALL);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedReport, setSelectedReport] = useState(null);
	const data = SAMPLE_REPORTS;

	const handleViewContent = useCallback((report) => {
		setSelectedReport(report);
		setIsModalOpen(true);
	}, []);

	const handleModalConfirm = useCallback((actionData) => {
		console.log("Action confirmed:", actionData);
		// TODO: API 호출 등 구현
		setIsModalOpen(false);
		setSelectedReport(null);
	}, []);

	const pendingCount = useMemo(() => {
		return data.filter((item) => item.status === REPORT_STATUS.PENDING).length;
	}, [data]);

	const filteredData = useMemo(() => {
		let result = [...data];

		if (currentFilter === REPORT_FILTER.PENDING) {
			result = result.filter((item) => item.status === REPORT_STATUS.PENDING);
		} else if (currentFilter === REPORT_FILTER.PROCESSED) {
			result = result.filter((item) => item.status !== REPORT_STATUS.PENDING);
		}

		return result;
	}, [data, currentFilter]);

	const columns = useMemo(
		() => [
			{
				id: "reportedUser",
				header: "신고대상",
				accessorFn: (row) => row.reportedUser,
				cell: ({ row }) => {
					const user = row.original.reportedUser;
					return (
						<div>
							{user.badge && <span>{user.badge}</span>}
							<div>
								<span>{user.nickname}</span>
								<span>({user.email})</span>
							</div>
						</div>
					);
				},
				enableSorting: false,
			},
			{
				id: "reporter",
				header: "신고자",
				accessorFn: (row) => row.reporter,
				cell: ({ row }) => {
					const user = row.original.reporter;
					return (
						<div>
							<div>
								<span>{user.nickname}</span>
								<span>({user.email})</span>
							</div>
						</div>
					);
				},
				enableSorting: false,
			},
			{
				accessorKey: "reportDate",
				header: "신고일시",
				cell: ({ getValue }) => {
					const date = new Date(getValue());
					return date.toISOString().split("T")[0];
				},
			},
			{
				accessorKey: "reason",
				header: "사유",
				enableSorting: false,
			},
			{
				id: "content",
				header: "신고내용",
				cell: ({ row }) => (
					<button onClick={() => handleViewContent(row.original)}>{">"}</button>
				),
				enableSorting: false,
			},
			{
				accessorKey: "status",
				header: "처리상태",
				cell: ({ getValue }) => {
					const status = getValue();
					return <span>{status}</span>;
				},
				enableSorting: false,
			},
		],
		[handleViewContent],
	);

	return (
		<div>
			{pendingCount > 0 && (
				<div>
					<span>💡</span>
					<span>
						확인하지 않은 신고 내역이 <strong>{pendingCount}건</strong>{" "}
						있습니다.
					</span>
				</div>
			)}

			<div>
				<button onClick={() => setCurrentFilter(REPORT_FILTER.ALL)}>
					전체
				</button>
				<button onClick={() => setCurrentFilter(REPORT_FILTER.PENDING)}>
					미처리
				</button>
				<button onClick={() => setCurrentFilter(REPORT_FILTER.PROCESSED)}>
					처리완료
				</button>
			</div>

			<BaseTable
				data={filteredData}
				columns={columns}
				enableRowSelection={false}
				enableSorting={true}
				enableFiltering={false}
				enablePagination={true}
				pageSize={10}
			/>

			<ReportActionModal
				isOpen={isModalOpen}
				report={selectedReport}
				onClose={() => {
					setIsModalOpen(false);
					setSelectedReport(null);
				}}
				onConfirm={handleModalConfirm}
			/>
		</div>
	);
};

export default ReportList;
