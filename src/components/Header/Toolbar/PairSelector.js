import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useState } from "react";

const options = ["BTC / USDT", "BTC / EUR", "ETH / BTC"];

function PairSelector() {
	const [pair, setPair] = useState("BTC / USDT");

	const handleChange = (event) => {
		setPair(event.target.value);
	};

	return (
		<Box sx={{ width: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="pair-label">Pair</InputLabel>
				<Select
					labelId="pair-label"
					id="pair-select"
					value={pair}
					label="Pair"
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

export default PairSelector;
