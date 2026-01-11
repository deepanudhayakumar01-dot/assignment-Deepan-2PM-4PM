const users = [
    { id: 1, name: "Deepan", role: "Developer" },
    { id: 2, name: "Arun", role: "Tester" },
    { id: 3, name: "Karthik", role: "Designer" }
];
function fetchUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    });
}
async function getUsers() {
    try {
        const data = await fetchUsers();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
