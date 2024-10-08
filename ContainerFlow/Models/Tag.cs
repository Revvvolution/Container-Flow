using System.ComponentModel.DataAnnotations;

namespace ContainerFlow.Models
{
    public class Tag
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
    }
}
