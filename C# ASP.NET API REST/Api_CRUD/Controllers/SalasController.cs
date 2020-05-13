using Api_CRUD.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ViewModels;

namespace Api_CRUD.Controllers
{
    public class SalasController : ApiController
    {

        [HttpPost]// Crea una sala y la asiga a un cliente existente
        public IHttpActionResult CrearSala([FromBody]Solicitud sala)
        {
            using (ReservacionesModel db = new ReservacionesModel())
            {
                var llavePrimarea = db.clientes.Where(x => x.identificacion == sala.identificacion).ToList();
                if (llavePrimarea.Count() > 0)
                {
                    if (ModelState.IsValid)
                    {
                        db.salas.Add(new salas
                        {
                            fecha_evento = sala.fecha_evento,
                            capacidad = sala.capacidad,
                            id_motivo = sala.id_motivo,
                            observaciones = sala.observaciones,
                            estado = sala.estado,
                            identificacion = sala.identificacion
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
                    return Ok("El cliente no existe");
                }
            }
        }
        [HttpDelete] //Elimina la sala del cliente
        public IHttpActionResult EliminarSala([FromBody]Solicitud sala)
        {
            using (ReservacionesModel db = new ReservacionesModel())
            {
                var llavePrimarea = db.salas.Where(x => x.identificacion == sala.identificacion).ToList();
                if (llavePrimarea.Count() > 0)
                {
                    if (ModelState.IsValid)
                    {
                        var query = db.Database.SqlQuery<Solicitud>("sp_eliminar_cliente @identificacion", new SqlParameter("@identificacion", sala.identificacion)).ToList();

                        return Ok("Cliente eliminado");
                    }
                    else 
                    {
                        var msg_error = ModelState.Select(x => x.Value.Errors).Where(y => y.Count > 0).ToList();
                        return Ok(msg_error);
                    }
                }
                else 
                {
                    return Ok("El cliente no tiene nunguna sala");
                }
                
            }
        }
    }
}
