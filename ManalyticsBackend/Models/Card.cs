namespace ManalyticsBackend.Models 
{
    public class Card
    {
        public int Id {get; set;}
        public string Title {get; set;}
        public List<PrimaryType> PrimaryTypes {get; set;}
    }
}