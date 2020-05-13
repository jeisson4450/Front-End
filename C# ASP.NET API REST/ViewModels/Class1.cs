using System;
using System.ComponentModel.DataAnnotations;

namespace ViewModels
{
        public class Cliente
        {

            [Key]
            public long identificacion { get; set; }
            [Required(ErrorMessage = "ingrese el nombre")]
            [MaxLength(200, ErrorMessage = "El nombre supera la capacidad del campo")]
            public string nombre { get; set; }
            [Required(ErrorMessage = "ingrese el apellido")]
            [MaxLength(200, ErrorMessage = "El apellido supera la capacidad del campo")]
            public string apellido { get; set; }
            [Required(ErrorMessage = "debe ingresar un telefono valido")]

            public long telefono { get; set; }
            [Required(ErrorMessage = "ingrese un correo")]
            [EmailAddress(ErrorMessage = "Ingrese un correo valido")]
            public string correo { get; set; }
            [Required(ErrorMessage = "Debe asignar una ciudad")]
            public int id_ciudad { get; set; }
            [Required(ErrorMessage = "Debe asignar un departamento")]
            public int id_departamento { get; set; }
            [Required(ErrorMessage = "Ingrese la edad")]
            [Range(18, 100, ErrorMessage = "debe ser mayor de 18 años")]
            public int edad { get; set; }

            public string ciudades { get; set; }
            public string departamento { get; set; }

        }

        public class Ciudades
        {
            public int id_ciudad { get; set; }
            public string ciudad { get; set; }
            public int id_departamento { get; set; }
        }
        public class Solicitud
        {
            [Key]
            public int id_sala { get; set; }

            public DateTime fecha_evento { get; set; }

            [Required(ErrorMessage = "Ingrese la capacidad")]
            [MaxLength(200, ErrorMessage = "ingrese un dato valido")]
            public string capacidad { get; set; }
            [Required(ErrorMessage = "Seleccione el motivo")]
            public int id_motivo { get; set; }

            [Required(ErrorMessage = "Ingrese la observacion")]
            [MaxLength(200, ErrorMessage = "la observacion supera el limite de caracteres")]
            public string observaciones { get; set; }

            [Required(ErrorMessage = "Ingrese el estado de la solicitud")]
            [MaxLength(200, ErrorMessage = "ingrese un dato valido")]
            public string estado { get; set; }
            [Required(ErrorMessage = "Ingrese la identificacion del cliente")]
            [MaxLength(200, ErrorMessage = "ingrese un dato valido")]
            public long identificacion { get; set; }

        }

        public class Departamentos
        {
            public int id_departamento { get; set; }
            public string departamento { get; set; }
        }
        public class Fechas
        {
            public DateTime f_incial { get; set; }
            public DateTime f_final { get; set; }
        }

        public class object_error
        {
            public string Error { get; set; }
            public string Detalle { get; set; }
        }
}

