//  _____                 _            ____   ____ _______ 
// / ____|               | |          |  _ \ / __ \__   __|
//| (___  _ __   ___  ___| |_ ___ _ __| |_) | |  | | | |   
// \___ \| '_ \ / _ \/ __| __/ _ \ '__|  _ <| |  | | | |   
// ____) | |_) |  __/ (__| ||  __/ |  | |_) | |__| | | |   
//|_____/| .__/ \___|\___|\__\___|_|  |____/ \____/  |_|   
//       | |                                               
//       |_|    
//
//   Dono: Sc4r#0001
//   Desenvolvedor: Sc4r#0001
//   Linguagem: JavaScript
//   Versão: 1.9
//



const Discord = require('discord.js'); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos
const ticket = require('./ticket/ticket.js');
const InviteMessage = require('./invites/InviteMessage.js');
const verify = require('./verificação/verify.js');
const pings = require('./verificação/pings.js');
const clans = require('./verificação/clans.js');
const facções = require('./verificação/facções.js');

client.on('message', async message => {
      
	  if (!message.member.roles.cache.find(r => r.name === "「🤝」Resp. Parcerias"))/*cargo da equipe*/{
 
	const regex = /(https?:\/826119689822404699\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (message.guild == "826119689822404699")
	if (message.channel.id !== "833489233053220865")
	if (regex.exec(message.content)) {
		await message.delete({ timeout: 1000 });
		return message.channel.send(
			new Discord.MessageEmbed()
				.setColor('#ff5555')
				.setDescription(
					`${
						message.author
					}, É proibido enviar convites de outros Discord's neste servidor.`
				)
		).then(msg => msg.delete({timeout: 10000}));
	}
  };
});

client.on('message', async message => {
  
  if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        return message.channel.send(
    new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.displayAvatarURL())
   .setColor('#00ffff')
   .setDescription(`Olá, precisa de ajuda?\nEu posso te ajudar! Basta digitar s!ajuda em <#806990130165841961> e te informarei tudo que precisará para começar, caso não seja suficiente contate algum membro de nossa equipe!`)
   .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
   .setTimestamp()
    ).then(msg => msg.delete({timeout: 40000}));
    };
});


client.on('message', message => {
	if (!message.content.toLowerCase().startsWith(config.prefix)) return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});


client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.roles.cache.has('737888368804888645')){
    if (newMember.roles.cache.has('737888368804888645')){
    let boost = newMember.guild.channels.cache.find(ch => ch.id === "826120635624325181")

    boost.send(  
    
      new Discord.MessageEmbed()

    .setColor('#00ffff')
    .setDescription(`<a:boostdk4:808867835933360138> | ${newMember} acabou de impulsionar a Rede Specter! Abra um ticket em <#826120649177169950> para usufruir dos seus benefícios. Obrigada por ajudar :heart:`)
    );   
    }
  }

})

client.on('ready', () => {
   let activities = [
            `O meu prefixo é "s!"`,
            `na Rede Specter ❤️`, {
                type: 'PLAYING'
            },
            `lojaredespecter.com`, {
                type: 'WATCHING'
            },
            `IP: redespecter.com`, {
             type:"STREAMING",
            url: "https://bit.ly/RedeSpecterDC"
      },
        ],
        i = 0;
     setInterval(
        () =>
            client.user.setActivity(`na Rede Specter ❤️`, {
                type: 'PLAYING'
            }),
        5000
    );
    setInterval(
        () =>
            client.user.setActivity(`meu prefixo é "s!"`, {
                type: 'LISTENING'
            }),
        5000
    );
      setInterval(
        () =>
            client.user.setActivity(`IP: redespecter.com`, {
             type:"STREAMING",
            url: "https://bit.ly/RedeSpecterDC"
      }),
        5000
    );
    setInterval(
        () =>
            client.user.setActivity(`loja.redespecter.com`, {
                type: 'WATCHING'
            }),
        5000
    );
	client.user.setStatus('online').catch(console.error);
	console.log(
		`O ${
			client.user.username
		} foi iniciado com sucesso. Desenvolvido por Sc4r#0001`
	);
  ticket(client);
  InviteMessage(client);
  verify(client)
  pings(client);
  clans(client);
  facções(client);
});

client.login(config.token); //Ligando o Bot caso ele consiga acessar o token





