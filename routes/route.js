app.post('/api/register', async (req, res) => {
  // validasi dan simpan user
});

app.post('/api/login', async (req, res) => {
  // validasi dan login
});

app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post('/api/favorites', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  // logic favorit
  await user.save();
  res.json({ favorites: user.favorites });
});

// All else → serve frontend:
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running 🔥 on port ${port}`));
