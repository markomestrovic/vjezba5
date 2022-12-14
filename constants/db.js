class Database {
    data = {
        users: [
            {
                id: 1,
                name: 'John Doe',
                email: 'johndoe@test.com',
                // !IMPORTANT: Should be slow hashed in real world
                password: '123456',
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'janedoe@test.com',
                // !IMPORTANT: Should be slow hashed in real world
                password: '123456',
            },
            {
                id: 3,
                name: 'Rudolf Doe',
                email: 'rula@example.com',
                // !IMPORTANT: Should be slow hashed in real world
                password: '123456',
            },
        ],
    };

    getUserByEmailAndPassword(email, password) {
        return this.data.users.find(
            (user) => user.email === email && user.password === password
        );
    }

    getUserById(id) {
        return this.data.users.find((user) => user.id === id);
    }
}

export default Database;
