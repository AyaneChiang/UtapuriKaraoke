using System.Linq;

namespace UtapuriKaraoke.Models
{
    public class Song
    {
        public string Name { get; set; }

        public string Joysound { get; set; }

        public string Dam { get; set; }

        public string Tags { get; set; }

        public Song(string line)
        {
        }
    }
}
