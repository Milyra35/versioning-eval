function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier titre";

    editBtn.onclick = () => {
      // Insérer ici le code pour modifier le titre du livre
      const input = document.createElement('input');
      input.type = "text";
      const btn = document.createElement('button');
      btn.textContent = "Ok";

      titleTd.appendChild(input);
      titleTd.appendChild(btn);

      btn.onclick = () => {
        titleTd.textContent = input.value;
      }
    };
    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
