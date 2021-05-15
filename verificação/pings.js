const firstMessage = require('../ticket/first-message.js')
const Discord = require('discord.js')

module.exports = (client) => {
  const channelId = '826183344089595974'
  var hash = 0;
  const h = `#`;
  const guild = '826119689822404699'
  let array = [];
  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
     jogadores: 'Jogadores',
  }

  const reactions = []

 let embed = new Discord.MessageEmbed()

   .setThumbnail(`https://i.imgur.com/vCovRnQ.png`)
   .setColor('#00ffff')
   .setDescription(`<:specter:826158146447474729> **Rede Specter** <:specter:826158146447474729>\n\n<:seta:826158298830077993> Olá jogador(a), aqui na Rede Specter as marcações funcionam de forma diferente, escolha abaixo quais servidores você deseja receber notificação sobre atualizações.\n\n💥 - <@&826120577265041468>.\n💵 - <@&826120578100232232>.\n⚔️ - <@&826120580133552220>.\n🎮 - <@&826120579156541491>,\n<:Lixeira:826158230618898452> - Remover todas as tags.`)
   .setFooter(`©️ Rede Specter | 2021`);
   
   
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
  }

  firstMessage(client, channelId, embed, ['💥', '💵', '⚔️', '🎮', '<:Lixeira:826158230618898452>'])

  const handleReaction = (reaction, user, add) => {
    if (user.id === '824110399720259584') {
      return
    }


    const emoji = reaction._emoji.name
    const { guild } = reaction.message
    const member = guild.members.cache.find((member) => member.id === user.id)
    let guildstaff = client.guilds.cache.get("787531327402016798");

    if (add) {
		reaction.users.remove(user);
		if (reaction.emoji.name === '💥'){
			member.roles.add('826120577265041468')
		}
    }

    if (add) {
		reaction.users.remove(user);		
		if (reaction.emoji.name === '💵'){
			member.roles.add('826120578100232232')
		}
	}	
		
    if (add) {
		reaction.users.remove(user);
		if (reaction.emoji.name === '⚔️'){
			member.roles.add('826120580133552220')
		}
	}

    if (add) {
		reaction.users.remove(user);
		if (reaction.emoji.name === '🎮'){
			member.roles.add('826120579156541491')
		}
	}
	
    if (add) {
		reaction.users.remove(user);
		if (reaction.emoji.id === '826158230618898452'){
			member.roles.remove('826120579156541491')
			member.roles.remove('826120580133552220')
			member.roles.remove('826120577265041468')
			member.roles.remove('826120578100232232')
		}
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