const Discord = require('discord.js')

module.exports = (client) => {
  const invites = {}
  const guild = client.guilds.cache.get("826119689822404699")

  const getInviteCounts = async (guild) => {
    return await new Promise(resolve =>{
      guild.fetchInvites().then(invites => {
        const inviteCounter = {}

        invites.each(invite => {
          const { uses, inviter } = invite
          if (!guild.member(invite.inviter)) {
            return;
          }

          const { id } = inviter

          const name = `${id}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
        
        })
        resolve(inviteCounter)
   
      })
    })
  }
  
  client.guilds.cache.forEach(async guild => {
    invites[guild.id] = await getInviteCounts(guild)

  })

  client.on('guildMemberAdd', async (member) => {
    if (member.guild.id !== "826119689822404699") return;
    const { guild, id } = member

    const invitesBefore = invites[guild.id]
    const invitesAfter = await getInviteCounts(guild)

    for (const inviter in invitesAfter) {
      if (invitesBefore[inviter] === invitesAfter[inviter] - 1) {
        const channel = guild.channels.cache.get('826120656709484594')
        const count = invitesAfter[inviter]
        channel.send(
          new Discord.MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setColor('#00ffff')
          .setDescription( `<:specter:823733129356509215> **Specter Convites** <:specter:823733129356509215>\n\n<:seta:823747631464316949> <@${id}> foi convidado por <@${inviter}> (${count} convidados)`)
		  .setFooter(`©️ Rede Specter | 2021`)
        )
  
        invites[guild.id] = invitesAfter
        return
      }
    }
  })

  client.on('guildMemberRemove', async (member) => {
    if (member.guild.id !== "826119689822404699") return;
    const { guild, id } = member

    const invitesBefore = invites[guild.id]
    const invitesAfter = await getInviteCounts(guild)

    for (const inviter in invitesAfter) {
        const channel = guild.channels.cache.get('826120656709484594')
        const count = (invitesAfter[inviter]) - 1
        channel.send(
          new Discord.MessageEmbed()

          .setThumbnail(message.author.displayAvatarURL())
          .setColor('#00ffff')
          .setDescription( `<:specter:823733129356509215> **Specter Convites** <:specter:823733129356509215>\n\n<:seta:823747631464316949> <@${id}> saiu, foi convidado por <@${inviter}> (${count} convidados)`)
		  .setFooter(`©️ Rede Specter | 2021`)
        )
  
        invites[guild.id] = invitesAfter
        return
      }

  })
}