//go6CDlkKHOzCOoL9
const mode = "live"; // live or live

const cred = {
    live: {
        user: "graceapp",
        password: "7Sj9kc6roWbTTqjg",
        id:"ouy6lae"
    },
    redundent: {
        user: "adolphushhh",
        password: "9BmlLeY6UqifCsdo",
        id: "7jn2q7j"
    }
}
export const config = {
    dnUrl: `mongodb+srv://${cred[mode].user}:${cred[mode].password}@cluster0.${cred[mode].id}.mongodb.net/Gaming`
}

// live - 
// live 7Sj9kc6roWbTTqjg - graceapp
// testing - mongodb+srv://adolphushhh:9BmlLeY6UqifCsdo@cluster0.7jn2q7j.mongodb.net/
// testing - 
