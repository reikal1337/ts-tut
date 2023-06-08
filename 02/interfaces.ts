interface User  {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(cName: string): number
}

interface User {
    githubToken?: string
}

interface Admin extends User {
    role: "admin" | "mod"
}


const tommyT: Admin = {
    dbId: 1564312,
    email: "toommy@email.com",
    userId: 28,
    role: "admin",
    githubToken: "tommy1337",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "moneyBack25") => {
        return 25
    }
}