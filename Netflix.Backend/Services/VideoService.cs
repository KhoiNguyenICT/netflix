using Google.Cloud.Firestore;
using Netflix.Backend.Common;
using Netflix.Backend.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Netflix.Backend.Services
{
    public class VideoService
    {
        private const string CollectionName = "Videos";
        private const string FirestoreCredentials = "netflix-credentials.json";

        public VideoService()
        {
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", FirestoreCredentials);
        }

        public async Task<Video> CreateAsync(Video video)
        {
            var fireStore = await FirestoreDb.CreateAsync(Constants.ProjectId);
            var collectionReference = fireStore.Collection(CollectionName);
            var documentReference = await collectionReference.AddAsync(video);
            video.Id = documentReference.Id;
            MessageBox.Show("Tạo mới thành công");
            return video;
        }

        public async Task<string> UpdateAsync(Video video)
        {
            try
            {
                var fireStore = await FirestoreDb.CreateAsync(Constants.ProjectId);
                var collectionReference = fireStore.Collection(CollectionName);
                var documentReference = collectionReference.Document(video.Id);
                await documentReference.SetAsync(video, SetOptions.MergeAll);
                return "true";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public async Task<string> DeleteAsync(string id)
        {
            try
            {
                var fireStore = await FirestoreDb.CreateAsync(Constants.ProjectId);
                var collectionReference = fireStore.Collection(CollectionName);
                var documentReference = collectionReference.Document(id);
                await documentReference.DeleteAsync();
                return "true";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public async Task<Video> GetAsync(string id)
        {
            var fireStore = await FirestoreDb.CreateAsync(Constants.ProjectId);
            var collectionReference = fireStore.Collection(CollectionName);
            var documentReference = collectionReference.Document(id);
            var snapshot = await documentReference.GetSnapshotAsync();
            if (!snapshot.Exists) return null;
            var usr = snapshot.ConvertTo<Video>();
            usr.Id = snapshot.Id;
            return usr;
        }

        public async Task<List<Video>> GetAsync()
        {
            var fireStore = await FirestoreDb.CreateAsync(Constants.ProjectId);
            var query = fireStore.Collection(CollectionName);
            var querySnapshot = query.GetSnapshotAsync().GetAwaiter().GetResult();
            var videos = new List<Video>();
            foreach (var documentSnapshot in querySnapshot.Documents)
            {
                if (!documentSnapshot.Exists) continue;
                var city = documentSnapshot.ToDictionary();
                var json = JsonConvert.SerializeObject(city);
                var newItem = JsonConvert.DeserializeObject<Video>(json);
                newItem.Id = documentSnapshot.Id;
                videos.Add(newItem);
            }
            return videos;
        }

        public async Task<List<Video>> QueryRecords(Query query)
        {
            var querySnapshot = await query.GetSnapshotAsync();
            var list = new List<Video>();
            foreach (var documentSnapshot in querySnapshot.Documents)
            {
                if (!documentSnapshot.Exists) continue;
                var city = documentSnapshot.ToDictionary();
                var json = JsonConvert.SerializeObject(city);
                var newItem = JsonConvert.DeserializeObject<Video>(json);
                newItem.Id = documentSnapshot.Id;
                list.Add(newItem);
            }
            return list;
        }
    }
}