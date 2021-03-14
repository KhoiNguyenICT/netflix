import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  template: `
  <div class="bg-nfl">
  <div class="flex flex-wrap-reverse h-screen items-end lg:items-center">
    <div class="w-full lg:w-8/12 h-3/5 lg:h-full lg:max-h-140">
      <iframe class="w-full h-full" src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
    </div>
    <div class="w-full lg:w-4/12 h-2/5 lg:h-full lg:max-h-140 text-sm text-white overflow-hidden relative bg-cover bg-center"
      style="background-image: url('https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABboKy7KMXcSOfoYThG9lOgDoxV_WvT_gzltHt9_SwjMhA3LuUQ0u5JF5B0u_1jyLRSs4mXPgac__7ylOb0EoZrnLN677.webp?r=363');">

      <div class="p-4 absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end">
        <div class="film-play-info  mb-1.5">
          <img
            src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZ6SgpjAZSGm-O2J4o4rmSWVWkOdQModsre9BOt1cpSO0NOpRimr_MTLuUuIPI3M5V6GXkZtRqLfOm5tApZb85BH7b_dnhOG2jyQMntsCVspxbCmM6lT1NoIXiqQsufliHGdJ1IQMUPI6OMMSizu4MGbJlDxouLAutqpzGbfVTqIaQ.webp?r=30b"
            alt="" class="w-1/3">
          <button
            class="flex items-center mt-1.5 px-5 py-1 bg-white text-black text-sm rounded-sm mr-3 hover:bg-opacity-80 font-semibold"><span
              class="mr-2 text-xs"> <i class="f as fa-play"></i></span>
            Phát</button>
        </div>
        <div class="name-film bg-nfl-bottom-info-play pl-4 pr-4 pb-4 -ml-4 -mb-4 -mr-4">
            <div class="text-lg font-sans text-white font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">Yêu kết hôn và ly dị</div>
            <p class="text-xs mt-1 mb-2.5">Thể loại: <span>Chính kịch</span></p>
            <p class="line-clamp-3">Luật sư tình cảm. Bác sĩ ngọt ngào. Giáo sư chu đáo. Họ có vợ ủng hộ, sự nghiệp thành công... và chuyện tình vụng trộm.</p>
        </div>

      </div>
    </div>
  </div>
</div>

  `,
  styles: [
  ]
})
export class WatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
