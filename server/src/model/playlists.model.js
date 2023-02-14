let { playlists } = require("./playlists");


async function getPlaylists(){
    let pls = new playlists(null)
    await pls.init()
    return pls.playlists
}


module.exports = {
    getPlaylists
}