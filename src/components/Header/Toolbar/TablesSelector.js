import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useState } from "react";

const options = ["Buy", "Sell", "Buy & Sell"];

function TablesSelector() {
	const [tables, setTables] = useState("Buy & Sell");

	const handleChange = (event) => {
		setTables(event.target.value);
	};
	return (
		<Box sx={{ width: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="tables-label">Tables</InputLabel>
				<Select
					labelId="tables-label"
					id="tables-select"
					value={tables}
					label="Tables"
					onChange={handleChange}
				>
					{options.map((val) => {
						return <MenuItem value={val}>{val}</MenuItem>;
					})}
				</Select>
			</FormControl>
		</Box>
	);
}

export default TablesSelector;
