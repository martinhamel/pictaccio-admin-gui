export function formatPricing(price: string, scaledPrice: string[], scaling?: boolean): string {
    if (scaling && scaledPrice.length > 1) {
        const formattedScaledPrice = scaledPrice
            .slice(0, 2)
            .map(price => `$${price}`)
            .join('<br>') + (scaledPrice.length > 2 ? ' ...' : '');
        return formattedScaledPrice as unknown as string;
    } else {
        return [price].map(i => `$${i}`) as unknown as string;
    }
}
