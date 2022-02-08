import { Box } from "@mui/material";
import { OrderBookContext } from "../../contexts/OrderBookContext";
import OrderTable from "./OrderTable";
import { useContext } from "react";
import { useTableData } from "../../hooks/useTableData";

function OrderTables() {
	const {
		state: { table, pair },
	} = useContext(OrderBookContext);

	const { asks, bids } = useTableData(pair);

	return (
		<Box sx={{ display: "flex", justifyContent: "center", columnGap: 3 }}>
			{table.includes("Buy") && (
				<OrderTable title="Buy Order" color="$green" data={bids} />
			)}
			{table.includes("Sell") && (
				<OrderTable title="Sell Order" color="$red" data={asks} />
			)}
		</Box>
	);
}

export default OrderTables;
