using System;
using System.Data.SQLite;
using System.Windows;
using System.Windows.Controls;

namespace BookShopInventory
{
    public partial class DeleteBook : Window
    {
        private string dbConnectionString = "Data Source=C:\\Users\\Pasindu\\source\\repos\\Book-Haven-Book-Shop\\BookShop.db;Version=3;"; // Database connection string

        public DeleteBook()
        {
            InitializeComponent();
        }

        // Event handler for the "Delete Book" button
        private void DeleteBookButton_Click(object sender, RoutedEventArgs e)
        {
            string bookName = BookNameTextBox.Text.Trim();
            string author = AuthorTextBox.Text.Trim();
            string genre = (GenreComboBox.SelectedItem as ComboBoxItem)?.Content.ToString(); // Change 'Category' to 'Genre'

            // Validate if fields are empty
            if (string.IsNullOrEmpty(bookName) || string.IsNullOrEmpty(author) || string.IsNullOrEmpty(genre)) // Change 'category' to 'genre'
            {
                MessageBox.Show("Please fill in all fields to delete a book.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Ask for confirmation before deleting
            MessageBoxResult result = MessageBox.Show($"Are you sure you want to delete the book '{bookName}' by {author} from genre '{genre}'?", // Change 'category' to 'genre'
                "Confirm Deletion", MessageBoxButton.YesNo, MessageBoxImage.Warning);

            if (result == MessageBoxResult.Yes)
            {
                try
                {
                    using (SQLiteConnection conn = new SQLiteConnection(dbConnectionString))
                    {
                        conn.Open();

                        // Improved query using LIKE for more flexible matching
                        string deleteQuery = @"DELETE FROM Books WHERE BookName LIKE @BookName AND Author LIKE @Author AND Genre LIKE @Genre"; // Change 'Category' to 'Genre'
                        using (SQLiteCommand deleteCmd = new SQLiteCommand(deleteQuery, conn))
                        {
                            // Use parameters to avoid SQL injection
                            deleteCmd.Parameters.AddWithValue("@BookName", "%" + bookName + "%");
                            deleteCmd.Parameters.AddWithValue("@Author", "%" + author + "%");
                            deleteCmd.Parameters.AddWithValue("@Genre", "%" + genre + "%"); // Change 'Category' to 'Genre'

                            int rowsAffected = deleteCmd.ExecuteNonQuery();

                            if (rowsAffected > 0)
                            {
                                MessageBox.Show("The book has been successfully deleted.", "Book Deleted", MessageBoxButton.OK, MessageBoxImage.Information);

                                // Clear the form after deletion
                                BookNameTextBox.Clear();
                                AuthorTextBox.Clear();
                                GenreComboBox.SelectedIndex = -1; // Change 'Category' to 'Genre'
                            }
                            else
                            {
                                MessageBox.Show("❌ The book could not be found. Please check the entered details.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("❌ Error: " + ex.Message, "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        // Event handler for "Dashboard" button click
        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Dashboard());
        }

        // Event handler for "Add Book" button click
        private void AddBook_Click(object sender, RoutedEventArgs e)
        {
            AddBook addBookPage = new AddBook();
            addBookPage.Show();
            this.Close();
        }

        // Event handler for "Edit Book" button click
        private void EditBook_Click(object sender, RoutedEventArgs e)
        {
            EditBook editBookPage = new EditBook();
            editBookPage.Show();
            this.Close();
        }

        // Event handler for "Log Out" button click
        private void LogOut_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            this.Close();
        }
    }
}
