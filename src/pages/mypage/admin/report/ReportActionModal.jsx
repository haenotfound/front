import React, { useState } from "react";
import BaseButton from "../../../../components/button/BaseButton";

const ACTION_OPTIONS = [
	{ value: "pending", label: "미처리" },
	{ value: "tempBan", label: "임시 차단" },
	{ value: "permBan", label: "영구 차단" },
	{ value: "noAction", label: "제재하지 않음" },
];

const ReportActionModal = ({ isOpen, report, onClose, onConfirm }) => {
	const [action, setAction] = useState("permBan");
	const [notifyReporter, setNotifyReporter] = useState(false);
	const [applyToAll, setApplyToAll] = useState(false);
	const [reason, setReason] = useState("");

	if (!isOpen || !report) return null;

	const handleConfirm = () => {
		onConfirm?.({
			reportId: report.id,
			action,
			notifyReporter,
			applyToAll,
			reason,
		});
		setAction("permBan");
		setNotifyReporter(false);
		setApplyToAll(false);
		setReason("");
	};

	const handleClose = () => {
		setAction("permBan");
		setNotifyReporter(false);
		setApplyToAll(false);
		setReason("");
		onClose?.();
	};

	return (
		<div onClick={handleClose}>
			<div onClick={(e) => e.stopPropagation()}>
				<h2>신고 처리</h2>

				<div>
					<div>
						<span>신고 대상:</span>
						<span>
							{report.reportedUser?.nickname}({report.reportedUser?.email})
						</span>
					</div>

					<div>
						<span>신고 내용:</span>
						<span>{report.reason}</span>
					</div>

					<div>
						<label>처리:</label>
						<select value={action} onChange={(e) => setAction(e.target.value)}>
							{ACTION_OPTIONS.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>

					<div>
						<label>
							<input
								type="checkbox"
								checked={notifyReporter}
								onChange={(e) => setNotifyReporter(e.target.checked)}
							/>
							<span>신고자에게 신고 처리 결과를 전송</span>
						</label>
						<label>
							<input
								type="checkbox"
								checked={applyToAll}
								onChange={(e) => setApplyToAll(e.target.checked)}
							/>
							<span>
								해당 옵션을 동일 신고 대상에 대한 신고 내역에 모두 적용
							</span>
						</label>
					</div>

					<div>
						<label>차단 사유</label>
						<textarea
							value={reason}
							onChange={(e) => setReason(e.target.value)}
							placeholder="입력된 내용은 사용자 이메일로 전송됩니다."
							rows={4}
						/>
					</div>
				</div>

				<div>
					<BaseButton
						shape="rounded"
						border="gray03"
						color="gray03"
						padding="medium"
						onClick={handleClose}
					>
						취소
					</BaseButton>
					<BaseButton
						shape="rounded"
						backgroundColor="primary"
						color="white"
						padding="medium"
						onClick={handleConfirm}
					>
						확인
					</BaseButton>
				</div>
			</div>
		</div>
	);
};

export default ReportActionModal;
