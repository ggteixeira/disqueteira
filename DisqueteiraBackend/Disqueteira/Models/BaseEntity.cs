using System.ComponentModel.DataAnnotations;

namespace Disqueteira.Models;

/// <summary>
/// Base Entity
/// </summary>
public class BaseEntity
{
    [Key] [Required] public int Id { get; set; }
    [Required] public string Name { get; set; }
}