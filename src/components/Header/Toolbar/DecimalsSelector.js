import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { OrderBookContext } from "../../../contexts/OrderBookContext";
import { selectDecimal } from "../../../store/actions";
import { useContext } from "react";

function DecimalsSelector() {
	const {
		state: { decimal, decimals },
		dispatch,
	} = useContext(OrderBookContext);

	const handleChange = ({ target: { value } }) => {
		dispatch(selectDecimal(value));
	};

	return (
		<Box sx={{ width: 100, mx: 2 }}>
			<FormControl fullWidth>
				<InputLabel id="decimals-label">Decimals</InputLabel>
				<Select
					labelId="decimals-label"
					id="decimals-select"
					value={decimal}
					label="Decimals"
					onChange={handleChange}
				>
					{decimals.map((val) => {
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

export default DecimalsSelector;
