app.get('/todos', async (req, res) =>{
    const car = await getCars (db); res.json (car);
})
