
class Media {
    constructor(id){
        this.id = id
        this.key = `AIzaSyA17jv3uqkN8KEOo7DqBmbsCqt1FZKSvxo`
        this.url = `https://youtube.googleapis.com/youtube/v3/`
        this.api_type = this.constructor.name
        this.part = `snippet`
        this.channelId = `UC_WNJShLGT9FjXNVa5eqanQ`
        this.api_url = null;
    }

    build_api_url(){
        this.api_url = new URL(this.api_type, this.url)
        this.api_url.searchParams.append('key', this.key)
        this.api_url.searchParams.append('part', this.part)
        // this.api_url.searchParams.append('channelId', this.channelId)
    }

    async http_use_api(){}

    get_api_url_href_string(){
        return this.api_url.href
    }

    async init(){
        this.build_api_url()
    }

}

export default Media