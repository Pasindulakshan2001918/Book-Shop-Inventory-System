using BookHaven.Data; // Updated namespace
using System;
using System.Windows;

namespace BookHaven // Updated namespace
{
    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            Console.WriteLine("Application is starting...");

            // Initialize the database directly
            using (var context = new BookShopContext())
            {
                context.Database.EnsureCreated(); // Creates the database if it doesn't exist
            }
        }
    }
}