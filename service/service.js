// const db = require("./../database/connection");
const { getUserData } = require("users-orm");

 const getUsers = async () =>{
    console.log("getUsers")
    const data = await getUserData();
    console.log("data", data)
    return data;
}

module.exports = {
    getUsers
}