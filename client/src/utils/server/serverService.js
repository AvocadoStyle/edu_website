let url1 = `http://localhost:8000`
let url2 = `https://edu-api-backend.onrender.com`
let URL_PATH = url1
export const getPlaylists = async () => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
  
    const response = await fetch(`${URL_PATH}/videos`,requestOptions);
    if(response.status != 200){
      throw new Error("couldn't get the categories")
    }
    const data = await response.json();
    return data;
  };
  
export const signUp = async(name, email, password) => {
  try{
    if (!name || !email || !password) return;
  
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json','Authorization': token },
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, password: password, email: email })
    };
  
    const response = await fetch(`${URL_PATH}/users`, requestOptions);
    if(response.status != 200){
      if(response.status == 400){
        throw new Error("already in use or other problem");
      }
    }
    if(response.status == 200){
      const data = await response.json();
    }
    return data

  } catch(e){
    console.log(`error ${e}`)
       
  }
}

export const signIn = async(name, email, password) => {
    try{
    if (!name || !email || !password) throw new Error("not valid input");
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json','Authorization': token },
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': name, 'password': password, 'email': email })
    };
  
    const response = await fetch(`${URL_PATH}/users/login`, requestOptions);
    if(response.status != 200){
      if(response.status == 400){
        throw new Error("not valid character or other problem");
      }
    }
    if(response.status == 200){
      const data = await response.json();
      localStorage.setItem("token", data.token)
      return data.token
    }
    throw new Error('not valid')

  } catch(e){
    console.log(`error ${e}`)
    throw e
  }
}
