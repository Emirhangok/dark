const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Dark List Eğlence Komutları')
.setTimestamp()
.addField(' !ilginçbilgi', 'İlginç bilgi verir')
.addField(' !kartopu', 'Karopu Atarsın')
.addField(' !oylama', 'Oylama Yaparsınız')
.addField(' !espri', 'Espri Yaparsınız')
.addField(' !adamasmaca', 'Adam Asmaca oynarsınız')
.addField(' !emojiekle', 'Emoji Ekler')
.setFooter('Dark list', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};