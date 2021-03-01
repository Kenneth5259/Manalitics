using System.Collections.Generic;

namespace ManalyticsBackend.Models
{
    public class Set
    {
        // Title of the Set
        public string Title {get; set;}
        // Symbol used for the Set (Id for Entity Framework Conventions)
        public string SetId {get; set;}
        // List of Cards contained within the Set
        public List<Card> Cards {get; set;}
    }
}