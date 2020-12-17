const Discord = require('discord.js');
const bot = new Discord.Client();



module.exports.run = (bot,message,args)=>{

      const embedname = new Discord.MessageEmbed()
      .setTitle('A slick little embed')
      .setColor('RANDOM')
      .setFooter("This is a footer")
      .setAuthor("This is the author's name")
      .addField("This is a field", "this is its description")
      .setTimestamp()
      .setDescription('Hello, this is a slick embed!')

    message.channel.send(embedname);

}

module.exports.help = {
    name:"embed"
}