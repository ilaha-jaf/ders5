const express = require('express');
const app=express();
const users=[
    {id:1, userName:"Ilahe", age:20},
    {id:2, userName:"Zakir", age:20},
    {id:3, userName:"Nigar", age:19}
]
app.get('/users', (req, res) => {
    res.send(users);
  });
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
