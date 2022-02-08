import { Box, Typography } from "@mui/material";

function OrderTableRow({ data, index, style, decimal, color }) {
	const [price, amount] = data[index];

	return (
		<Box
			key={`${price}-${amount}-${index}`}
			style={style}
			sx={{
				display: "flex",
				borderBottom: "1px solid",
				borderColor: "$light",
				justifyContent: "space-between",
				alignItems: "center",
				color,
			}}
		>
			<Typography variant="body1">
				{parseFloat(price).toFixed(decimal)}
			</Typography>
			<Typography variant="body1">
				{parseFloat(price).toFixed(decimal)}
			</Typography>
		</Box>
	);
}

export default OrderTableRow;
