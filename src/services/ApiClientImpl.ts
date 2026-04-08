import axios from "axios";
import type { Customer } from "../model/Customer";
import type ApiClient from "./ApiClient";
import { type Album } from "../model/Album";
import type { Playlist } from "../model/Playlist";
import type { Invoice } from "../model/Invoice";
import type { Employee } from "../model/SalesAgent";

class ApiClientImpl implements ApiClient {
    _axiosInstace;
    constructor() {
        this._axiosInstace = axios.create({
            baseURL: "http://localhost:3000/"
        });
    }

    async getCustomers(): Promise<Customer[]> {
        const response = await this._axiosInstace.get<Customer[]>("customers");
        let customers = response.data;
        return customers;
    }

    async getAlbums(): Promise<Album[]> {
        const response = await this._axiosInstace.get<Album[]>("albums");
        let albums = response.data;
        return albums;
    }

    async getPlaylists(): Promise<Playlist[]> {
       const response = await this._axiosInstace.get<Playlist[]>("playlists");
       let playlists = response.data;
       return playlists;
    }

    async getInvoicesByCustomer(customerId: number): Promise<Invoice[]> {
        const response = await this._axiosInstace.get<Invoice[]>(`customers/${customerId}/invoices`);
        let invoices = response.data;
        return invoices;
    }

    async getEmployee(id: number): Promise<Employee> {
        const response = await this._axiosInstace.get<Employee>(`employees/${id}`);
        return response.data;
    }
}

const apiClient: ApiClient = new ApiClientImpl();
export default apiClient;