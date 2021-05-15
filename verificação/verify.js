const firstMessage = require('../ticket/first-message.js')
const Discord = require('discord.js')

module.exports = (client) => {
  const channelId = '826120590926020608'

 let embed = new Discord.MessageEmbed()

   .setThumbnail(`https://i.imgur.com/vCovRnQ.png`)
   .setColor('#00ffff')
   .setDescription(`<:specter:826158146447474729> **Rede Specter** <:specter:826158146447474729>\n\n<:seta:826158298830077993> Olá jogador(a), seja bem vindo ao discord da Rede Specter, reaja em no emoji abaixo para liberar o restante do discord.\n\n<:seta:826158298830077993> Permaneça atento(a) ao <#777332910155104267> para evitar que seja punido.\n<:seta:826158298830077993> Caso tenha qualquer dúvida, abra um ticket em <#826120649177169950> ou chame um de nossos staffers.\n<:seta:826158298830077993> Sabia que estamos com vagas na equipe? Verifique o formulário em <#826120650514759680>.\n<:seta:826158298830077993> Verifique as recompensas que damos ao impulsionar o servidor em <#826120635624325181>.\n<:seta:826158298830077993> Fique atento aos anúncios da rede em <#826120603362787418>.\n\n<:specter:826158146447474729> IP: redespecter.com\n<:Google:826158419865632780> Site: https://loja.redespecter.com/\n<:Twitter:826158399468339223> Twitter: https://twitter.com/RedeSpecterOfc\n<:Youtube:826158386872582235> Parceria: https://bit.ly/CanalGamerzinha\n<:legendarystore:826158426655555624> Parceria: https://bit.ly/LegendaryStore`)
   .setFooter(`©️ Rede Specter | 2021`);

  firstMessage(client, channelId, embed, ['<:specter:826158146447474729>'])

  const handleReaction = (reaction, user, add) => {
    if (user.id === client.user.id) {
      return
    }


    const { guild } = reaction.message


    const role = guild.roles.cache.find((role) => role.name === '「👥」Players')
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}