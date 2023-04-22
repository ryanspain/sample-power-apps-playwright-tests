export interface PowerAppsConfig {
    tenant: Tenant;
    app: PowerApp;
    users: PowerAppUsers;
}

export interface Tenant {
    signInUrl: string;
    signedInUrl: string;
}

export interface PowerApp {
    displayName: string;
    url: string;
}

export interface PowerAppUsers {
    [key: string] : {
        email: string;
        password: string;
        storageStatePath: string;
    };
}

const config : PowerAppsConfig = {
    tenant: {
        signInUrl: process.env.SIGN_IN_URL!,
        signedInUrl: "microsoft365.com",
    },
    app: {
        url: process.env.APP_URL!,
        displayName: process.env.APP_NAME!
    },
    users: {
        "Test user 1": {
            email: process.env.USER_EMAIL!,
            password: process.env.USER_PASSWORD!,
            storageStatePath: './playwright/.auth/user1.json'
        },
        "Test user 2": {
            email: process.env.USER_EMAIL!,
            password: process.env.USER_PASSWORD!,
            storageStatePath: './playwright/.auth/user2.json'
        }
    }
};

export default config;