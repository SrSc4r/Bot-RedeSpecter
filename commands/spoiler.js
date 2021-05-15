const cooldown = new Set()
const Discord = require('discord.js')

var author;

module.exports.run = async (client, message, args, config) => {

    if (!message.member.roles.cache.find(r => r.name === "「🛠️」Resp. Desenvolvimento")){
        return message.channel.send(    
                 new Discord.MessageEmbed()
                 .setColor("#ff5555")
                 .setDescription(`Sem permissão`)
                 .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
     }

    let inicio = new Discord.MessageEmbed()

        .setTitle(`<:specter:826158146447474729> Escolha o Servidor <:specter:826158146447474729>`)
        .setColor("#ff5555")
        .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(`💥 - Factions Caribe\n💵 - RankUP Lure\n⚔️ - Survival Runes\n🎮 - Minigames\n\n`)

    message.channel.send(inicio).then((msg) => {
        msg.react('💥').then(() => {
            msg.react('💵').then(() => {
                msg.react('⚔️').then(() => {
					msg.react('🎮').then(() => {

						let factionsfilter = (r, u) => r.emoji.name === '💥' && u.id == message.author.id;
						let factions = msg.createReactionCollector(factionsfilter, { time: 60000 });
						let rankupfilter = (r, u) => r.emoji.name === '💵' && u.id == message.author.id;
						let rankup = msg.createReactionCollector(rankupfilter, { time: 60000 });
						let survivalfilter = (r, u) => r.emoji.name === '⚔️' && u.id == message.author.id;
						let survival = msg.createReactionCollector(survivalfilter, { time: 60000 });
						let minigamesfilter = (r, u) => r.emoji.name === '🎮' && u.id == message.author.id;
						let minigames = msg.createReactionCollector(minigamesfilter, { time: 60000 });

                        factions.on('collect', async m => {

                            msg.delete(inicio)
                            var canal = message.guild.channels.cache.find(ch => ch.id === "826120607409373212");
                            message.delete().catch(O_o => { });
    
                            if (cooldown.has(message.author.id)) return message.channel.send(`${message.author}, você não pode usar o comando agora pois está em cooldown, tente novamente mais tarde!`)
    
                            if (author && author.id !== message.author.id)
                                return;
                            await message.author.createDM()
                            author = message.author.id;
                            if (author) {
                                await message.author.send("Qual a imagem do spoiler?\n(Upe no Imgur, ou use o link de imagem do discord)\nTempo de Resposta:`2 minutos`").catch(error => message.channel.send(`test`))
                                var collector = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000, max: 1 })
                                collector.on('collect', async c => {
                                    imagem = c.content;
                                    await message.author.send("Qual a descrição do spoiler atual?\nTempo de Resposta:`5 minutos`")
                                    var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                    collector2.on('collect', async c => {
                                        descricao = c.content;
                                        await message.author.send("Quantas reações necessárias para o próximo spoiler?\nTempo de Resposta:`5 minutos`")
                                        var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                        collector2.on('collect', async c => {
                                            quantidade = c.content;
    
                                                const msg = await canal.send(
                                                new Discord.MessageEmbed()
                                                .setTitle(`<:specter:826158146447474729> **Factions Caribe | Spoiler** <:specter:826158146447474729>`)
                                                .setThumbnail(message.author.displayAvatarURL)
                                                .setDescription(descricao)
                                                .addField(`<:seta:826158298830077993> Quantidade de reações:`,quantidade)
                                                .setImage(imagem)
                                                .setColor("#00ffff")
                                                .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
                                                .setTimestamp());
    
                                                await canal.send(`<@826120577265041468>`).then(msg => msg.delete({timeout: 10}));
    
                                                const emojis = ["💥"];
                                             
                                               for (const i in emojis) {
                                                 await msg.react(emojis[i])
                                               }
    
                                                    message.author.send(`${message.author}, seu **SPOILER** foi enviado com sucesso!`)
                                                    cooldown.add(message.author.id);
                                                    setTimeout(() => {
                                                        cooldown.delete(message.author.id);
                                                    }, 10 * 100000);
                                            })
                                        })
                                    })
                                }
                            })

                    rankup.on('collect', async m => {

                        msg.delete(inicio)
                        var canal = message.guild.channels.cache.find(ch => ch.id === "826120607409373212");
                        message.delete().catch(O_o => { });

                        if (cooldown.has(message.author.id)) return message.channel.send(`${message.author}, você não pode usar o comando agora pois está em cooldown, tente novamente mais tarde!`)

                        if (author && author.id !== message.author.id)
                            return;
                        await message.author.createDM()
                        author = message.author.id;
                        if (author) {
                            await message.author.send("Qual a imagem do spoiler?\n(Upe no Imgur, ou use o link de imagem do discord)\nTempo de Resposta:`2 minutos`").catch(error => message.channel.send(`test`))
                            var collector = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000, max: 1 })
                            collector.on('collect', async c => {
                                imagem = c.content;
                                await message.author.send("Qual a descrição do spoiler atual?\nTempo de Resposta:`5 minutos`")
                                var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                collector2.on('collect', async c => {
									descricao = c.content;
                                    await message.author.send("Quantas reações necessárias para o próximo spoiler?\nTempo de Resposta:`5 minutos`")
                                    var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                    collector2.on('collect', async c => {
										quantidade = c.content;

                                            const msg = await canal.send(
											new Discord.MessageEmbed()
                                            .setTitle(`<:specter:826158146447474729> **RankUP Lure | Spoiler** <:specter:826158146447474729>`)
                                            .setThumbnail(message.author.displayAvatarURL)
                                            .setDescription(descricao)
                                            .addField(`<:seta:826158298830077993> Quantidade de reações:`,quantidade)
                                            .setImage(imagem)
                                            .setColor("#00ffff")
                                            .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
                                            .setTimestamp());

                                            await canal.send(`<@826120578100232232>`).then(msg => msg.delete({timeout: 10}));

                                            const emojis = ["💵"];
                                         
                                           for (const i in emojis) {
                                             await msg.react(emojis[i])
                                           }

                                                message.author.send(`${message.author}, seu **SPOILER** foi enviado com sucesso!`)
                                                cooldown.add(message.author.id);
                                                setTimeout(() => {
                                                    cooldown.delete(message.author.id);
                                                }, 10 * 100000);
                                        })
                                    })
                                })
                            }
                        })

                    survival.on('collect', async m => {

                        msg.delete(inicio)
                        var canal = message.guild.channels.cache.find(ch => ch.id === "826120607409373212");
                        message.delete().catch(O_o => { });

                        if (cooldown.has(message.author.id)) return message.channel.send(`${message.author}, você não pode usar o comando agora pois está em cooldown, tente novamente mais tarde!`)

                        if (author && author.id !== message.author.id)
                            return;
                        await message.author.createDM()
                        author = message.author.id;
                        if (author) {
                            await message.author.send("Qual a imagem do spoiler?\n(Upe no Imgur, ou use o link de imagem do discord)\nTempo de Resposta:`2 minutos`").catch(error => message.channel.send(`test`))
                            var collector = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000, max: 1 })
                            collector.on('collect', async c => {
                                imagem = c.content;
                                await message.author.send("Qual a descrição do spoiler atual?\nTempo de Resposta:`5 minutos`")
                                var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                collector2.on('collect', async c => {
									descricao = c.content;
                                    await message.author.send("Quantas reações necessárias para o próximo spoiler?\nTempo de Resposta:`5 minutos`")
                                    var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                    collector2.on('collect', async c => {
										quantidade = c.content;

                                            const msg = await canal.send(
											new Discord.MessageEmbed()
                                            .setTitle(`<:specter:826158146447474729> **Survival Runes | Spoiler** <:specter:826158146447474729>`)
                                            .setThumbnail(message.author.displayAvatarURL)
                                            .setDescription(descricao)
                                            .addField(`<:seta:826158298830077993> Quantidade de reações:`,quantidade)
                                            .setImage(imagem)
                                            .setColor("#00ffff")
                                            .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
                                            .setTimestamp());

                                            await canal.send(`<@826120580133552220>`).then(msg => msg.delete({timeout: 10}));

                                            const emojis = ["⚔️"];
                                         
                                           for (const i in emojis) {
                                             await msg.react(emojis[i])
                                           }

                                                message.author.send(`${message.author}, seu **SPOILER** foi enviado com sucesso!`)
                                                cooldown.add(message.author.id);
                                                setTimeout(() => {
                                                    cooldown.delete(message.author.id);
                                                }, 10 * 100000);
                                        })
                                    })
                                })
                            }
                        })
					
                    minigames.on('collect', async m => {

                        msg.delete(inicio)
                        var canal = message.guild.channels.cache.find(ch => ch.id === "826120607409373212");
                        message.delete().catch(O_o => { });

                        if (cooldown.has(message.author.id)) return message.channel.send(`${message.author}, você não pode usar o comando agora pois está em cooldown, tente novamente mais tarde!`)

                        if (author && author.id !== message.author.id)
                            return;
                        await message.author.createDM()
                        author = message.author.id;
                        if (author) {
                            await message.author.send("Qual a imagem do spoiler?\n(Upe no Imgur, ou use o link de imagem do discord)\nTempo de Resposta:`2 minutos`").catch(error => message.channel.send(`test`))
                            var collector = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 120000, max: 1 })
                            collector.on('collect', async c => {
                                imagem = c.content;
                                await message.author.send("Qual a descrição do spoiler atual?\nTempo de Resposta:`5 minutos`")
                                var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                collector2.on('collect', async c => {
									descricao = c.content;
                                    await message.author.send("Quantas reações necessárias para o próximo spoiler?\nTempo de Resposta:`5 minutos`")
                                    var collector2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 1000000, max: 1 })
                                    collector2.on('collect', async c => {
										quantidade = c.content;

                                            const msg = await canal.send(
											new Discord.MessageEmbed()
                                            .setTitle(`<:specter:826158146447474729> **Minigames | Spoiler** <:specter:826158146447474729>`)
                                            .setThumbnail(message.author.displayAvatarURL)
                                            .setDescription(descricao)
                                            .addField(`<:seta:826158298830077993> Quantidade de reações:`,quantidade)
                                            .setImage(imagem)
                                            .setColor("#00ffff")
                                            .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
                                            .setTimestamp());

                                            await canal.send(`<@826120579156541491>`).then(msg => msg.delete({timeout: 10}));

                                            const emojis = ["🎮"];
                                         
                                           for (const i in emojis) {
                                             await msg.react(emojis[i])
                                           }

                                                message.author.send(`${message.author}, seu **SPOILER** foi enviado com sucesso!`)
                                                cooldown.add(message.author.id);
                                                setTimeout(() => {
                                                    cooldown.delete(message.author.id);
                                                }, 10 * 100000);
                                        })
                                    })
                                })
                            }
                        })
                    })

                })
            })
        })
    })
}

module.exports.help = {
    name: "spoiler"

}