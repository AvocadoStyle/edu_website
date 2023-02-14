// import { Media } from "./media"
// import { Video } from "./videos"
let { Media } = require('./media')
let { Video } = require('./videos')


class playlistItems extends Media {
    constructor(id, name){
        super(id)
        this.videos = []
        this.name = name
    }
    build_api_url(){
        super.build_api_url()
        this.api_url.searchParams.append('playlistId', this.id)
    }

    async http_use_api(){
        let a = this.get_api_url_href_string()
        try{
            let response = await fetch(a)
            let data = await response.json()

            for(let i=0; i < data.items.length; i++){
                let video_obj = new Video(data.items[i].snippet.resourceId.videoId, data.items[i].snippet.title)
                await video_obj.init()
                this.videos.push(video_obj)
            }
        } catch(e){
            console.log("fuck")
            console.log(e)
        }

    }

    async init(){
        super.init()
        await this.http_use_api()
    }
}

module.exports = {
    playlistItems
}