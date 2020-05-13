namespace Api_CRUD.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class clientes
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public clientes()
        {
            salas = new HashSet<salas>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long identificacion { get; set; }

        [Required]
        [StringLength(200)]
        public string nombre { get; set; }

        [Required]
        [StringLength(200)]
        public string apellido { get; set; }

        public long telefono { get; set; }

        [Required]
        [StringLength(50)]
        public string correo { get; set; }

        public int id_ciudad { get; set; }

        public int id_departamento { get; set; }

        public int edad { get; set; }

        public virtual ciudades ciudades { get; set; }

        public virtual departamentos departamentos { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<salas> salas { get; set; }
    }
}
