using System;
using System.Data.SQLite;
using System.Windows;

namespace BookShopInventory
{
    public partial class AdminSignin : Window
    {
        private string dbConnectionString = "Data Source=C:\\Users\\Pasindu\\source\\repos\\Book-Haven-Book-Shop\\BookShop.db;Version=3;";

        public AdminSignin()
        {
            InitializeComponent();
            CreateAdminTableIfNotExists(); // Ensure the Admin table is created
        }

        private void AdminSignin_Click(object sender, RoutedEventArgs e)
        {
            string email = EmailTextBox.Text.Trim();
            string password = PasswordBox.Password.Trim();

            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("❌ Please enter both Email and Password.", "Input Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            try
            {
                using (SQLiteConnection conn = new SQLiteConnection(dbConnectionString))
                {
                    conn.Open();

                    // Insert admin details into the database
                    string insertQuery = "INSERT INTO Admin (Email, Password) VALUES (@Email, @Password);";
                    using (SQLiteCommand insertCmd = new SQLiteCommand(insertQuery, conn))
                    {
                        insertCmd.Parameters.AddWithValue("@Email", email);
                        insertCmd.Parameters.AddWithValue("@Password", password);
                        int rowsAffected = insertCmd.ExecuteNonQuery();

                        if (rowsAffected > 0)
                        {
                            MessageBox.Show("✅ Admin signed in successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                            // Redirect to HomePage
                            HomePage homePage = new HomePage();
                            homePage.Show();
                            this.Close();
                        }
                        else
                        {
                            MessageBox.Show("❌ Data was not inserted. Please try again.", "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("❌ Error: " + ex.Message, "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // Method to create the Admin table if it doesn't exist
        private void CreateAdminTableIfNotExists()
        {
            try
            {
                using (SQLiteConnection conn = new SQLiteConnection(dbConnectionString))
                {
                    conn.Open();

                    string createTableQuery = @"CREATE TABLE IF NOT EXISTS Admin (
                        Id INTEGER PRIMARY KEY AUTOINCREMENT,
                        Email TEXT UNIQUE NOT NULL,
                        Password TEXT NOT NULL
                    );";

                    using (SQLiteCommand cmd = new SQLiteCommand(createTableQuery, conn))
                    {
                        cmd.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("❌ Error creating Admin table: " + ex.Message, "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}
