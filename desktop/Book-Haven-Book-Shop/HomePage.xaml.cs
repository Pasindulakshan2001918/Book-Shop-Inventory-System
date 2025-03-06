using System.Windows;

namespace BookShopInventory
{
    public partial class HomePage : Window
    {
        public HomePage()
        {
            InitializeComponent();
        }

        
        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            
            MainFrame.Navigate(new Dashboard());
        }

        
        private void AddBook_Click(object sender, RoutedEventArgs e)
        {
            AddBook addBookWindow = new AddBook();

            
            addBookWindow.Show();

            
            this.Close();
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
