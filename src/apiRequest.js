const apiRequest = async ( url = "", optionObj = null, errMsg = null ) => {
    try{
        const response = await fetch(url, optionObj);
        if(!response.ok) throw Error("Please reaload the app");

    }catch(err){
        errMsg = err.message;
    }finally{
        return errMsg;
    }
}

export default apiRequest;