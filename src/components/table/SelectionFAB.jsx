import PropTypes from "prop-types";
import BaseButton from "../button/BaseButton";
import S from "./style";

const SelectionFAB = ({ selectedCount = 0, actions = [], onAction }) => {
	if (selectedCount === 0) return null;

	const handleAction = (actionValue) => {
		onAction?.(actionValue);
	};

	return (
		<S.SelectionBar>
			<S.SelectionBadge>{selectedCount}개 선택됨</S.SelectionBadge>
			<S.SelectionActions>
				{actions.map((action) => (
					<BaseButton
						key={action.value}
						size="h8"
						shape="rounded"
						variant={action.variant || "outline"}
						border={action.border || "gray03"}
						color={action.color || "gray05"}
						backgroundColor={action.backgroundColor}
						onClick={() => handleAction(action.value)}
					>
						{action.icon && <span>{action.icon}</span>}
						{action.label}
					</BaseButton>
				))}
			</S.SelectionActions>
		</S.SelectionBar>
	);
};

SelectionFAB.propTypes = {
	selectedCount: PropTypes.number,
	actions: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			icon: PropTypes.string,
			variant: PropTypes.oneOf(["outline", "ghost", "solid"]),
			border: PropTypes.string,
			color: PropTypes.string,
			backgroundColor: PropTypes.string,
		})
	).isRequired,
	onAction: PropTypes.func.isRequired,
};

export default SelectionFAB;
