var EventEmitter = require('events')
const fetch = require('node-fetch')
var emitter = require('events').EventEmitter;
var util = require('util')
class MessageCollector { 
    constructor(client) {
    const shuruhatikCat = this
     client.on('message',data => {
         
         function sendToChannel(row) {
             const result = row.toJSON()
        
        
            let URL = `https://discord.com/api/v9/channels/${data.channel.id}/messages`;
            var requestOptions = {
              method: 'POST',
              headers: {
               "Authorization": `Bot ${client.token}`,
               "Content-Type": "application/json"
          },
          body: JSON.stringify({components : [result]})
      
      };
    fetch(URL,requestOptions)
    .then(res => res.text())
    .then(response => console.log(response))
         }
        setTimeout(function () {
         
             shuruhatikCat.emit('message',data)
             

        }, 1)
        data.channel.send = sendToChannel
     })
         const you = this
     client.ws.on('INTERACTION_CREATE',interaction => {
      if(interaction.data.component_type === 2) {
          console.log('tst')
        setTimeout(function () {
         
            you.emit('clickButton',interaction)
            

       }, 1)
       let interactionURL = `https://discord.com/api/v9/interactions/${interaction.id}/${interaction.token}/callback`;
      function viewMod(content) {
        const result = content.toJSON()
        var requestOptions = {
            method: 'POST',
            headers: {
             "Authorization": `Bot ${client.token}`,
             "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "type": 9,
            "data": result,
        })
};

fetch(interactionURL, requestOptions)
    
      .catch(console.error);
      }
       interaction.viewModal = viewMod
      }
     })
 
     client.ws.on("INTERACTION_CREATE",interaction => {
         
         if(interaction.type  === 5) {
   
            let interactionURL = `https://discord.com/api/v9/interactions/${interaction.id}/${interaction.token}/callback`;
            function getttt(id) {
                const d = interaction
  
                let q1 = ''
                let q2 = ''
                let q3 = ''
                let q4 = ''
                let q5 = ''
                let qq1 = ''
                let qq2 = ''
                let qq3 = ''
                let qq4 = ''
                let qq5 = ''
              
              if(d.data.components[0] === undefined) {
              }else{
                  q1 =   d.data.components[0].components[0].custom_id
              
                  qq1 =   d.data.components[0].components[0].value
              }
              if(d.data.components[1] === undefined) {
              }else{
                  q2 =   d.data.components[1].components[0].custom_id
                  
                  qq2 =   d.data.components[1].components[0].value
              }
              if(d.data.components[2] === undefined) {
              }else{
                  q3 =   d.data.components[2].components[0].custom_id
                  
                  qq3 =   d.data.components[2].components[0].value
              }
              if(d.data.components[3] === undefined) {
              }else{
                  q4 =   d.data.components[3].components[0].custom_id
                  
                  qq4 =   d.data.components[3].components[0].value
              }
              
              if(d.data.components[4] === undefined) {
              }else{
                  q5 =   d.data.components[4].components[0].custom_id
                  
                  qq5 =   d.data.components[4].components[0].value
              }
              
              
              
                
              if(q1 === id) return qq1
              if(q2 === id) return qq2
              if(q3 === id) return qq3
              if(q4 === id) return qq4
              if(q5 === id) return qq5
                }    
            function reply(content) {
     
                var requestOptions = {
                  method: 'POST',
                  headers: {
                   "Authorization": `Bot ${client.token}`,
                   "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  "type": 4,
                  "data": content,
              })
            };
            fetch(interactionURL, requestOptions)
        }
        function dfr() {
           
            var requestOptions = {
              method: 'POST',
              headers: {
               "Authorization": `Bot ${client.token}`,
               "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "type": 5,
              "data": {},
          })
        };
        fetch(interactionURL, requestOptions)
        }
             console.log('tst')
            setTimeout(function () {
         
                you.emit('modalSubmit',interaction)
                
    
           }, 1)
           interaction.reply = reply
           interaction.defferReply = dfr
           interaction.getInputValue = getttt
         }
     })
     
    }
}
util.inherits(MessageCollector, emitter)
module.exports = MessageCollector