import { Box, Typography } from "@mui/material";

import Toolbar from "./Toolbar/Toolbar";

function Header() {
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
				<Typography variant="h5">BTC / USDT</Typography>
			</Box>
			<Toolbar />
		</Box>
	);
}

export default Header;
