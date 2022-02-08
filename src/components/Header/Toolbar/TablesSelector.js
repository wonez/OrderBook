import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { OrderBookContext } from "../../../utils/OrderBookContext";
import { selectTable } from "../../../store/actions";
import { useContext } from "react";

function TablesSelector() {
	const {
		state: { table, tables },
		dispatch,
	} = useContext(OrderBookContext);

	const handleChange = ({ target: { value } }) => {
		dispatch(selectTable(value));
	};

	return (
		<Box sx={{ width: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="tables-label">Tables</InputLabel>
				<Select
					labelId="tables-label"
					id="tables-select"
					value={table}
					label="Tables"
					onChange={handleChange}
				>
					{tables.map((val) => {
						return (
							<MenuItem key={val} value={val}>
								{val}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
}

export default TablesSelector;
