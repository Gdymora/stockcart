export interface User {
    email: string
    password: string
}


export interface Page {
    total: number
    size: number
    count: number
    number: number
}

export interface Users {
    id?: number
    role_id: number
    role_name?: string
    status: number
    email: string
    pasword?: string
    fio: string
    created?: string
    updated?: string
    data: Users
}

export interface Role {
    id?: number
    parent_id?: number
    name?: string
    status?: number
    created?: string
    updated?: string
    data: Role
}

export interface Categories {
    data: [Category]
    order:  'asc' | 'desc';
    page: Page
    search: []
}

export interface Category {
    id?: number
    parent_id: number
    name: string
    status: number
    created: Date
    updated: Date
}

export interface Positions {
    data: [Position]
    order:  'asc' | 'desc';
    page: Page
    search: []
}

export interface Position {
    id?: number
    category_id?: number
    name?: string
    description?: string
    article?: string
    is_deleted?: number
    created?: Date
    updated?: Date
}