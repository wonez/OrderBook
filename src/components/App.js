import { Box, Paper } from "@mui/material";

import Header from "./Header/Header";
import OrderTables from "./OrderTables/OrderTables";

function App() {
	return (
		<Box m={3}>
			<Paper elevation={2}>
				<Box p={5}>
					<Header />
					<OrderTables />
				</Box>
			</Paper>
		</Box>
	);
}

export default App;
