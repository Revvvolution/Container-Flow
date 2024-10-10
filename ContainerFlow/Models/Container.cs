using System.ComponentModel.DataAnnotations;

namespace ContainerFlow.Models
{
    public class Container
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        [MaxLength(255)]
        public string? Description { get; set; }

        [Required]
        public int UserProfileId { get; set; }
    }
}
