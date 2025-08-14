const express = require('express');
const app = express();
const PORT =  3000;

app.use(express.json());

let users = [
    {id: 1, lastName:`navaja`,firstName:`leslie`, section:`bsit4a`, status:`p`},
    {id: 2, lastName:`casañada`,firstName:`mark eugine`, section:`bsit4a`, status:`a`},
];
    

app.get("/users", (req,res) => {
    const {lastName, firstName, section, status} = req.body

    const userIndex = users.findIndex(
        user => 
            user.firstName === firstName &&
            user.lastName === lastName
    )

    if (userIndex !== -1) {
        users[userIndex].status = status;
        console.log(`Update attendance for ${lastName} ${firstName} to  ${status} `);
        res.status(200).json({message:`attendance for ${lastName} ${firstName} has been updated to  ${status} `});
    } else {
        const newUsers = {
            id : users.length + 1,
            lastName,
            firstName,
            section,
            status  
        };
        users.push(newUsers);
        console.log(`New User added: ${lastName}, ${firstName} with status:  ${status} `)
        res.status(201).json({message:`attendance for ${lastName} ${firstName} has been updated to  ${status} `});
    };
})


app.get("/users", (req,res) => {
    res.status(200).json(users);
});


app.get("/", (req,res) => {
    res.send(`Server is up and Runnning!`);
});



app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);

})

module.exports = app;


