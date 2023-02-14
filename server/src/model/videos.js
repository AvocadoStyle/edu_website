import { Media } from "./media"

export class Video extends Media {
    constructor(id, name){
         super(id)
         this.video_url_front = new URL(`https://www.youtube.com/watch`)
         this.name = name
    }
    build_video_url_front(){
        this.video_url_front.searchParams.append('v', this.id)
    }
    
    get_video_url_front_href_string(){
        return this.video_url_front.href
    }

    async init(){
        this.build_video_url_front()
    }
}