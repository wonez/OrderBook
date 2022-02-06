import { Box } from "@mui/material";
import DecimalsSelector from "./DecimalsSelector";
import PairSelector from "./PairSelector";
import TablesSelector from "./TablesSelector";

function Toolbar() {
	return (
		<Box
			my={3}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<PairSelector />
			<DecimalsSelector />
			<TablesSelector />
		</Box>
	);
}

export default Toolbar;
