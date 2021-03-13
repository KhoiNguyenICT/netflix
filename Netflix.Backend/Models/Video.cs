using Google.Cloud.Firestore;

namespace Netflix.Backend.Models
{
    [FirestoreData]
    public class Video : Entity
    {
        public int Index { get; set; }

        [FirestoreProperty]
        public string Title { get; set; }

        [FirestoreProperty]
        public string Synopsis { get; set; }

        [FirestoreProperty]
        public string Rating { get; set; }

        [FirestoreProperty]
        public string[] Categories { get; set; }

        [FirestoreProperty]
        public string[] Actors { get; set; }

        [FirestoreProperty]
        public string VerticalThumbnail { get; set; }

        [FirestoreProperty]
        public string HorizontalThumbnail { get; set; }

        [FirestoreProperty]
        public string SmallThumbnail { get; set; }

        [FirestoreProperty]
        public string VideoSource { get; set; }

        [FirestoreProperty] 
        public string PostSource { get; set; }

        [FirestoreProperty]
        public string[] Tags { get; set; }
    }
}