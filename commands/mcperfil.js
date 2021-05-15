const Discord = require('discord.js');
const mpi = require("mc-player-api");
const moment = require('moment');
const util = require('minecraft-server-util');

exports.run = (client,message,args) => {
  let guild = client.guilds.cache.get("826119689822404699");
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let perfil = args[0];
  var ChannelID = message.channel.id
  if(cmd.toLowerCase().startsWith("s!mcperfil")) {
    if (message.guild.id === "826119689822404699")/*servidor principal*/{ 
      if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter"))/*cargo da equipe*/{
      if(ChannelID !== "826120645770608721")/*canal #comandos*/{
          let embed = new Discord.MessageEmbed()
  
     .setColor('#00ffff')
     .setAuthor(message.author.tag, message.author.displayAvatarURL())
     .setDescription(`Não é permitido o uso de comandos nesse canal. Utilize o <#826120645770608721>`)
     .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
     .setTimestamp();6
  
    return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
      };
  };
  }



  if (perfil){
    mpi.getUser(perfil).then(user => {
    if (!user.why){
        if (user.username_history.length == 1){

             return message.channel.send(
                new Discord.MessageEmbed()
                .setDescription(`**Perfil de [${perfil}](https://mc-heads.net/body/${perfil}/500)**`)
                .setThumbnail(message.author.displayAvatarURL())
                .addFields(
                    { name: 'Nick atual', value: user.username , inline: true },
                    { name: 'Último nick', value:  `${user.username_history[((user.username_history.length) - 1)].username}` , inline: true },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Vinculada ao Discord', value: 'Inativo', inline: true },
                    { name: 'Conta criada em', value: moment(user.created_at).format('DD/MM/YYYY'), inline: true },
                )
                .setThumbnail(`https://mc-heads.net/head/${perfil}/150`)
            );
        }
        console.log(user.username_history[((user.username_history.length) - 2)])
        message.channel.send(
            new Discord.MessageEmbed()
            .setDescription(`**Perfil de [${perfil}](https://mc-heads.net/body/${perfil}/500)**`)
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                { name: 'Nick atual', value: user.username , inline: true },
                { name: 'Último nick', value:  `${user.username_history[((user.username_history.length) - 2)].username} alterado em ${moment(user.username_history[((user.username_history.length) - 2)].changed_at).format('DD/MM/YYYY')}` , inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Vinculada ao Discord', value: 'Inativo', inline: true },
                { name: 'Conta criada em', value: moment(user.created_at).format('DD/MM/YYYY'), inline: true },
            )
            .setThumbnail(`https://mc-heads.net/head/${perfil}/150`)
        );
    }
     else {
    
            message.channel.send(
                new Discord.MessageEmbed()
                .setDescription(`**Perfil de [${perfil}](https://mc-heads.net/body/${perfil}/500) (Pirata)**`)
                .setThumbnail(message.author.displayAvatarURL())
                .addFields(
                    { name: 'Nick', value: perfil , inline: true },
                    { name: 'Historico de Nicks', value:  'Sem histórico', inline: true },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Vinculada ao Discord', value: 'Inativo', inline: true },
                    { name: 'Conta criada em', value: 'Sem histórico', inline: true },
                )
                .setThumbnail(`https://mc-heads.net/head/${perfil}/150`)
            );
                }
            })
        
    } else {
        return message.channel.send(    
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription(`É nececssário colocar um nick. /mcprofile <nick>`)
            .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}))
      }
          } 
        }

    