async function loadBooks() {
  const res = await fetch('/api/books');
  const books = await res.json();
  const list = document.getElementById('book-list');
  list.innerHTML = books.map(b => `<li>${b.title} oleh ${b.author}</li>`).join('');
}
