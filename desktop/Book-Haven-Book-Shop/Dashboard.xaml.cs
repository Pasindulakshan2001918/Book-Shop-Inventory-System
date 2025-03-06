using System;
using System.Windows;
using System.Windows.Controls;

namespace BookShopInventory
{
    public partial class Dashboard : Page
    {
        public Dashboard()
        {
            InitializeComponent();
        }

        // Event handler for the "Dashboard" button click
        private void DashboardButton_Click(object sender, RoutedEventArgs e)
        {
            // Logic to navigate to the current dashboard (optional if it's already on the dashboard)
            MessageBox.Show("You are already on the Dashboard.");
        }

        // Event handler for the "Add Book" button click
        private void AddBookButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the AddBook page
            AddBook addBookPage = new AddBook();
            this.NavigationService.Navigate(addBookPage);
        }

        // Event handler for the "Edit Book" button click
        private void EditBookButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the EditBook page
            EditBook editBookPage = new EditBook();
            this.NavigationService.Navigate(editBookPage);
        }

        // Event handler for the "Delete Book" button click
        private void DeleteBookButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the DeleteBook page
            DeleteBook deleteBookPage = new DeleteBook();
            this.NavigationService.Navigate(deleteBookPage);
        }

        // Event handler for the "Log Out" button click
        private void LogoutButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the login page or home page (MainWindow or LoginPage)
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            // Close the current window (Dashboard)
            Application.Current.Shutdown();
        }

        // Event handler for the page loaded event
        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            // Simulate loading dynamic data such as total books, total sales, etc.
            TotalBooksTextBlock.Text = "1500"; // Example dynamic data
            TotalSalesTextBlock.Text = "$12,345"; // Example dynamic data
            PendingOrdersTextBlock.Text = "23"; // Example dynamic data

            // Optionally, bind real data to the ListView (Recent Transactions)
            var recentTransactions = GetRecentTransactions();
           // RecentTransactionsListView.ItemsSource = recentTransactions;
        }

        // Method to get recent transactions (example data)
        private object GetRecentTransactions()
        {
            // This method can be modified to fetch real data from the database or other sources
            return new[]
            {
                new { BookTitle = "The Great Gatsby", CustomerName = "John Doe", Date = DateTime.Now.AddDays(-1).ToString("MM/dd/yyyy"), Amount = "$25" },
                new { BookTitle = "1984", CustomerName = "Jane Smith", Date = DateTime.Now.AddDays(-2).ToString("MM/dd/yyyy"), Amount = "$18" },
                new { BookTitle = "Moby Dick", CustomerName = "David Lee", Date = DateTime.Now.AddDays(-3).ToString("MM/dd/yyyy"), Amount = "$30" }
            };
        }
    }
}
