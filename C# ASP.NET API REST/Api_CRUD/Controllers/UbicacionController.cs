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
    public class UbicacionController : ApiController
    {
        [HttpGet]
        [ResponseType(typeof(Departamentos))]
        public IHttpActionResult ObtenerDepartamentos()
        {
            List<Departamentos> departamentos = new List<Departamentos>();
            using (ReservacionesModel db = new ReservacionesModel())
            {
                departamentos = (from d in db.departamentos
                                 select new Departamentos
                                 {
                                     id_departamento = d.id_departamento,
                                     departamento = d.departamento
                                 }).ToList();
            }
            return Ok(departamentos);
        }
        [ResponseType(typeof(Ciudades))]
        [HttpPost]
        public IHttpActionResult ObtenerCiudad([FromBody] Departamentos departamento)
        {
            if (ModelState.IsValid)
            {
                List<Ciudades> ciudad = new List<Ciudades>();
                using (ReservacionesModel db = new ReservacionesModel())
                {
                    ciudad = (from c in db.ciudades
                              where departamento.id_departamento == c.id_departamento
                              select new Ciudades
                              {
                                  id_departamento = c.id_departamento,
                                  ciudad = c.ciudad,
                                  id_ciudad = c.id_ciudad
                              }).ToList();
                }
                var hola = Content(HttpStatusCode.OK, ciudad);
                return hola;
            }
            else {
                return Content(HttpStatusCode.BadRequest, "Informacion invalida");
                    }
        }
    }
}
