import type { Album } from "../model/Album";
import type { Customer } from "../model/Customer";
import type { Invoice } from "../model/Invoice";
import type { Playlist } from "../model/Playlist";
import type { Employee } from "../model/SalesAgent";
import type { Track } from "../model/Track";

export default interface ApiClient {
    setAuth(token: string): void;
    resetAuth(): void;
    getCustomers() : Promise<Customer[]>;
    getAlbums(): Promise<Album[]>;
    getPlaylists(): Promise<Playlist[]>;
    getInvoicesByCustomer(customerId: number): Promise<Invoice[]>;
    getTracksByInvoice(invoiceId: number): Promise<Track[]>;
    getTracksByAlbum(albumId: number): Promise<Track[]>;
    getTracksByPlaylist(playlistId: number): Promise<Track[]>;
    getEmployee(id: number): Promise<Employee>;
}
