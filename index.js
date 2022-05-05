const Discord = require('discord.js')
const DiscordModal = require('./routes')
const client = new Discord.Client()
const modal = new DiscordModal.MessageCollector(client)

modal.on('message',message => {
    if(message.author.bot) return
let row = new DiscordModal.ActionRow()
.addComponents(
    new DiscordModal.Button()
    .setStyle(1)
    .setCustomId('shuruhatik')
    .setLabel('click to show modal')

)
message.channel.send(row)
})
client.on('ready', () => {
    console.log(client.token)
})
modal.on('clickButton',button => {
   let modal  = new DiscordModal.ModalActionRow()
   .setLabel('Hello Welcome Back')
   .setCustomId('modal1')
   .addComponents(
       new DiscordModal.TextInput()
       .setCustomId('1')
       .setStyle('short')
       .setLabel('Your Name : ')
       .setRequired(true)
       .setMax(10)
       .setMin(3),
       new DiscordModal.TextInput()
       .setCustomId('2')
       .setStyle('paragraph')
       .setLabel('About You: ')
       .setRequired(true)
       .setMax(10)
       .setMin(3),

   )
   button.viewModal(modal)
})

modal.on('modalSubmit',modal => {
    const reply1 = modal.getInputValue('1')
    const reply2 = modal.getInputValue('2')
    modal.reply({content: `
    hi!
    Your Name  : ${reply1}

    About You : ${reply2}
    `})
})
client.login('OTE3Mzg2MjgwNDA3NTY0MzI4.Ya38jQ.u99Yfdl3wYcUAQMQO28XVpxSkmY')