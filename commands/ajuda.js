const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	
	let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
	var ChannelID = message.channel.id
	
	if(ChannelID !== "826120645770608721")/*canal #comandos*/{
    let embed = new Discord.MessageEmbed()
    
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`Não é permitido o uso de comandos nesse canal. Utilize o <#826120645770608721>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp();
    
    return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
    };
	
  const ajuda = new Discord.MessageEmbed()
		
  .setTitle(`<:specter:826158146447474729> | Lista de Comandos`)
  .setDescription(`󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
  <:config:826158469584912464>  - **Comandos de Moderação**
  <:Ferramentas:826158251854397482> - **Comandos de Administração**
  <:LS_arquivo:826158444914540574> - **Comandos Gerais**
  <:Minecraft:826158393919143998> - **Comandos do Servidor**`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
  .setColor('#00ffff')
  .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
  .setTimestamp()

  message.channel.send(ajuda).then(msg => {

    msg.react('826158469584912464').then(r => {
    msg.react('826158251854397482').then(r => {
    msg.react('826158444914540574').then(r => {
    msg.react('826158393919143998').then(r => {
	msg.react('826158271131287602').then(r => {

  })
  })
  })
  })
  })

  const modFilter = (reaction, user) => reaction.emoji.id === '826158469584912464' && user.id === message.author.id;
  const admFilter = (reaction, user) => reaction.emoji.id === '826158251854397482' && user.id === message.author.id;
  const geralFilter = (reaction, user) => reaction.emoji.id === '826158444914540574' && user.id === message.author.id;
  const serverFilter = (reaction, user) => reaction.emoji.id === '826158393919143998' && user.id === message.author.id;
  const inicioFilter = (reaction, user) => reaction.emoji.id === '826158271131287602' && user.id === message.author.id;
  
  
  const mod = msg.createReactionCollector(modFilter);
  const adm = msg.createReactionCollector(admFilter);
  const geral = msg.createReactionCollector(geralFilter);
  const server = msg.createReactionCollector(serverFilter);
  const inicio = msg.createReactionCollector(inicioFilter);

  const embedajuda = new Discord.MessageEmbed()

  .setTitle(`<:specter:826158146447474729> | Lista de Comandos`)
  .setDescription(`󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
  <:config:826158469584912464>  - **Comandos de Moderação**
  <:Ferramentas:826158251854397482>  - **Comandos de Administração**
  <:LS_arquivo:826158444914540574>  - **Comandos Gerais**
  <:Minecraft:826158393919143998>  - **Comandos do Servidor**
  <:errado:826158271131287602> - **Voltar ao Início**`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
  .setColor('#00ffff')
  .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
  .setTimestamp()

  const embedmod = new Discord.MessageEmbed()

  .setTitle(`<:config:826158469584912464>  | Comandos de Moderação`)
  .setDescription(`󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
  **s!banir** → Faça o banimento de um jogador
  **s!expulsar** → Expulse um jogador
  **s!mutar** → Mute um jogador temporariamente
  **s!desmutar** → Desmute um jogador
  **s!desbanir** → Desbanir um jogador`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
  .setColor('#00ffff')
  .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
  .setTimestamp()

  const embedadm = new Discord.MessageEmbed()

  .setTitle(`<:Ferramentas:826158251854397482>  | Comandos de Administração**`)
  .setDescription(`󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
  **s!limpar** → Limpe as ultimas mensagens no chat
  **s!ping** → Veja o ping do servidor e bot
  **s!anunciar** → Crie um anuncio
  **s!spoilers** → Adicione um spoiler
  **s!travarchat** → Trave o envio de mensagens de jogadores em um chat
  **s!destravarchat** → Destrave o envio de mensagens de jogadores em um chat`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
  .setColor('#00ffff')
  .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
  .setTimestamp()

  const embedgeral = new Discord.MessageEmbed()

  .setTitle(`<:LS_arquivo:826158444914540574> | Comandos Gerais`)
  .setDescription(`󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
  **s!ajuda** → Forneço informações e ajuda.
  **s!avatar** → Consiga o avatar de um usuário
  **s!perfil** → Veja informações sobre o seu perfil ou de outro membro
  **s!mcperfil** → Veja informações sobre o seu perfil ou de outro membro no minecraft
  **s!serverinfo** → Veja informações do servidor do discord
  **s!invites** → Veja a quantide de pessoas que você ou outra pessoa convidaram`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
  .setColor('#00ffff')
  .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
  .setTimestamp()

  const embedserver = new Discord.MessageEmbed()

  .setTitle(`<:Minecraft:826158393919143998> | Comandos do Servidor`)
  .setDescription(`󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪
  **s!facção** → Confirme a presença da sua facção
  **s!clan** → Confirme a presença da seu clan
  **s!revisão** → Solicite uma revisão de punição
  **s!solicitaryt** → Solicite sua Tag YT (Cumpra os requisitos)
  **s!ip** → Veja informações da Rede Specter
  **s!sugestão** → Faça uma sugestão no Discord
  **s!jogadores** → Veja quantidade de jogadores no servidor`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
  .setColor('#00ffff')
  .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
  .setTimestamp()

  inicio.on('collect', r2 => {
    r2.users.remove(message.author.id)
    msg.edit(embedajuda)
  })

  mod.on('collect', r2 => {
    r2.users.remove(message.author.id)
    msg.edit(embedmod)
  })

  adm.on('collect', r2 => {
    r2.users.remove(message.author.id)
    msg.edit(embedadm)
  })

  geral.on('collect', r2 => {
    r2.users.remove(message.author.id)
    msg.edit(embedgeral)
  })

  server.on('collect', r2 => {
    r2.users.remove(message.author.id)
    msg.edit(embedserver)
  })

  })
}

exports.help = {
  name: "ajuda",
  aliases: ["help"]
}
