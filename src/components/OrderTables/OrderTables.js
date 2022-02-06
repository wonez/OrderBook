import { Box } from "@mui/material";
import BuyOrder from "./BuyOrder";
import SellOrder from "./SellOrder";

function OrderTables() {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", columnGap: 3 }}>
			<BuyOrder />
			<SellOrder />
		</Box>
	);
}

export default OrderTables;
