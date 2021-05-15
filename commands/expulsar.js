const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    message.delete();
    if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")) { 
    return message.channel.send(    
    new Discord.MessageEmbed()
            .setColor('#ff5555')
            .setDescription(`Sem premissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
    } else {
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Necessário mencionar um usuario. /expulsar <@usuario> <motivo>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));

    if (membro === message.member) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Você não pode expulsar você mesmo!`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
 
    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Nececssário colocar o motivo. /expulsar <@usuario> <motivo>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}))
    
 
     let guild = client.guilds.cache.get("787531327402016798");
            var canal = message.guild.channels.cache.find(ch => ch.id === "802684581883019304"); //canal que vai mandar as logs
            var canalog = guild.channels.cache.find(ch => ch.id === "802686913088585728");
 
    message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Você realmente deseja expulsar o jogador ${membro}?`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => {
        msg.react("✅")
        msg.react("❌")
        msg.delete({timeout: 10000})
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let filtro2 = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
        let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canal.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(membro.user.tag, membro.user.displayAvatarURL())
    .setDescription(`Punição: Expulsão\nMotivo: ${motivo}`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp())
            membro.kick();
            membro.send(    
                new Discord.MessageEmbed()
                .setColor('#00ffff')
                .setAuthor(membro.user.tag, membro.user.displayAvatarURL())
                .setDescription(`Você foi expulso do servidor **Rede Specter | 2021**\nMotivo: ${motivo}`)
                .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
                .setTimestamp())
            message.channel.send(
              new Discord.MessageEmbed()
 
                    .setColor('#00ffff')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`Punição aplicada com sucesso no usuário ${membro}, verifique os registros em <#802684581883019304>`)
                    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
                    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
            canalog.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(membro.user.tag, membro.user.displayAvatarURL())
    .setDescription(`Punição: Expulsão\nMotivo: ${motivo}`)
    .setFooter(`Punição feita por ${message.author.tag}`,message.author.displayAvatarURL())
    .setTimestamp())
          
        })
        coletor2.on("collect", cp => {
            cp.remove(message.author.id);
            message.channel.send(
              new Discord.MessageEmbed()
 
                    .setColor('#00ffff')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`Punição canelada com sucesso`)
                    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
                    .setTimestamp());
        })
    }).then(msg => msg.delete({timeout: 10000}))
}
}
 
exports.help = {
    name: 'kick'
}