using System.ComponentModel.DataAnnotations;

namespace BookHaven.Models
{
    public class Book
    {
        [Key] // Marks this property as the primary key
        public int Id { get; set; }

        [Required] // Ensures this field is not null
        public string BookName { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public string Author { get; set; }

        // Optional: Add additional properties if needed
        public string Genre { get; set; } // Example: Fiction, Non-Fiction, etc.
        public int StockQuantity { get; set; } // Example: Number of books in stock
    }
}