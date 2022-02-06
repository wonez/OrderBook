import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useState } from "react";

const decimalsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function DecimalsSelector() {
	const [decimals, setDecimals] = useState(2);

	const handleChange = (event) => {
		setDecimals(event.target.value);
	};
	return (
		<Box sx={{ width: 100, mx: 2 }}>
			<FormControl fullWidth>
				<InputLabel id="decimals-label">Decimals</InputLabel>
				<Select
					labelId="decimals-label"
					id="decimals-select"
					value={decimals}
					label="Decimals"
					onChange={handleChange}
				>
					{decimalsArr.map((val) => {
						return <MenuItem value={val}>{val}</MenuItem>;
					})}
				</Select>
			</FormControl>
		</Box>
	);
}

export default DecimalsSelector;
