const API_BASE_URL = import.meta.env.VITE_BACKEND_URL

if(!API_BASE_URL) throw new Error('URL do backend não está definida nas configurações')

export function buildApiUrl (route:string) {
    return `${API_BASE_URL}${route}`
}

export const API_ROUTES = {
    auth: {
        login: '/auth/login',
        me: '/auth/me'
    },
    user: {
        organizations: '/user/organizations'
    }
}