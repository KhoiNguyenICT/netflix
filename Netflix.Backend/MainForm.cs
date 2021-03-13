using Netflix.Backend.Models;
using Netflix.Backend.Services;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace Netflix.Backend
{
    public partial class MainForm : Form
    {
        private Video _video;
        private List<Video> _videos;

        public MainForm()
        {
            InitializeComponent();
        }

        private async void btnSave_Click(object sender, System.EventArgs e)
        {
            _video = new Video
            {
                Title = txtTitle.Text,
                Synopsis = txtSynipsis.Text,
                Rating = txtRating.Text,
                Categories = txtCategories.Text.Split(','),
                Actors = txtActors.Text.Split(','),
                VerticalThumbnail = txtVerticalThumbnail.Text,
                HorizontalThumbnail = txtHorizontalThumbnail.Text,
                SmallThumbnail = txtSmallThumbnail.Text,
                VideoSource = txtVideoSource.Text,
                PostSource = txtPostSource.Text,
                Tags = txtTags.Text.Split(',')
            };
            var videoService = new VideoService();
            _video = await videoService.CreateAsync(_video);
            _videos.Add(_video);
        }

        private async void MainForm_Load(object sender, System.EventArgs e)
        {
            _videos = new List<Video>();
            var videoService = new VideoService();
            var data = await videoService.GetAsync();
            var index = 1;
            foreach (var video in data)
            {
                video.Index = index;
                _videos.Add(video);
                index++;
            }
            dataGridView.DataSource = _videos;
        }

        private void dataGridView_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            var index = e.RowIndex;
            _video = _videos.ElementAt(index);
            txtTitle.Text = _video.Title;
            txtSynipsis.Text = _video.Synopsis;
            txtRating.Text = _video.Rating;
            txtCategories.Text = string.Join(',', _video.Categories);
            txtActors.Text = string.Join(',', _video.Actors);
            txtVerticalThumbnail.Text = _video.VerticalThumbnail;
            txtHorizontalThumbnail.Text = _video.HorizontalThumbnail;
            txtSmallThumbnail.Text = _video.SmallThumbnail;
            txtVideoSource.Text = _video.VideoSource;
            txtPostSource.Text = _video.PostSource;
            txtTags.Text = string.Join(',', _video.Tags);
            tabControl.SelectedIndex = 0;
        }

        private void tabControl_TabIndexChanged(object sender, System.EventArgs e)
        {
            var index = tabControl.SelectedIndex;
            switch (index)
            {
                case 0:
                    break;

                case 1:
                    dataGridView.DataSource = _videos;
                    break;
            }
        }
    }
}