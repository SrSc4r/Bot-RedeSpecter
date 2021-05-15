const Discord = require('discord.js')

module.exports = (client) => {

    
  let embed = new Discord.MessageEmbed()

  .setThumbnail(`https://i.imgur.com/vCovRnQ.png`)
  .setColor('#00ffff')
  .setTitle(`<a:spectergif:826158305197293639> **CONFIRMAÇÃO DE FACÇÕES** <a:spectergif:826158305197293639>`)
  .setDescription(`- Bom dia pessoal, se vocês possuírem facções focadas em Factions, e queiram confirmá-la para a jogatina em nosso servidor, basta criar um ticket informando: [TAG] Nome da Facção.\n\n**PREMIAÇÕES:**\n\n- Caso sua facção possua uma certa quantidade de reações na confirmação receberá diferentes prêmios:\n\n<:seta:826158298830077993> 10 reações = 2x <@&826120571610726400>;\n<:seta:826158298830077993> 20 reações = 4x <@&826120571610726400>;\n<:seta:826158298830077993> 30 reações = 6x <@&826120571610726400>;\n<:seta:826158298830077993> 40 reações = 6x <@&826120571610726400> | 1x <@&826120570730971197>;\n<:seta:826158298830077993> 50 reações = 6x <@&826120571610726400> | 3x <@&826120570730971197> + Cupom 10% OFF;\n<:seta:826158298830077993> 60 reações = 6x <@&826120571610726400> | 5x <@&826120570730971197> + Cupom 20% OFF;\n<:seta:826158298830077993> 70 reações = 6x <@&826120571610726400> | 6x <@&826120570730971197> | 2x <@&826120569413697578> + Cupom 30% OFF;\n<:seta:826158298830077993> 80 reações = 6x <@&826120571610726400> | 6x <@&826120570730971197> | 4x <@&826120569413697578> + Cupom 40% OFF;\n<:seta:826158298830077993> 90 reações = 6x <@&826120571610726400> | 6x <@&826120570730971197> | 6x <@&826120569413697578> | 2x <@&826120568901599243> + Cupom 50% OFF;\n<:seta:826158298830077993> +100 reações = 6x <@&826120571610726400> | 6x <@&826120570730971197> | 6x <@&826120569413697578> | 5x <@&826120568901599243> | 1x <@&826120567454564394> + Cupom 65% OFF;\n\n- Caso o servidor tenha em média 15 facções confirmadas, e mais de 150 jogadores diários, será entregue uma recompensa em dinheiro para os top facção (1º, 2º, 3º lugares).\n🥇 1º Lugar - R$100,00\n🥈 2º Lugar - R$75,00\n🥉 3º Lugar - R$50,00\n\nAtenciosamente,\nMaster Lucas.`)
  .setFooter(`©️ Rede Specter | 2021`);

client.channels.cache.get("826120639093801022").messages.fetch("826167987962511401").then(msg => msg.edit(embed));

}