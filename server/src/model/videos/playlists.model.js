import  playlists  from "./playlists.js";


async function getPlaylists(){
    let pls = new playlists(null)
    await pls.init()
    return pls.playlists
}


export default getPlaylists