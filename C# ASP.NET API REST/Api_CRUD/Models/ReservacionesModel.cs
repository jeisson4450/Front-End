namespace Api_CRUD.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ReservacionesModel : DbContext
    {
        public ReservacionesModel()
            : base("name=ReservacionesModel")
        {
        }

        public virtual DbSet<ciudades> ciudades { get; set; }
        public virtual DbSet<clientes> clientes { get; set; }
        public virtual DbSet<departamentos> departamentos { get; set; }
        public virtual DbSet<motivos> motivos { get; set; }
        public virtual DbSet<salas> salas { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ciudades>()
                .Property(e => e.ciudad)
                .IsUnicode(false);

            modelBuilder.Entity<ciudades>()
                .HasMany(e => e.clientes)
                .WithRequired(e => e.ciudades)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<clientes>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<clientes>()
                .Property(e => e.apellido)
                .IsUnicode(false);

            modelBuilder.Entity<clientes>()
                .Property(e => e.correo)
                .IsUnicode(false);

            modelBuilder.Entity<clientes>()
                .HasMany(e => e.salas)
                .WithRequired(e => e.clientes)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<departamentos>()
                .Property(e => e.departamento)
                .IsUnicode(false);

            modelBuilder.Entity<departamentos>()
                .HasMany(e => e.ciudades)
                .WithRequired(e => e.departamentos)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<departamentos>()
                .HasMany(e => e.clientes)
                .WithRequired(e => e.departamentos)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<motivos>()
                .Property(e => e.motivo)
                .IsUnicode(false);

            modelBuilder.Entity<motivos>()
                .HasMany(e => e.salas)
                .WithRequired(e => e.motivos)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<salas>()
                .Property(e => e.capacidad)
                .IsUnicode(false);

            modelBuilder.Entity<salas>()
                .Property(e => e.observaciones)
                .IsUnicode(false);

            modelBuilder.Entity<salas>()
                .Property(e => e.estado)
                .IsUnicode(false);
        }
    }
}
