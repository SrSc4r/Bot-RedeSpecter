const Discord = require('discord.js')

module.exports = (client) => {

    
  let embed = new Discord.MessageEmbed()

  .setThumbnail(`https://i.imgur.com/vCovRnQ.png`)
  .setColor('#00ffff')
  .setTitle(`<a:spectergif:826158305197293639> **CONFIRMAÇÃO DE CLANS** <a:spectergif:826158305197293639>`)
  .setDescription(`- Bom dia pessoal, se vocês possuírem clans focados em RankUP, e queiram confirmá-lo para a jogatina em nosso servidor, basta criar um ticker informando: [TAG] Nome do Clan.\n\n**PREMIAÇÕES:**\n\n- Caso seu clan possua uma certa quantidade de reações na confirmação receberá diferentes prêmios:\n\n<:seta:826158298830077993> 10 reações = 2x <@&826120565882093588>;\n<:seta:826158298830077993> 20 reações = 4x <@&826120565882093588>;\n<:seta:826158298830077993> 30 reações = 6x <@&826120565882093588>;\n<:seta:826158298830077993> 40 reações = 6x <@&826120565882093588> | 1x <@&826120565114142730>;\n<:seta:826158298830077993> 50 reações = 6x <@&826120565882093588> | 3x <@&826120565114142730> + Cupom 10% OFF;\n<:seta:826158298830077993> 60 reações = 6x <@&826120565882093588> | 5x <@&826120565114142730> + Cupom 20% OFF;\n<:seta:826158298830077993> 70 reações = 6x <@&826120565882093588> | 6x <@&826120565114142730> | 2x <@&826120564397703229> + Cupom 30% OFF;\n<:seta:826158298830077993> 80 reações = 6x <@&826120565882093588> | 6x <@&826120565114142730> | 4x <@&826120564397703229> + Cupom 40% OFF;\n<:seta:826158298830077993> 90 reações = 6x <@&826120565882093588> | 6x <@&826120565114142730> | 6x <@&826120564397703229> | 2x <@&826120563582959616> + Cupom 50% OFF;\n<:seta:826158298830077993> +100 reações = 6x <@&826120565882093588> | 6x <@&826120565114142730> | 6x <@&826120564397703229> | 5x <@&826120563582959616> | 1x <@&826120562845810720> + Cupom 65% OFF;\n\n- Caso o servidor tenha em média 15 clans confirmados, e mais de 150 jogadores diários, será entregue uma recompensa em dinheiro para os top clans (1º, 2º, 3º lugares).\n🥇 1º Lugar - R$100,00\n🥈 2º Lugar - R$50,00\n🥉 3º Lugar - R$25,00\n\nAtenciosamente,\nMaster Lucas.`)
  .setFooter(`©️ Rede Specter | 2021`);

client.channels.cache.get("826120638036967504").messages.fetch("826167562218766346").then(msg => msg.edit(embed));

}