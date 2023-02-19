export const getPlaylists = async () => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
  
    const response = await fetch('https://edu-api-backend.onrender.com/videos',requestOptions);
    if(response.status != 200){
      throw new Error("couldn't get the categories")
    }
    const data = await response.json();
    return data;
  };
  