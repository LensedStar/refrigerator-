import axios from "axios";

const BotAPI ={
    BOTTOKEN:"6567725268:AAHLZGke7cXwm_YG08lZSlAfc3bgtUBKdP0",
    CHANNELID:"-1001994622998",
}
async function apiCall(data){
    console.log(data)
    await axios.post(`https://api.telegram.org/bot${BotAPI.BOTTOKEN}/sendMessage`,{
        chat_id:BotAPI.CHANNELID,
        parse_mode:"HTML",
        text: `Name: ${data.name}
            \n Phone: ${data.phone} 
            \n Email: ${data.mail} 
            \n Message: ${data.text ? data.text : "Empty"}`
    })

}

export default apiCall;