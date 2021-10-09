const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Yardım Komutları')
.setTimestamp()
.addField(' !moderasyon', 'Moderasyon Komutları')
.addField(' !eğlence', 'Eğlence Komutları')
.addField(' !aboneyardım', 'Abone Rol Komutları')
.addField(' !botlistyardım', 'Botlist Komutları')
.addField(' !yönetim', 'Sunucuyu Yönetmek için gerekli olan komutlar')

.setFooter('Dark Botlist', client.user.avatarURL())
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
