// import { Media } from "./media"
// import { playlistItems } from "./playlistitems"
import  fetch  from "node-fetch"
import  Media  from './media.js'
import  playlistItems  from './playlistitems.js'


class playlists extends Media {
    constructor(id){
        super(id)
        this.playlists = []
    }
    build_api_url(){
        super.build_api_url()
        this.api_url.searchParams.append('channelId', this.channelId)
    }

    async http_use_api(){
        let a = this.get_api_url_href_string()
        console.log(a)
        try{
            let response = await fetch(a)
            let data = await response.json()

            for(let i=0; i < data.items.length; i++){
                let playlist_obj = new playlistItems(data.items[i].id, data.items[i].snippet.title)
                await playlist_obj.init()
                this.playlists.push(playlist_obj)
            }

        } catch(e){
            console.log('kaki')
            console.log(e)
        }
    }
    async init(){
        super.init()
        await this.http_use_api()
    }
}

export default playlists