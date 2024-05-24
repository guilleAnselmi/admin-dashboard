/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_AUTH0_DOMAIN: string;
    readonly VITE_AUTH0_CLIENTID: string;
    readonly VITE_AUTH0_REDIRECT_URI: string;
    readonly VITE_AUTH0_LOGOUT_URI: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}