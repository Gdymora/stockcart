export interface User {
    email: string;
    password: string;
}

export interface Users {
    id?: number;
    role_id: number;
    status: number;
    email: string;
    pasword?: string;
    fio: string;
    created?: string;
    updated?: string;
}