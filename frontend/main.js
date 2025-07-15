async function loadBooks() {
  try {
    const res = await fetch('/api/books');
    const books = await res.json();

    const container = document.getElementById('book-list');
    container.innerHTML = '';

    books.forEach(book => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-3';

      col.innerHTML = `
        <div class="card book-card">
          <span class="type-badge">E-Book</span>
          <img src="${book.description}" class="card-img-top book-img" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="text-muted small mb-2">Oleh: ${book.author}</p>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-danger">Terlaris</span>
              <div class="rating">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                <span class="ms-1">4.5</span>
              </div>
            </div>
            <div class="mb-2">
              <span class="kategori-badge">${book.type || 'Umum'}</span>
            </div>
            <a href="#" class="btn btn-sm btn-primary w-100">Baca Gratis</a>
          </div>
        </div>
      `;

      container.appendChild(col);
    });

  } catch (err) {
    console.error('Gagal memuat data buku:', err);
  }
}

window.onload = loadBooks;
