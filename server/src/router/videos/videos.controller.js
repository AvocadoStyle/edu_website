// import { getPlaylists } from '../../model/playlists.model'
let { getPlaylists } = require('../../model/playlists.model')


async function httpGetAllVideos(req, res) {
    return res.status(200).json(await getPlaylists())
}

module.exports = {
    httpGetAllVideos
}