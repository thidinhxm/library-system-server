const Librarian= require("./librarianModel")

exports.getLibrarianByEmail = async (email) => {
  const librarian = await Librarian.findOne({ username: email });
  return librarian;
}
