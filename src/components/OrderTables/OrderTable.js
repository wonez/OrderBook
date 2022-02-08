import { Box, Typography } from "@mui/material";

import { FixedSizeList as List } from "react-window";
import { OrderBookContext } from "../../contexts/OrderBookContext";
import OrderTableRow from "./OrderTableRow";
import { useContext } from "react";

function OrderTable({ data, title, color }) {
	const {
		state: { decimal },
	} = useContext(OrderBookContext);

	return (
		<Box sx={{ p: 3, border: "1px solid", borderColor: "$light" }}>
			<Typography variant="h5">{title}</Typography>
			<Box>
				<Box
					sx={{
						p: 2,
						display: "flex",
						borderBottom: "1px solid",
						borderColor: "$light",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="subtitle1">Price</Typography>
					<Typography variant="subtitle1">Amount</Typography>
				</Box>
				<Box component="div">
					<List
						itemData={data}
						itemCount={data.length}
						itemSize={40}
						height={600}
						width={400}
					>
						{({ data, index, style }) => (
							<OrderTableRow
								data={data}
								index={index}
								style={style}
								decimal={decimal}
								color={color}
							/>
						)}
					</List>
				</Box>
			</Box>
		</Box>
	);
}

export default OrderTable;
