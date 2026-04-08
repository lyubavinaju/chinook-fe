export type Invoice = {
    invoice_id: number;
    customer_id: number;
    invoice_date: Date;
    billing_address: string | null;
    billing_city: string | null;
    billing_state: string | null;
    billing_country: string | null;
    billing_postal_code: string | null;
    total: string;
}