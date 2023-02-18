export const getPlaylists = async () => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
  
    const response = await fetch('http://localhost:8000/videos',requestOptions);
    if(response.status != 200){
      throw new Error("couldn't get the categories")
    }
    const data = await response.json();
    return data;
  };
  