export function toUSDCurrency(value?: number): string {
	if (value === undefined) {
		return "$0.00";
	}

	return value.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
}
