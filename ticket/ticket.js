const firstMessage = require('./first-message.js')
const Discord = require('discord.js')

module.exports = (client) => {

  var hash = 0;

  const h = `#`;

  const guild = '826119689822404699'

  const channelId = '826120649177169950'

  let array = [];

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
     jogadores: 'Jogadores',
  }

  const reactions = []

 let embed = new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nOlá, jogador. Está precisando de ajuda?\n\nPara conseguir entrar em contato com algum membro da nossa equipe em busca de ajuda, reaja com os respectivos emojis de acordo com o topico do ticket.\n\n💸 - Compras\n\n<:Youtube:826158386872582235> -  Youtubers\n\n⚔️ - Facções\n\n📞 - Bugs\n\n<:Ferramentas:826158251854397482> - Duvidas\n\n`)
   .setFooter(`©️ Rede Specter | 2021`);

  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
  }

  firstMessage(client, channelId, embed, ['💸', '<:Youtube:826158386872582235>', '⚔️', '📞', '<:Ferramentas:826158251854397482>'])

  const handleReaction = (reaction, user, add) => {
    if (user.id === '824110399720259584') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const tipo = emojis[emoji]

    const member = guild.members.cache.find((member) => member.id === user.id)

    let guildstaff = client.guilds.cache.get("787531327402016798");
    let canalog = guildstaff.channels.cache.find(ch => ch.id === "809801197757268000");

  if (add){
      reaction.users.remove(user);
      if (reaction.emoji.name === '💸'){
        if (array.includes(member)) return;
        let newLength = array.push(member);
        while (guild.channels.cache.find(channel => channel.name === `ticketcompras-${hash}`)){
        hash++;
      }
        var categoryID = '826120598841065512' //categoria do ticket//
        guild.channels.create(`ticketcompras-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketcompras-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketcompras-${hash}`)
   .setFooter(`©️ Rede Specter | 2021`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nProblema:\nCaso necessário, Comprovante:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:Lixeira:826158230618898452>`)
   .setFooter(`©️ Rede Specter | 2021`)
          ).then(msg => {
    msg.react("<:Lixeira:826158230618898452>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "826158230618898452" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
        return
      }

        for(var i = 0; i < array.length; i++){ 
    
        if (array[i] === member) { 
            array.splice(i, 1); 
        }
    
    }

        member.send(new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )




      })



          
          })
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })



//
//aq é youtubers




      } else if (reaction.emoji.id === '824479073304444938')/*aqui é o ticket de youtubers*/{
        if (array.includes(member)) return;
        let newLength = array.push(member);
        while (guild.channels.cache.find(channel => channel.name === `ticketyoutube-${hash}`)){
        hash++;
      }
        var categoryID = '826120599856349224' //categoria do ticket//
        guild.channels.create(`ticketyoutube-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketyoutube-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketcompras-${hash}`)
   .setFooter(`©️ Rede Specter | 2021`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nProblema/Solicitação:\nCaso necessário, Link do Canal:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:Lixeira:826158230618898452>`)
   .setFooter(`©️ Rede Specter | 2021`)
          ).then(msg => {
    msg.react("<:Lixeira:826158230618898452>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "826158230618898452" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
        return
      }

      for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }

        member.send(new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })




//ticket de facções :pray:

      } else if (reaction.emoji.name === '⚔️'){

        if (array.includes(member)) return;
        let newLength = array.push(member);

        while (guild.channels.cache.find(channel => channel.name === `ticketfacção-${hash}`)){
        hash++;
      }
        var categoryID = '826120600698486785' //categoria do ticket//
        guild.channels.create(`ticketfacção-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketfacção-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketfacção-${hash}`)
   .setFooter(`©️ Rede Specter | 2021`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nO seu cargo na facção:\nSigla da Facção:\nNome da facção:\nDiscord da facção:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:Lixeira:826158230618898452>`)
   .setFooter(`©️ Rede Specter | 2021`)
          ).then(msg => {
    msg.react("<:Lixeira:826158230618898452>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "826158230618898452" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
        return
      }

        for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }


        member.send(new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })





//ticket bugs

      } else if (reaction.emoji.name === '📞'){

        if (array.includes(member)) return;
        let newLength = array.push(member);
        

        while (guild.channels.cache.find(channel => channel.name === `ticketbugs-${hash}`)){
        hash++;
      }
        var categoryID = '826120601248858163' //categoria do ticket//
        guild.channels.create(`ticketbugs-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketbugs-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketbugs-${hash}`)
   .setFooter(`©️ Rede Specter | 2021`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nBug/Problema:\nProva/Print:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:Lixeira:826158230618898452>`)
   .setFooter(`©️ Rede Specter | 2021`)
          ).then(msg => {
    msg.react("<:Lixeira:826158230618898452>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "826158230618898452" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
        return
      }

      for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }



        member.send(new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })




//ticket duvidas
      } else {
        
        if (array.includes(member)) return;
        let newLength = array.push(member);
        

        while (guild.channels.cache.find(channel => channel.name === `ticketduvidas-${hash}`)){
        hash++;
      }
        var categoryID = '826120602543980574' //categoria do ticket//
        guild.channels.create(`ticketduvidas-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketduvidas-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketduvidas-${hash}`)
   .setFooter(`©️ Rede Specter | 2021`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nDuvida:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:Lixeira:826158230618898452>`)
   .setFooter(`©️ Rede Specter | 2021`)
          ).then(msg => {
    msg.react("<:Lixeira:826158230618898452>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "826158230618898452" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
        return
      }

      for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }

        member.send(new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket - Log <:specter:826158146447474729>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#00ffff")
   .setTitle(`<:specter:826158146447474729> Specter ticket <:specter:826158146447474729>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Rede Specter | 2021`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })
      }
    } else {
      return;
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