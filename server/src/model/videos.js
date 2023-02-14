// import { Media } from "./media"
let { Media } = require('./media')

class Video extends Media {
    constructor(id, name){
         super(id)
         this.video_url_front = new URL(`https://www.youtube.com/watch`)
         this.video_url_front_href = null
         this.name = name
    }
    build_video_url_front(){
        this.video_url_front.searchParams.append('v', this.id)
        this.video_url_front_href = this.get_video_url_front_href_string()
    }
    
    get_video_url_front_href_string(){
        return this.video_url_front.href
    }

    async init(){
        this.build_video_url_front()
        
    }
}

module.exports = {
    Video
}