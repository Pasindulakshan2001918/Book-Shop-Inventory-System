using System;
using System.Windows;

namespace BookShopInventory
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void AdminLogin_Click(object sender, RoutedEventArgs e)
        {
            // Open AdminLogin window
            AdminLogin adminLoginWindow = new AdminLogin();
            adminLoginWindow.Show();

            // Close MainWindow (optional)
            this.Close();
        }

        private void AdminSignUp_Click(object sender, RoutedEventArgs e)
        {
            // Open AdminSignin window
            AdminSignin adminSigninWindow = new AdminSignin();
            adminSigninWindow.Show();

            // Close MainWindow (optional)
            this.Close();
        }
    }
}
