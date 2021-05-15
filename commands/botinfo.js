const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
  
  const inline = true
  const botAvatar = client.user.displayAvatarURL()
  const date = client.user.createdAt
  const userName = client.user.username
  const servsize = client.guilds.cache.size
  const usersize = client.users.cache.size

  const embed = new Discord.MessageEmbed()

    .setAuthor("Informações do Bot", "https://cdn.discordapp.com/emojis/770851436749258772.gif?v=1")
    .addField('🤖 **Nome**', userName)
    .addField('⚙️ **ID**', client.user.id)
    .addField('🔧 **Desenvolvedor**', '```ㅤㅤSc4r#0001ㅤㅤ```')
    .addField('🔑 **Prefix:**', '```ㅤ   s!ㅤㅤ```')
	  .addField('<:Ferramentas:826158251854397482> **Versão:**', '```  ㅤ2.0ㅤㅤ```')
    .addField('📭 **Servidores**', `ㅤ🛡 ${servsize}`, true)
    .addField('👥 **Usuários**', `ㅤ👥 ${usersize}`, inline)
    .setColor('#00ffff')
    .setThumbnail(botAvatar)
  
    message.channel.send(embed)
}

exports.help = {
  name: "botinfo",
  aliases: ["btinfo"]
}