const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Loading`);
  console.log(`Loading.`);
  console.log(`Loading..`);
  console.log(`Loading...`);

  console.log(`Logged in as ${client.user.tag}!`);  

  console.log(`-----------------------------------`);  
});

client.on('ready', async() => {
var server = "696612356012113940"; // ايدي السررفر
var channel = "696612356012113944";//ايدي الروم

    setInterval(()=>{
      var texts = ["Frost","Youssef","Omar","استغفر الله العظيم","الحمدالله علي كل حال","اللهم صلي علي النبي <3"];
      var text = Math.floor(Math.random() * texts.length);
    client.guilds.get(server).channels.get(channel).send(texts[text]);
    },150);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
 client.login(process.env.BOT_TOKEN);


