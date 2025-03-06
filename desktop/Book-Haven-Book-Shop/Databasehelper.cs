using System;
using System.Data.SQLite;
using System.IO;

namespace BookHaven
{
    public class DatabaseHelper
    {
        private static string dbFile = "Database/BookHaven.db";  // Database file location
        private static string connectionString = $"Data Source={dbFile};Version=3;";

        public static void InitializeDatabase()
        {
            if (!File.Exists(dbFile))  // Check if the database file exists
            {
                SQLiteConnection.CreateFile(dbFile);  // Create database file

                using (var conn = new SQLiteConnection(connectionString))
                {
                    conn.Open();

                    // SQL queries to create tables
                    string createBooksTable = @"
                        CREATE TABLE IF NOT EXISTS Books (
                            Id INTEGER PRIMARY KEY AUTOINCREMENT,
                            Title TEXT NOT NULL,
                            Author TEXT NOT NULL,
                            Price REAL NOT NULL,
                            Quantity INTEGER NOT NULL
                        );";

                    string createAdminTable = @"
                        CREATE TABLE IF NOT EXISTS Admin (
                            Id INTEGER PRIMARY KEY AUTOINCREMENT,
                            Username TEXT NOT NULL UNIQUE,
                            Password TEXT NOT NULL
                        );";

                    // Execute queries
                    using (var cmd = new SQLiteCommand(createBooksTable, conn))
                        cmd.ExecuteNonQuery();

                    using (var cmd = new SQLiteCommand(createAdminTable, conn))
                        cmd.ExecuteNonQuery();
                }
                Console.WriteLine("Database and tables created successfully!");
            }
        }
    }
}
