using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;
using ViewModels;

namespace SALONES_EMPRESARIALES_XYZ.Controllers
{

    public class GestionReservasController : Controller
    {
        // GET: GestionReservas
        [HttpGet]
        public async Task<ActionResult> crearCliente()
        {

            var httpclient = new HttpClient();
            var json = await httpclient.GetStringAsync("https://localhost:44382/api/Ubicacion");
            List<Departamentos> departamentos = JsonConvert.DeserializeObject<List<Departamentos>>(json);
            ViewBag.departamentos = departamentos;

            return View();

        }
       
    }
}