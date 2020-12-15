/*
    Author: Kenneth Carroll
    Model to represent a single immutable card from the MTG Database describes in the CSV
    Cards are static data, the mutible partner model deck_item which holds user data of 
    cards is coming next;
*/
using System;

namespace ManalyticsBackend.Models {
    public class Card {
        public Int64 id {get;}
        public String name {get;}
        public String set {get;}
        public String set_code {get;}
        public String type {get;}
        public String power {get;}
        public String toughness {get;}
        public String loyalty {get;}
        public String manacost {get;}
        public Int64 converted_manacost {get;}
        public String artist {get;}
        
        public String flavor {get;}
        public String color {get;}
        public Int64 number {get;}
        public String rarity {get;}
        public Int16 rating {get;}
        public String ruling {get;}
        
        public String ability {get;}
        public Int64 number_int {get;}
        public String color_identity {get;}
    }
}