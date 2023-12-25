// popular song and artist  arrow

let pop_song_left = document.querySelector('#pop_song_left');
let pop_song_right = document.querySelector('#pop_song_right');
let pop_song = document.querySelector('.pop_song');
let id = 0
pop_song_left.onclick = function () {
    pop_song.scrollLeft -= 330;
}
pop_song_right.onclick = function () {
    pop_song.scrollLeft += 330;
}


let artist_left = document.querySelector('.artist_left');
let artist_right = document.querySelector('.artist_right');
let artist = document.querySelector('.artist')
artist_left.onclick = function () {
    artist.scrollLeft -= 100;

}
artist_right.onclick = function () {
    artist.scrollLeft += 100;

}

// ===============================        song list     =================================================================
songs = [
    {
        id: 0,
        song_name: `on my way <div class="subtitle">
        alan walker</div>`,
        poster: `img/1.jpg`

    },
    {
        id: 1,
        song_name: `faded <div class="subtitle">
        alan walker</div>`,
        poster: `img/2.jpg`

    },
    {
        id: 2,
        song_name: `cartoon <div class="subtitle">
        no copy right sound</div>`,
        poster: `img/3.jpg`

    },
    {
        id: 3,
        song_name: `ncs song <div class="subtitle">
        no copy right sound</div>`,
        poster: `img/4.jpg`

    },
    {
        id: 4,
        song_name: `cartoon <div class="subtitle">
        no copy right sound</div>`,
        poster: `img/5.jpg`

    },
    {
        id: 5,
        song_name: `ncs song <div class="subtitle">
        no copy right sound</div>`,
        poster: `img/6.jpg`

    },
    {
        id: 6,
        song_name: `tum sath ho <div class="subtitle">
        arjit singh</div>`,
        poster: `img/7.jpg`

    },
    {
        id: 7,
        song_name: `sanak <div class="subtitle">
       anu malik</div>`,
        poster: `img/8.jpg`

    },
    {
        id: 8,
        song_name: `dilbar <div class="subtitle">
      dhwani bhat</div>`,
        poster: `img/9.jpg`

    },
    {
        id: 9,
        song_name: `luka chhupi<div class="subtitle">
       arjit singh</div>`,
        poster: `img/10.jpg`

    },
    {
        id: 10,
        song_name: `lagdi lahor di <div class="subtitle">
       guru radhava</div>`,
        poster: `img/11.jpg`

    },
    {
        id: 11,
        song_name: `jata da <div class="subtitle">
       anu malik</div>`,
        poster: `img/12.jpg`

    },
    {
        id: 12,
        song_name: `atif aslam song <div class="subtitle">
       atif aslam</div>`,
        poster: `img/13.jpg`

    },
    {
        id: 13,
        song_name: `vaste <div class="subtitle">
       anu malik</div>`,
        poster: `img/14.jpg`

    },
    {
        id: 14,
        song_name: `lut gaye<div class="subtitle">
       juber nautiya</div>`,
        poster: `img/15.jpg`

    },
    {
        id: 15,
        song_name: `meri zindagi hai tu<div class="subtitle">
       anu malik</div>`,
        poster: `img/16.jpg`

    },
    {
        id: 16,
        song_name: `back to love <div class="subtitle">
       rahat fateh</div>`,
        poster: `img/17.jpg`

    },
    {
        id: 17,
        song_name: `pasoori <div class="subtitle">
       anu malik</div>`,
        poster: `img/18.jpg`

    },
    {
        id: 18,
        song_name: `gill <div class="subtitle">
       anu malik</div>`,
        poster: `img/19.jpg`

    },
    {
        id: 19,
        song_name: `happy republic <div class="subtitle">
       anu malik</div>`,
        poster: `img/20.jpg`

    },
]



let download_icon = document.querySelector('.download_icon')
let song_item = document.querySelectorAll('.song_item');
song_item.forEach((task, index) => {
    task.setAttribute('id', `${songs[index].id}`);
    task.getElementsByTagName('img')[0].src = songs[index].poster;
    task.getElementsByTagName('h5')[0].innerHTML = songs[index].song_name;
    // download_icon.setAttribute('download',songs[index].song_name)
})



// ========================================================      play song   =========================================
let play_icon = document.querySelector('.play_icon');
let music = new Audio('audio/1.mp3')
let wave = document.querySelector('.wave')
let poster_img = document.querySelector('.poster_img')
let song_item_play_icon = document.querySelectorAll('.song_item_play_icon');
let master_song_name = document.querySelector('.master_song_name');


play_icon.onclick = function () {
    if (music.paused || music.currentTime <= 0) {
        play_icon.classList.remove('fa-play');
        play_icon.classList.add('fa-pause');
        wave.classList.add('active1');
        music.play();
        song_item_play_icon[id].classList.remove('fa-circle-play');
        song_item_play_icon[id].classList.add('fa-circle-pause');
        master_song_name.innerHTML = songs[id].song_name;
        song_item[id].style.background = `rgb(105, 105, 105, .1)`;
        download_icon.setAttribute('download', master_song_name.innerText)
        download_icon.href = `audio/${id}.mp3`
    }
    else {

        music.pause()
        play_icon.classList.add('fa-play')
        play_icon.classList.remove('fa-pause')
        wave.classList.remove('active1')
        song_item_play_icon[id].classList.add('fa-circle-play');
        song_item_play_icon[id].classList.remove('fa-circle-pause')
        master_song_name.innerHTML = songs[id].song_name
        download_icon.setAttribute('download', master_song_name.innerText)
        download_icon.href = `audio/${id}.mp3`
    }
}
// -                                                                                     <========list_item play song


for (let i = 0; i < song_item_play_icon.length; i++) {
    song_item_play_icon[i].onclick = function () {
        if (music.paused || music.currentTime <= 0) {
            stop_all_icon()
            id = i
            music.src = `audio/${i + 1}.mp3`
            music.play()
            song_item[i].style.background = `rgb(105, 105, 105, .1)`;
            song_item_play_icon[i].classList.remove('fa-circle-play');
            song_item_play_icon[i].classList.add('fa-circle-pause')
            play_icon.classList.remove('fa-play')
            play_icon.classList.add('fa-pause')
            wave.classList.add('active1');
            poster_img.src = songs[i].poster
            master_song_name.innerHTML = songs[id].song_name
            download_icon.setAttribute('download', master_song_name.innerText)
            download_icon.href = `audio/${id}.mp3`
        }
        else {
            stop_all_icon()
            music.pause()

            song_item_play_icon[i].classList.add('fa-circle-play');
            song_item_play_icon[i].classList.remove('fa-circle-pause')
            play_icon.classList.add('fa-play')
            play_icon.classList.remove('fa-pause')
            wave.classList.remove('active1')
            master_song_name.innerHTML = songs[id].song_name;
            download_icon.setAttribute('download', master_song_name.innerText)
            download_icon.href = `audio/${id}.mp3`
        }


    }
}





function stop_all_icon() {
    for (let i = 0; i < song_item_play_icon.length; i++) {
        song_item_play_icon[i].classList.remove('fa-circle-pause')
        song_item_play_icon[i].classList.add('fa-circle-play');
        song_item[i].style.background = 'none';
    }

}
// -                                                                                      <========next song 
let next_song_icon = document.querySelector('.next_song_icon');

next_song_icon.onclick = function () {

    if (id >= songs.length - 1) {
        id = -1
    }
    id++
    music.src = `audio/${id + 1}.mp3`
    stop_all_icon()
    music.play()
    wave.classList.add('active1');
    song_item_play_icon[id].classList.remove('fa-circle-play');
    song_item_play_icon[id].classList.add('fa-circle-pause');
    play_icon.classList.remove('fa-play');
    play_icon.classList.add('fa-pause');
    poster_img.src = songs[id].poster;
    master_song_name.innerHTML = songs[id].song_name;
    song_item[id].style.background = `rgb(105, 105, 105, .1)`;
    download_icon.setAttribute('download', master_song_name.innerText)
    download_icon.href = `audio/${id}.mp3`
}
// -                                                                                        <======== prev song
let prev_song_icon = document.querySelector('.prev_song_icon')
prev_song_icon.onclick = function () {
    if (id < 1) {
        id = 1
    }


    id--
    music.src = `audio/${id + 1}.mp3`
    stop_all_icon()
    music.play()
    wave.classList.add('active1');
    song_item_play_icon[id].classList.remove('fa-circle-play');
    song_item_play_icon[id].classList.add('fa-circle-pause');
    play_icon.classList.remove('fa-play');
    play_icon.classList.add('fa-pause');
    poster_img.src = songs[id].poster
    master_song_name.innerHTML = songs[id].song_name
    song_item[id].style.background = `rgb(105, 105, 105, .1)`;
    download_icon.setAttribute('download', master_song_name.innerText)
    download_icon.href = `audio/${id}.mp3`
}






//                                                                              <<<=======================  progress bar  
let progress_bar = document.querySelector('.progress_bar')
music.addEventListener('timeupdate', () => {
    let progres = music.currentTime / music.duration * 100
    progress_bar.value = progres

    //                                                                          <<<===================== total duration  
    let all_second = music.duration
    let minute = parseInt(music.duration / 60)
    let second = parseInt(all_second - minute * 60)
    let total_duration = minute + ":" + second

    let total_time = document.querySelector('.total_time')
    if (total_duration == "NaN:NaN") {
        total_time = ""
    }
    else if (second < 10) {
        second = "0" + second
    }
    total_time.innerHTML = minute + ":" + second


    //                                                                         <<<===================== curent running time  


    let currentTime = music.currentTime
    let cur_min = parseInt(music.currentTime / 60);
    let cur_sec = parseInt(currentTime - cur_min * 60)

    let runnig_time = document.querySelector('.runnig_time')
    if (cur_sec <= 9) {
        cur_sec = "0" + cur_sec
    }

    runnig_time.innerHTML = cur_min + ":" + cur_sec

    //                                                                     <<<===================== volume
    let volume_icon = document.querySelector('.volume_icon');
    let volume_bar = document.querySelector('.volume_bar');
    music.volume = volume_bar.value / 100
    if (volume_bar.value == 0) {
        volume_icon.classList.remove('fa-volume-low')
        volume_icon.classList.add('fa-volume-xmark')
    } else {
        volume_icon.classList.add('fa-volume-low')
        volume_icon.classList.remove('fa-volume-xmark')
    }
    volume_icon.onclick = function () {
        if (volume_bar.value > 0) {
            volume_icon.classList.remove('fa-volume-low')
            volume_icon.classList.add('fa-volume-xmark')
            volume_bar.value = 0
        } else {
            volume_icon.classList.add('fa-volume-low')
            volume_icon.classList.remove('fa-volume-xmark')
            volume_bar.value = 10
        }
    }


    //                                                                    <<<=================      random and reapet music



    let music_icon = document.querySelector('.music_icon');
    music_icon.onclick = function () {
        if (music_icon.innerHTML == "next") {
            music_icon.classList.add('fa-repeat')
            music_icon.classList.remove('fa-music')
            music_icon.classList.remove('fa-shuffle')
            music_icon.innerHTML = "repeat"
        }
        else if (music_icon.innerHTML == "repeat") {
            music_icon.classList.remove('fa-repeat')
            music_icon.classList.remove('fa-music')
            music_icon.classList.add('fa-shuffle')
            music_icon.innerHTML = "shuffle"
        }
        else if (music_icon.innerHTML == "shuffle") {
            music_icon.classList.remove('fa-repeat')
            music_icon.classList.add('fa-music')
            music_icon.classList.remove('fa-shuffle')
            music_icon.innerHTML = "next"
        }
    }

    if (progress_bar.value == 100) {
        if (music_icon.innerHTML == "next") {
            next_song_icon.click()
        }
    }
    if (progress_bar.value == 100) {
        if (music_icon.innerHTML == "repeat") {
            play_icon.click()
        }
    }
    if (progress_bar.value == 100) {
        if (music_icon.innerHTML == "shuffle") {
            id = Math.floor(Math.random() * 20 + 1)
            next_song_icon.click()
        }
    }
    download_icon.href = `audio/${id}.mp3`


})
//                                                                    <<<===================== change progress bar
progress_bar.onchange = function () {
    music.currentTime = progress_bar.value * music.duration / 100



}


//                                                                    <<<===================== profile name

let profile_name = document.querySelector('.profile_name')
let settion_data = sessionStorage.getItem('userdata');


let profile_image = document.querySelector('.profile_image')
let profile_data = document.querySelector(".profile_data")
let log_out = document.querySelector('.log_out')



profile_image.onclick = function () {
    profile_data.classList.toggle('display_none')
}

log_out.onclick = function () {
    sessionStorage.removeItem('userdata');
    window.location = ('./log in/contact.html')
}




let Name = JSON.parse(localStorage.getItem(settion_data)).name
profile_name.innerHTML = "welcome" + " " + Name


//                                                                                                         <<<===================== search song

let search_result = document.querySelector('.search_result');
let search_input = document.querySelector('.search_input')
songs.forEach(task => {
    search_result.innerHTML += `   <a href="${"#" + task.id}">
    <div class="search_item">
        <img src="${task.poster}" alt="">
        <h4>${task.song_name}
        </h4>
    </div>
</a>`
})
let search_item = document.querySelectorAll('.search_item');
search_input.addEventListener('keyup', () => {
    let input_value = search_input.value
    let a = search_result.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let text = a[i].getElementsByTagName('h4')[0].innerText;
        
        if (text.indexOf(input_value) > -1 && input_value != 0) {
            a[i].style.display = "flex";
            search_result.style.display = ""

            
        }
        else {
            a[i].style.display = "none"

        }


    }


}
)
if (search_input.value == "") {
    search_result.style.display = "none"
} else {
    search_result.style.display = ""
}
