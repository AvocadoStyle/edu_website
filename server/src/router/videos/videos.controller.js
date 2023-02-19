// import { getPlaylists } from '../../model/playlists.model'
import  getPlaylists  from '../../model/playlists.model.js'


async function httpGetAllVideos(req, res) {
    return await res.status(200).json(await getPlaylists())
}

export default httpGetAllVideos