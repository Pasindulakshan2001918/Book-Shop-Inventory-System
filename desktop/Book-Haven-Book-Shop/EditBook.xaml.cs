using System;
using System.Data.SQLite;
using System.Windows;
using System.Windows.Controls;

namespace BookShopInventory
{
    public partial class EditBook : Window
    {
        private string dbConnectionString = "Data Source=C:\\Users\\Pasindu\\source\\repos\\Book-Haven-Book-Shop\\BookShop.db;Version=3;";

        public EditBook()
        {
            InitializeComponent();
        }

        // Event handler for the "Edit Book" button
        private void EditBookButton_Click(object sender, RoutedEventArgs e)
        {
            string bookName = BookNameTextBox.Text.Trim();
            string author = AuthorTextBox.Text.Trim();
            string genre = (GenreyComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
            string priceText = PriceTextBox.Text.Trim();
            string stockQuantityText = StockQuantityTextBox.Text.Trim();

            // Validate inputs
            if (string.IsNullOrEmpty(bookName) || string.IsNullOrEmpty(author) || string.IsNullOrEmpty(genre) ||
                string.IsNullOrEmpty(priceText) || string.IsNullOrEmpty(stockQuantityText))
            {
                MessageBox.Show("❌ Please fill in all the fields.", "Input Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Validate if StockQuantity is a valid number
            if (!int.TryParse(stockQuantityText, out int stockQuantity) || stockQuantity < 0)
            {
                MessageBox.Show("❌ Stock quantity must be a valid positive number.", "Input Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Ask for confirmation before updating the book data
            MessageBoxResult result = MessageBox.Show($"Are you sure you want to update the book '{bookName}' by {author} in the '{genre}' genre?\nPrice: {priceText}\nStock Quantity: {stockQuantity}",
                "Confirm Edit", MessageBoxButton.YesNo, MessageBoxImage.Warning);

            if (result == MessageBoxResult.Yes)
            {
                try
                {
                    using (SQLiteConnection conn = new SQLiteConnection(dbConnectionString))
                    {
                        conn.Open();

                        // Update the book data in the Books table
                        string updateQuery = @"UPDATE Books
                                               SET BookName = @BookName, Author = @Author, Genre = @Genre, Price = @Price, StockQuantity = @StockQuantity
                                               WHERE BookName = @BookName;"; // Assuming BookName is unique identifier for the book
                        using (SQLiteCommand updateCmd = new SQLiteCommand(updateQuery, conn))
                        {
                            updateCmd.Parameters.AddWithValue("@BookName", bookName);
                            updateCmd.Parameters.AddWithValue("@Author", author);
                            updateCmd.Parameters.AddWithValue("@Genre", genre);
                            updateCmd.Parameters.AddWithValue("@Price", priceText); // Store price as is (no validation)
                            updateCmd.Parameters.AddWithValue("@StockQuantity", stockQuantity);

                            int rowsAffected = updateCmd.ExecuteNonQuery();

                            if (rowsAffected > 0)
                            {
                                MessageBox.Show($"✅ Book '{bookName}' by {author} has been updated successfully.", "Book Updated", MessageBoxButton.OK, MessageBoxImage.Information);

                                // Clear input fields after a successful update
                                BookNameTextBox.Clear();
                                AuthorTextBox.Clear();
                                GenreyComboBox.SelectedIndex = -1;
                                PriceTextBox.Clear();
                                StockQuantityTextBox.Clear();
                            }
                            else
                            {
                                MessageBox.Show("❌ Book data was not updated. Please try again.", "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
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
            // Navigate to the AddBook page
            AddBook addBookPage = new AddBook();
            addBookPage.Show();
            this.Close();
        }

        private void EditBook_Click(object sender, RoutedEventArgs e)
        {
            // Already in EditBook window
        }

        // Event handler for "Delete Book" button click
        private void DeleteBook_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the DeleteBook page
            DeleteBook deleteBookPage = new DeleteBook();
            deleteBookPage.Show();
            this.Close();
        }

        // Event handler for "Log Out" button click
        private void LogOut_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the MainWindow (Log out)
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            this.Close();
        }
    }
}
