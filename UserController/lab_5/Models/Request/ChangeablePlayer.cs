using System.ComponentModel.DataAnnotations;

namespace lab_5.Models.Request
{
    public enum GameLevel
    {
        Easy, Medium, Hard
    }
    public class ChangeablePlayer
    {
        [StringLength(15, MinimumLength = 4)]
        [RegularExpression(@"^[a-zA-Z0-9_]+$", ErrorMessage = "Can contain only leters, numbers and symbol _ without whitespaces")]
        [Required]
        public string Name { get; set; }

        [EmailAddress]
        [Required]
        public string Email { get; set; }

        [StringLength(15, MinimumLength = 5)]
        [Required]
        public string Password { get; set; }
        public GameLevel Level { get; set; }
    }
}
