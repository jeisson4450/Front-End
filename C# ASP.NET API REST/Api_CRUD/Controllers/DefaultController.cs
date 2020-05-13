using Api_CRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ViewModels;

namespace Api_CRUD.Controllers
{
    public class DefaultController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            List<Cliente> clientes = new List<Cliente>();
            using (ReservacionesModel db = new ReservacionesModel())
            {
                clientes = (from d in db.clientes

                            join c in db.ciudades on d.id_ciudad equals c.id_ciudad
                            select new Cliente
                            {
                                //fecha_evento = d.fecha_evento,

                                identificacion = d.identificacion,
                                nombre = d.nombre,
                                apellido = d.apellido,
                                telefono = d.telefono,
                                correo = d.correo,
                                id_ciudad = d.id_ciudad,
                                edad = d.edad,
                                ciudades = c.ciudad,
                                departamento = c.departamentos.departamento

                            }).ToList();
            }
            return Ok(clientes);
        }

        [HttpPost]// Crea un cliente validando el modelo
        public IHttpActionResult CrearCliente([FromBody]Cliente cliente)
        {
            using (ReservacionesModel db = new ReservacionesModel())
            {
                var llavePrimarea = db.clientes.Where(x => x.identificacion == cliente.identificacion).ToList();
                if (llavePrimarea.Count() == 0)
                {
                    if (ModelState.IsValid)
                    {

                        db.clientes.Add(new clientes
                        {
                            identificacion = cliente.identificacion,
                            nombre = cliente.nombre,
                            apellido = cliente.apellido,
                            telefono = cliente.telefono,
                            correo = cliente.correo,
                            id_ciudad = cliente.id_ciudad,
                            id_departamento = cliente.id_departamento,
                            edad = cliente.edad
                        });


                        var respuesta = db.SaveChanges();
                        return Ok("Registro ingresado con exito");

                    }
                    else
                    {
                        var msg_error = ModelState.Select(x => x.Value.Errors).Where(y => y.Count > 0).ToList();
                        return Ok(msg_error);
                    }
                }
                else
                {
                    return Ok("Ya existe un cliente con la misma identificacion");
                }
            }


        }


        [HttpPut] // Actualiza la informacion de un cliente
        public IHttpActionResult ActualizarCliente([FromBody]Cliente cliente)
        {

            using (ReservacionesModel db = new ReservacionesModel())
            {
                if (ModelState.IsValid)
                {
                    clientes datosCliente = new clientes()
                    {
                        identificacion = cliente.identificacion,
                        nombre = cliente.nombre,
                        apellido = cliente.apellido,
                        telefono = cliente.telefono,
                        correo = cliente.correo,
                        id_ciudad = cliente.id_ciudad,
                        id_departamento = cliente.id_departamento,
                        edad = cliente.edad
                    };


                    db.Entry(datosCliente).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return Ok("datos actualizados exitosamente");

                }

                else
                {
                    var msg_error = ModelState.Select(x => x.Value.Errors).Where(y => y.Count > 0).ToList();

                    return Ok(msg_error);
                }
            }
        }
    }
}
