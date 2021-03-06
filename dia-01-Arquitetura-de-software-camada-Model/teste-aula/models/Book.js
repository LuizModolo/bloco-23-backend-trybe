const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books')

  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books WHERE author_id = ?', [id]);

  return books;
}

module.exports = {
  getAll,
  getByAuthorId,
}