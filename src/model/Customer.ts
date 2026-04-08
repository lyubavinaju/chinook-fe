export type Customer = {
    customer_id: number;
    first_name: string;
    last_name: string;
    city: string | null;
    country: string | null;
    email: string;
    support_rep_id: number | null;
}