using System;
using System.Data.SQLite;
using System.Windows;

namespace BookShopInventory
{
    public partial class AdminLogin : Window
    {
        private string dbConnectionString = "Data Source=C:\\Users\\Pasindu\\source\\repos\\Book-Haven-Book-Shop\\BookShop.db;Version=3;";

        public AdminLogin()
        {
            InitializeComponent();
        }

        private void AdminLogin_Click(object sender, RoutedEventArgs e)
        {
            string email = AdminEmailTextBox.Text.Trim();
            string password = AdminPasswordBox.Password.Trim();

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

                    // Query to check if the email and password exist in the database
                    string loginQuery = "SELECT COUNT(*) FROM Admin WHERE Email = @Email AND Password = @Password;";
                    using (SQLiteCommand cmd = new SQLiteCommand(loginQuery, conn))
                    {
                        cmd.Parameters.AddWithValue("@Email", email);
                        cmd.Parameters.AddWithValue("@Password", password);

                        int count = Convert.ToInt32(cmd.ExecuteScalar());

                        if (count > 0)
                        {
                            // Successfully logged in
                            MessageBox.Show("✅ Login successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                            // Redirect to HomePage
                            HomePage homePage = new HomePage();
                            homePage.Show();
                            this.Close();
                        }
                        else
                        {
                            // Invalid login credentials
                            AdminErrorMessage.Visibility = Visibility.Visible;
                            AdminErrorMessage.Text = "❌ Invalid email or password.";
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
}
