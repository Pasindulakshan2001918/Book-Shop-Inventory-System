import React from 'react'
import { useDeleteBookMutation, useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { Link, useNavigate } from 'react-router-dom';
import './ManageBooks.css';

const ManageBooks = () => {
    const navigate = useNavigate();

    const {data: books, refetch} = useFetchAllBooksQuery()

    const [deleteBook] = useDeleteBookMutation()

    // Handle deleting a book
    const handleDeleteBook = async (id) => {
        try {
            await deleteBook(id).unwrap();
            alert('Book deleted successfully!');
            refetch();
        } catch (error) {
            console.error('Failed to delete book:', error.message);
            alert('Failed to delete book. Please try again.');
        }
    };

    // Handle navigating to Edit Book page
    const handleEditClick = (id) => {
        navigate(`dashboard/edit-book/${id}`);
    };

  return (
    <section className="padding-y-bg-light">
        <div className="full-width-responsive">
            <div className="relative-container">
                <div className="rounded-top">
                    <div className="flex-wrap-items-center">
                        <div className="w-full-grow">
                            <h3 className="font-bold-base">
                                <span className="left-align">All Books</span>
                                <button className="btn-indigo right-align" type="button">See all</button>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="block-full-overflow">
                    <table className="items-center-full">
                        <thead>
                            <tr>
                                <th className="table-cell-style">#</th>
                                <th className="table-cell-style title-column">Book Title</th>
                                <th className="table-cell-style">Category</th>
                                <th className="table-cell-style">Price</th>
                                <th className="table-cell-style">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books && books.map((book, index) => (
                                <tr key={index}>
                                    <th className="table-data-style">{index + 1}</th>
                                    <td className="table-data-style title-column left-align">{book.title}</td>
                                    <td className="table-data-style">{book.category}</td>
                                    <td className="table-data-style">${book.newPrice}</td>
                                    <td className="table-data-style">
                                        <Link to={`/dashboard/edit-book/${book._id}`} className="text-link">Edit</Link>
                                        <button onClick={() => handleDeleteBook(book._id)} className="btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ManageBooks;
