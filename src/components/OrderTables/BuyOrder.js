import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

const data = [
	{ price: 41, amount: 0.9 },
	{ price: 42, amount: 0.8 },
	{ price: 40, amount: 0.7 },
	{ price: 35, amount: 0.4 },
];

const Cell = (props) => (
	<TableCell
		{...props}
		sx={{
			borderColor: "transparent",
		}}
	/>
);

function BuyOrder() {
	return (
		<Box sx={{ p: 2, border: "1px solid #EAECEF", flex: 1 }}>
			<Typography variant="h5">Buy Order</Typography>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<Cell>Price</Cell>
							<Cell>Amount</Cell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(({ price, amount }, index) => (
							<TableRow
								key={index}
								sx={{
									position: "relative",
									backgroundColor: "transparent !important",
								}}
							>
								<Cell
									sx={{
										backgroundColor:
											"transparent !important",
									}}
								>
									{price}
								</Cell>
								<Cell>{amount}</Cell>

								<div
									style={{
										position: "absolute",
										width: `${index * 4}0%`,
										height: "100%",
										// zIndex: -1,
										right: `0px`,
										borderTop: "1px solid white",
										borderBottom: "1px solid white",
										backgroundColor:
											"rgba(0, 230, 64, 0.7)",
									}}
								></div>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default BuyOrder;
