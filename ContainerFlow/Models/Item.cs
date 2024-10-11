using System.ComponentModel.DataAnnotations;

namespace ContainerFlow.Models
{
    public class Item
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        [MaxLength(255)]
        public string? Description { get; set; }

        public int? TagId { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public int? ContainerId  { get; set; }
    }
}
