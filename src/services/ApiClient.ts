import type { Album } from "../model/Album";
import type { Customer } from "../model/Customer";
import type { Invoice } from "../model/Invoice";
import type { Playlist } from "../model/Playlist";
import type { Employee } from "../model/SalesAgent";

export default interface ApiClient {
    getCustomers() : Promise<Customer[]>;
    getAlbums(): Promise<Album[]>;
    getPlaylists(): Promise<Playlist[]>;
    getInvoicesByCustomer(customerId: number): Promise<Invoice[]>;
    getEmployee(id: number): Promise<Employee>;
}