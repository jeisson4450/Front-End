using System.Web;
using System.Web.Mvc;

namespace SALONES_EMPRESARIALES_XYZ
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
