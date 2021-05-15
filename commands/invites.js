const Discord = require('discord.js')
exports.run = async (client,message,args) => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    var ChannelID = message.channel.id
    if(cmd.toLowerCase().startsWith("s!invites")){
      if (message.guild.id === "826119689822404699")/*servidor principal*/{ 
        if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter"))/*cargo da equipe*/{
        if(ChannelID !== "826120645770608721")/*canal #comandos*/{
            let embed = new Discord.MessageEmbed()
    
       .setColor('#00ffff')
       .setAuthor(message.author.tag, message.author.displayAvatarURL())
       .setDescription(`Não é permitido o uso de comandos nesse canal. Utilize o <#826120645770608721>`)
       .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
       .setTimestamp();
    
      return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
        };
    };
    }

  if (!member){
  const invites = {}
  const getInviteCounts = async (guild) => {
    return await new Promise(resolve =>{
      guild.fetchInvites().then(invites => {
        const inviteCounter = {}
        const guild = client.guilds.cache.get("826119689822404699")
        invites.each(invite => {
          const { uses, inviter, } = invite
          
          if (!guild.member(invite.inviter)) {
            return;
          }
          const { id } = inviter
          const name = `${id}`

          if (invite.inviter.id == message.author.id){
            inviteCounter[name] = (inviteCounter[name] || 0) + uses
          }

        })
        resolve(inviteCounter)
     })
    })
  }
  
  client.guilds.cache.forEach(async guild => {
    invites[guild.id] = await getInviteCounts(guild)

  })


  const invitesBefore = invites[message.guild.id]
  const invitesAfter = await getInviteCounts(message.guild)

  for (const inviter in invitesAfter) {
      const count = (invitesAfter[inviter])
      message.channel.send(
        new Discord.MessageEmbed()

        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#00ffff')
        .setDescription( `<:specter:826158146447474729> **Specter Convites** <:specter:826158146447474729>\n\n<:seta:826158298830077993> <@${inviter}>.\n<:seta:826158298830077993> ${count} convidados.`)
		.setFooter(`©️ Rede Specter | 2021`)
      )

      invites[message.guild.id] = invitesAfter
      return



  }
  } else {
    const invites = {}
      const getInviteCounts = async (guild) => {
        return await new Promise(resolve =>{
          guild.fetchInvites().then(invites => {
            const inviteCounter = {}
    
            invites.each(invite => {
              const { uses, inviter, } = invite
              const { id } = inviter
              const name = `${id}`
    
              if (invite.inviter.id == member.id){
                inviteCounter[name] = (inviteCounter[name] || 0) + uses
              }
    
            })
            resolve(inviteCounter)
         })
        })
      }
      
      client.guilds.cache.forEach(async guild => {
        invites[guild.id] = await getInviteCounts(guild)
    
      })
    
    
      const invitesBefore = invites[message.guild.id]
      const invitesAfter = await getInviteCounts(message.guild)
    
      for (const inviter in invitesAfter) {
          const count = (invitesAfter[inviter])
          message.channel.send(
            new Discord.MessageEmbed()
    
            .setColor('#00ffff')
            .setDescription( `<@${inviter}> - (${count} convidados) `)
          )
    
          invites[message.guild.id] = invitesAfter
          return
    
    
    
      }
  }
}
}
      
