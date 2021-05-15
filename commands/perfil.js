const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    let user = client.users.cache.get(args-[0]) || message.mentions.users.first() ||  message.author;

    let statusmebro;
	let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
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

    if(user.presence.status === "dnd") statusmebro = `<:ocupado:826257105014489100> Ocupado`;
    if(user.presence.status === "idle") statusmebro = `<:ausente:826257105107156994> Ausente`;
    if(user.presence.status === "offline") statusmebro = `<:offline:826256804396793876> Offline`;
    if(user.presence.status === "online") statusmebro = `<:online:826257105438113862>  Online`;

    let member = message.guild.member(user);

            const embed = new Discord.MessageEmbed()

            .setTitle(`<:specter:826158146447474729> Informações de ${user.tag}`)
            .setDescription(`󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪` +
            `\n<:coroa:826257779593314344> **|** Apelido: ${member.nickname !== null ? `${member.nickname}` : '`Nenhum`'}` +
            `\n<:config:826158469584912464>  **|** Tag: \`#${user.discriminator}\`` +
            `\n<:Ferramentas:826158251854397482> **|** ID: \`${user.id}\`` +
            `\n\n<:LS_pessoas:826158438886670336> **|** Conta criada: ${moment(user.createdAt).format('LL')}` +
            `\n<:LS_trofeu:826158432864305213> **|** Entrou aqui: ${moment(member.joinedAt).format('LL')}` +
            `\n<:LS_arquivo:826158444914540574> **|** Status: ${statusmebro}` +
            `\n\n`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
            .setColor('#00ffff')
			.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
			.setTimestamp()
            
            message.channel.send(`${message.author}`)
			message.channel.send(embed)
}

exports.help = {
    name: "perfil",
    aliases: ["profile", "about"]
}