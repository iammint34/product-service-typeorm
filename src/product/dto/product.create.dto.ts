export interface CreateProduct {
    id?: number;
    uuid: string;
    code: string;
    name: string;
    price: number;
    status: string;
    created_at?: any;
    updated_at?: any;
}