namespace Api_CRUD.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class salas
    {
        [Key]
        public int id_sala { get; set; }

        public DateTime fecha_evento { get; set; }

        [Required]
        [StringLength(100)]
        public string capacidad { get; set; }

        public int id_motivo { get; set; }

        [Required]
        [StringLength(250)]
        public string observaciones { get; set; }

        [Required]
        [StringLength(20)]
        public string estado { get; set; }

        public long identificacion { get; set; }

        public virtual clientes clientes { get; set; }

        public virtual motivos motivos { get; set; }
    }
}
