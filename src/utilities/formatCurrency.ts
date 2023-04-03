const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"});
export function formatCurrency(number: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}