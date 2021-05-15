const Discord = require('discord.js')

exports.run = async (client,message,args) => {
message.delete();
let guild = client.guilds.cache.get("826119689822404699");
var alt = args[1];
var padrãoequipe = message.guild.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter");
var nick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
var canalalt = guild.channels.cache.find(ch => ch.id === "826120630918185042");
if (!message.member.roles.cache.find(r => r.name === "「👩🏻‍🏫」Resp. Staff")){
   return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor("#00ffff")
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
}

if (!nick) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`É preciso mencionar um usuario. s!equipe <@usuario>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));

if (!alt) return message.channel.send(    

    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Qual a ação que será exercida com ${nick}?\n\n<a:entrando:807132902265454612> - Adicionar\n<:promote:833619174181044235> - Promover\n<:demote:833619174688686100> - Rebaixar\n<a:saindo:807132902784499752> - Remover`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => {
		msg.react("807132902265454612")
        msg.react("833619174181044235")
        msg.react("833619174688686100")
        msg.react("807132902784499752")
        msg.delete({timeout: 10000})
 
        let f = (reaction, usuario) => reaction.emoji.id === "807132902265454612" && usuario.id === message.author.id;
		let f1 = (reaction, usuario) => reaction.emoji.id === "833619174181044235" && usuario.id === message.author.id;
        let f2 = (reaction, usuario) => reaction.emoji.id === "833619174688686100" && usuario.id === message.author.id;
        let f3 = (reaction, usuario) => reaction.emoji.id === "807132902784499752" && usuario.id === message.author.id;
        let c = msg.createReactionCollector(f, {max: 1})
		let c1 = msg.createReactionCollector(f1, {max: 1})
        let c2 = msg.createReactionCollector(f2, {max: 1})
        let c3 = msg.createReactionCollector(f3, {max: 1})

    c.on("collect", cp => {
        return message.channel.send(
        new Discord.MessageEmbed()
        .setColor("#00ffff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
        .setDescription(`Qual o cargo que ${nick} irá? \nSelecione conforme os emojis\n🔥 - Construtor\n💻 - Desenvolvimento\n🎨 - Designer\n⚔️ - Master\n🛡️ - Direção\n👔 - Gerência\n🎓 - Coordenação\n💼 - Administrador\n📚 - Moderação\n📞 - Ajudante\n🧸 - Estagiário`)
        .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
        .setTimestamp()).then(msg => {
            msg.react("🧸")
            msg.react("📞")
            msg.react("📚")
            msg.react("💼")
            msg.react("🎓")
            msg.react("👔")
            msg.react("🛡️")
            msg.react("⚔️")
            msg.react("🎨")
            msg.react("💻")
            msg.react("🔥")
            msg.delete({timeout: 10000})
     
            let f = (reaction, usuario) => reaction.emoji.name === "🧸" && usuario.id === message.author.id;
            let f1 = (reaction, usuario) => reaction.emoji.name === "📞" && usuario.id === message.author.id;
            let f2 = (reaction, usuario) => reaction.emoji.name === "📚" && usuario.id === message.author.id;
            let f3 = (reaction, usuario) => reaction.emoji.name === "💼" && usuario.id === message.author.id;
            let f4 = (reaction, usuario) => reaction.emoji.name === "🎓" && usuario.id === message.author.id;
            let f5 = (reaction, usuario) => reaction.emoji.name === "👔" && usuario.id === message.author.id;
            let f6 = (reaction, usuario) => reaction.emoji.name === "🛡️" && usuario.id === message.author.id;
            let f7 = (reaction, usuario) => reaction.emoji.name === "⚔️" && usuario.id === message.author.id;
            let f8 = (reaction, usuario) => reaction.emoji.name === "🎨" && usuario.id === message.author.id;
            let f9 = (reaction, usuario) => reaction.emoji.name === "💻" && usuario.id === message.author.id;
            let f10 = (reaction, usuario) => reaction.emoji.name === "🔥" && usuario.id === message.author.id;
            let c = msg.createReactionCollector(f, {max: 1})
            let c1 = msg.createReactionCollector(f1, {max: 1})
            let c2 = msg.createReactionCollector(f2, {max: 1})
            let c3 = msg.createReactionCollector(f3, {max: 1})
            let c4 = msg.createReactionCollector(f4, {max: 1})
            let c5 = msg.createReactionCollector(f5, {max: 1})
            let c6 = msg.createReactionCollector(f6, {max: 1})
            let c7 = msg.createReactionCollector(f7, {max: 1})
            let c8 = msg.createReactionCollector(f8, {max: 1})
            let c9 = msg.createReactionCollector(f9, {max: 1})
            let c10 = msg.createReactionCollector(f10, {max: 1})
        
     
         c.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120538430373918> `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120538430373918"));
            nick.roles.add(padrãoequipe);       
        })
        c1.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120537226084383> `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120537226084383"));
            nick.roles.add(padrãoequipe);       
        })
        c2.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120536777162752> `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120536777162752"));
            nick.roles.add(padrãoequipe);       
        })
        c3.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120535653613589>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120535653613589"));
            nick.roles.add(padrãoequipe);       
        })
        c4.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120534781067295>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120534781067295"));
            nick.roles.add(padrãoequipe);       
        })
        c5.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120533862645831>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120533862645831"));
            nick.roles.add(padrãoequipe);       
        })
        c6.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120533229043733>   `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120533229043733"));
            nick.roles.add(padrãoequipe);       
        })
        c7.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120532676182052>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120532676182052"));
            nick.roles.add(padrãoequipe);       
        })
        c8.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120540099706911>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120540099706911"));
            nick.roles.add(padrãoequipe);       
        })
        c9.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120540888367164>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120540888367164"));
            nick.roles.add(padrãoequipe);       
        })
        c10.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi integrado a equipe como <@&826120542209179649>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120542209179649"));
            nick.roles.add(padrãoequipe);       
        })


    })

})

    c1.on("collect", cp => {
        return message.channel.send(
        new Discord.MessageEmbed()
        .setColor("#00ffff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
        .setDescription(`Qual o cargo que ${nick} irá? \nSelecione conforme os emojis\n🔥 - Construtor\n💻 - Desenvolvimento\n🎨 - Designer\n⚔️ - Master\n🛡️ - Direção\n👔 - Gerência\n🎓 - Coordenação\n💼 - Administrador\n📚 - Moderação\n📞 - Ajudante\n🧸 - Estagiário`)
        .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
        .setTimestamp()).then(msg => {
            msg.react("🧸")
            msg.react("📞")
            msg.react("📚")
            msg.react("💼")
            msg.react("🎓")
            msg.react("👔")
            msg.react("🛡️")
            msg.react("⚔️")
            msg.react("🎨")
            msg.react("💻")
            msg.react("🔥")
            msg.delete({timeout: 10000})
     
            let f = (reaction, usuario) => reaction.emoji.name === "🧸" && usuario.id === message.author.id;
            let f1 = (reaction, usuario) => reaction.emoji.name === "📞" && usuario.id === message.author.id;
            let f2 = (reaction, usuario) => reaction.emoji.name === "📚" && usuario.id === message.author.id;
            let f3 = (reaction, usuario) => reaction.emoji.name === "💼" && usuario.id === message.author.id;
            let f4 = (reaction, usuario) => reaction.emoji.name === "🎓" && usuario.id === message.author.id;
            let f5 = (reaction, usuario) => reaction.emoji.name === "👔" && usuario.id === message.author.id;
            let f6 = (reaction, usuario) => reaction.emoji.name === "🛡️" && usuario.id === message.author.id;
            let f7 = (reaction, usuario) => reaction.emoji.name === "⚔️" && usuario.id === message.author.id;
            let f8 = (reaction, usuario) => reaction.emoji.name === "🎨" && usuario.id === message.author.id;
            let f9 = (reaction, usuario) => reaction.emoji.name === "💻" && usuario.id === message.author.id;
            let f10 = (reaction, usuario) => reaction.emoji.name === "🔥" && usuario.id === message.author.id;
            let c = msg.createReactionCollector(f, {max: 1})
            let c1 = msg.createReactionCollector(f1, {max: 1})
            let c2 = msg.createReactionCollector(f2, {max: 1})
            let c3 = msg.createReactionCollector(f3, {max: 1})
            let c4 = msg.createReactionCollector(f4, {max: 1})
            let c5 = msg.createReactionCollector(f5, {max: 1})
            let c6 = msg.createReactionCollector(f6, {max: 1})
            let c7 = msg.createReactionCollector(f7, {max: 1})
            let c8 = msg.createReactionCollector(f8, {max: 1})
            let c9 = msg.createReactionCollector(f9, {max: 1})
            let c10 = msg.createReactionCollector(f10, {max: 1})
        
     
         c.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120538430373918> `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120538430373918"));
            nick.roles.add(padrãoequipe);       
        })
        c1.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120537226084383> `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120537226084383"));
            nick.roles.add(padrãoequipe);       
        })
        c2.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120536777162752> `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120536777162752"));
            nick.roles.add(padrãoequipe);       
        })
        c3.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120535653613589>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120535653613589"));
            nick.roles.add(padrãoequipe);       
        })
        c4.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120534781067295>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120534781067295"));
            nick.roles.add(padrãoequipe);       
        })
        c5.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120533862645831>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120533862645831"));
            nick.roles.add(padrãoequipe);       
        })
        c6.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120533229043733>   `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120533229043733"));
            nick.roles.add(padrãoequipe);       
        })
        c7.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120532676182052>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120532676182052"));
            nick.roles.add(padrãoequipe);       
        })
        c8.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120540099706911>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120540099706911"));
            nick.roles.add(padrãoequipe);       
        })
        c9.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120540888367164>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120540888367164"));
            nick.roles.add(padrãoequipe);       
        })
        c10.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi promovido para a equipe de <@&826120542209179649>  `)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120542209179649"));
            nick.roles.add(padrãoequipe);       
        })


    })

})

c2.on("collect", cp => {
    return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Qual o cargo que ${nick} irá? \nSelecione conforme os emojis\n🔥 - Construtor\n💻 - Desenvolvimento\n🎨 - Designer\n⚔️ - Master\n🛡️ - Direção\n👔 - Gerência\n🎓 - Coordenação\n💼 - Administrador\n📚 - Moderação\n📞 - Ajudante\n🧸 - Estagiário`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => {
        msg.react("🧸")
        msg.react("📞")
        msg.react("📚")
        msg.react("💼")
        msg.react("🎓")
        msg.react("👔")
        msg.react("🛡️")
        msg.react("⚔️")
        msg.react("🎨")
        msg.react("💻")
        msg.react("🔥")
        msg.delete({timeout: 10000})
 
        let f = (reaction, usuario) => reaction.emoji.name === "🧸" && usuario.id === message.author.id;
        let f1 = (reaction, usuario) => reaction.emoji.name === "📞" && usuario.id === message.author.id;
        let f2 = (reaction, usuario) => reaction.emoji.name === "📚" && usuario.id === message.author.id;
        let f3 = (reaction, usuario) => reaction.emoji.name === "💼" && usuario.id === message.author.id;
        let f4 = (reaction, usuario) => reaction.emoji.name === "🎓" && usuario.id === message.author.id;
        let f5 = (reaction, usuario) => reaction.emoji.name === "👔" && usuario.id === message.author.id;
        let f6 = (reaction, usuario) => reaction.emoji.name === "🛡️" && usuario.id === message.author.id;
        let f7 = (reaction, usuario) => reaction.emoji.name === "⚔️" && usuario.id === message.author.id;
        let f8 = (reaction, usuario) => reaction.emoji.name === "🎨" && usuario.id === message.author.id;
        let f9 = (reaction, usuario) => reaction.emoji.name === "💻" && usuario.id === message.author.id;
        let f10 = (reaction, usuario) => reaction.emoji.name === "🔥" && usuario.id === message.author.id;
        let c = msg.createReactionCollector(f, {max: 1})
        let c1 = msg.createReactionCollector(f1, {max: 1})
        let c2 = msg.createReactionCollector(f2, {max: 1})
        let c3 = msg.createReactionCollector(f3, {max: 1})
        let c4 = msg.createReactionCollector(f4, {max: 1})
        let c5 = msg.createReactionCollector(f5, {max: 1})
        let c6 = msg.createReactionCollector(f6, {max: 1})
        let c7 = msg.createReactionCollector(f7, {max: 1})
        let c8 = msg.createReactionCollector(f8, {max: 1})
        let c9 = msg.createReactionCollector(f9, {max: 1})
        let c10 = msg.createReactionCollector(f10, {max: 1})
    
 
     c.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120538430373918> `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120538430373918"));
        nick.roles.add(padrãoequipe);       
    })
    c1.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120537226084383> `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120537226084383"));
        nick.roles.add(padrãoequipe);       
    })
    c2.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120536777162752> `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120536777162752"));
        nick.roles.add(padrãoequipe);       
    })
    c3.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120535653613589>  `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120535653613589"));
        nick.roles.add(padrãoequipe);       
    })
    c4.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120534781067295>  `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120534781067295"));
        nick.roles.add(padrãoequipe);       
    })
    c5.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120533862645831>  `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120533862645831"));
        nick.roles.add(padrãoequipe);       
    })
    c6.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120533229043733>   `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120533229043733"));
        nick.roles.add(padrãoequipe);       
    })
    c7.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120532676182052>  `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120532676182052"));
        nick.roles.add(padrãoequipe);       
    })
    c8.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120540099706911>  `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120540099706911"));
        nick.roles.add(padrãoequipe);       
    })
    c9.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120540888367164>  `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120540888367164"));
        nick.roles.add(padrãoequipe);       
    })
    c10.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi rebaixado para equipe de <@&826120542209179649>  `)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.add(message.guild.roles.cache.find(r => r.id == "826120542209179649"));
        nick.roles.add(padrãoequipe);       
    })


})

})

c3.on("collect", cp => {
    return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Qual o cargo que ${nick} irá? \n\n🔥 - Para informar que saiu.\n<:lixeira:807132899341631508> - Para informar que foi removido(a)`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => {
        msg.react("🔥")
        msg.react("807132899341631508")
        msg.delete({timeout: 10000})
 
        let f = (reaction, usuario) => reaction.emoji.name === "🔥" && usuario.id === message.author.id;
        let f1 = (reaction, usuario) => reaction.emoji.id === "807132899341631508" && usuario.id === message.author.id;
        let c = msg.createReactionCollector(f, {max: 1})
        let c1 = msg.createReactionCollector(f1, {max: 1})
    
 
     c.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} saiu da equipe.`)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120532676182052"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120533229043733"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120533862645831"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120534781067295"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120535653613589"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120536777162752"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120537226084383"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120538430373918"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120540099706911"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120540888367164"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120541693935646"));
nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120542209179649"));
nick.roles.remove(padrãoequipe);             
    })
    c1.on("collect", cp => {
        cp.remove(message.author.id);
    const msg = canalalt.send(    
new Discord.MessageEmbed()
.setColor("#00ffff")
.setDescription(`<:livro:833616798460542976> **Alterações da equipe**\n\nO(a) ${nick} foi removido(a) da equipe.`)
.setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
.setTimestamp());
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120532676182052"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120533229043733"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120533862645831"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120534781067295"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120535653613589"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120536777162752"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120537226084383"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120538430373918"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120540099706911"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120540888367164"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120541693935646"));
        nick.roles.remove(message.guild.roles.cache.find(r => r.id == "826120542209179649"));
        nick.roles.remove(padrãoequipe);       
    })
})

})

    })

}

