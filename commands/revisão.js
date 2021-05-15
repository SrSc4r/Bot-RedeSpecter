const Discord = require('discord.js')

exports.run = async (client,message,args) => {
  message.delete();
  var guild = client.guilds.cache.get("8261196898224046992");
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  let nome = args[0];
  let codigopuni = args[1];
  let motivo = args.slice(2).join(" ");

if(cmd.toLowerCase().startsWith("s!revisão")){
  if (message.guild.id === "8261196898224046992"){
    if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
    if(ChannelID !== "826120661503442954"){
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

  if (!nome) return message.channel.send(
    new Discord.MessageEmbed()

    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`É preciso informar um nick. /revisão <nick> <codigo da punição> <motivo>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());

    if (!codigopuni) return message.channel.send(
        new Discord.MessageEmbed()
    
        .setColor('#00ffff')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`É preciso informar um codigo de punição. /revisão <nick> <codigo da punição> <motivo>`)
        .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
        .setTimestamp());

        if (!motivo) return message.channel.send(
            new Discord.MessageEmbed()
        
            .setColor('#00ffff')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`É preciso informar um motivo para a revisão. /revisão <nick> <codigo da punição> <motivo>`)
            .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
            .setTimestamp());

        var player = message.author;
        var canalresvi = message.guild.channels.cache.find(ch => ch.id === "808185203696467968");

        message.channel.send(
            new Discord.MessageEmbed()
  
                  .setColor("#00ffff")
                  .setAuthor(message.author.tag, message.author.displayAvatarURL())
                  .setDescription(`Solicitação de revisão criada. Aguarde uma resposta em seu privado.`)
                  .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
           
                 .setTimestamp()).then(msg => msg.delete({timeout: 10000}));



        const msg = canalresvi.send(
        new Discord.MessageEmbed()

   .setColor('#00ffff')
   .setTitle(`**Solicitação de Revisão**`) 
   .setDescription(`Nick: ${nome}\nCodigo de punição: ${codigopuni}\nMotivo para revogar: ${motivo}\n\nAceitei ou neguem o pedido com os respectivos emojis: ✅ e ❌`)
   .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
   .setTimestamp()).then(msg => {
    msg.react("✅")
    msg.react("❌")

    let aceito = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id != client.user.id;
    let recusado = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id != client.user.id;
    let coletor = msg.createReactionCollector(aceito, {max: 1})
    let coletor2 = msg.createReactionCollector(recusado, {max: 1})
    coletor.on("collect", cp => {
    message.author.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setDescription(`A sua solicitação de punição, codigo: ${codigopuni}, foi aceita.`)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
var guild = client.guilds.cache.get("787531327402016798");
var canalog = guild.channels.cache.find(ch => ch.id === "808184490165403648");

canalog.send(
    new Discord.MessageEmbed()

.setColor('#00ffff')
.setTitle(`**Solicitação de Revisão**`) 
.setDescription(`Foi revogado a punição de ${nome}, Codigo de punição: ${codigopuni}\n\n `)
.setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp())
        msg.delete();
        })
        coletor2.on("collect", cp => {
        message.author.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`A sua solicitação de punição, codigo: ${codigopuni}, foi recusada.`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
    msg.delete();
            })
    })


    
};
}