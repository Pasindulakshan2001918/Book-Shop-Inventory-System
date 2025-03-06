using System;
using System.Data.SQLite;
using System.Windows;
using System.Windows.Controls;

namespace BookShopInventory
{
    public partial class AddBook : Window
    {
        private string dbConnectionString = "Data Source=C:\\Users\\Pasindu\\source\\repos\\Book-Haven-Book-Shop\\BookShop.db;Version=3;";

        public AddBook()
        {
            InitializeComponent();
            CreateBooksTableIfNotExists(); // Ensure the Books table is created
        }

        // Event handler for the "Add Book" button
        private void AddBookButton_Click(object sender, RoutedEventArgs e)
        {
            string bookName = BookNameTextBox.Text.Trim();
            string author = AuthorTextBox.Text.Trim();
            string genre = (GenreComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
            string price = PriceTextBox.Text.Trim();
            string stockQuantityText = StockQuantityTextBox.Text.Trim(); // Get stock quantity input

            // Validate inputs
            if (string.IsNullOrEmpty(bookName) || string.IsNullOrEmpty(author) || string.IsNullOrEmpty(genre) || string.IsNullOrEmpty(price) || string.IsNullOrEmpty(stockQuantityText))
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

            try
            {
                using (SQLiteConnection conn = new SQLiteConnection(dbConnectionString))
                {
                    conn.Open();

                    // Insert book data into the Books table, including StockQuantity
                    string insertQuery = "INSERT INTO Books (BookName, Author, Genre, Price, StockQuantity) VALUES (@BookName, @Author, @Genre, @Price, @StockQuantity);";
                    using (SQLiteCommand insertCmd = new SQLiteCommand(insertQuery, conn))
                    {
                        insertCmd.Parameters.AddWithValue("@BookName", bookName);
                        insertCmd.Parameters.AddWithValue("@Author", author);
                        insertCmd.Parameters.AddWithValue("@Genre", genre);
                        insertCmd.Parameters.AddWithValue("@Price", price);
                        insertCmd.Parameters.AddWithValue("@StockQuantity", stockQuantity); // Insert stock quantity

                        int rowsAffected = insertCmd.ExecuteNonQuery();

                        if (rowsAffected > 0)
                        {
                            MessageBox.Show($"✅ Book '{bookName}' by {author} has been added under genre '{genre}' with price {price} and {stockQuantity} in stock.",
                                "Book Added", MessageBoxButton.OK, MessageBoxImage.Information);

                            // Clear input fields after a successful entry
                            BookNameTextBox.Clear();
                            AuthorTextBox.Clear();
                            GenreComboBox.SelectedIndex = -1;
                            PriceTextBox.Clear();
                            StockQuantityTextBox.Clear(); // Clear stock quantity field
                        }
                        else
                        {
                            MessageBox.Show("❌ Book data was not inserted. Please try again.", "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("❌ Error: " + ex.Message, "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // Method to create the Books table if it doesn't exist
        private void CreateBooksTableIfNotExists()
        {
            try
            {
                using (SQLiteConnection conn = new SQLiteConnection(dbConnectionString))
                {
                    conn.Open();

                    string createTableQuery = @"CREATE TABLE IF NOT EXISTS Books (
                        Id INTEGER PRIMARY KEY AUTOINCREMENT,
                        BookName TEXT NOT NULL,
                        Author TEXT NOT NULL,
                        Genre TEXT NOT NULL,
                        Price TEXT NOT NULL,
                        StockQuantity INTEGER NOT NULL DEFAULT 0  -- Added Stock Quantity
                    );";

                    using (SQLiteCommand cmd = new SQLiteCommand(createTableQuery, conn))
                    {
                        cmd.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("❌ Error creating Books table: " + ex.Message, "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // ------------------- Sidebar Navigation -------------------

        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Dashboard());
        }

        private void AddBook_Click(object sender, RoutedEventArgs e)
        {
            // Already in AddBook window, no action needed
        }

        private void EditBook_Click(object sender, RoutedEventArgs e)
        {
            EditBook editBookWindow = new EditBook();
            editBookWindow.Show();
            this.Close();
        }

        private void DeleteBook_Click(object sender, RoutedEventArgs e)
        {
            DeleteBook deleteBookWindow = new DeleteBook();
            deleteBookWindow.Show();
            this.Close();
        }

        private void LogOut_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            this.Close();
        }
    }
}
