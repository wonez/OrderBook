import { Box, Typography } from "@mui/material";

import { OrderBookContext } from "../../contexts/OrderBookContext";
import Toolbar from "./Toolbar/Toolbar";
import { useContext } from "react";

function Header() {
	const {
		state: { pair },
	} = useContext(OrderBookContext);

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="h3" align="center">
					Order Book
				</Typography>
				<Box
					sx={{
						width: 50,
						height: 2,
						backgroundColor: "#000",
						mx: 2,
					}}
				/>
				<Typography variant="h5">{pair}</Typography>
			</Box>
			<Toolbar />
		</Box>
	);
}

export default Header;
