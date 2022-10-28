export interface Product {
    id?: number;
    uuid: string;
    code: string;
    name: string;
    price: number;
    status: string;
    created_at?: any;
    updated_at?: any;
}

export interface Filters {
    search ?: string;
    code ?: string;
    name ?: string;
    page ?: number;
    perPage ?: number;
    status?: string;
    sort?: string;
    order?: string;
}