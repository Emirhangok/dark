const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Dark List bot Moderasyon Komutları')
.setTimestamp()
.addField(' !ban', 'Ban atarsınız')
.addField(' !byetkilirol', 'Ban yetkilirol ayarlar')
.addField(' !banlog', 'Banlog ayarlar')
.addField(' !rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField(' !reklamengel', 'Reklam Engel ayarlar')
.addField(' !everhereengel', 'Ever Here Engel ayarlar')
.addField(' !capsengel', 'Capsengel ayarlar')
.addField(' !kick', 'Kick Atarsınız')
.addField(' !afk', 'Afk Sistemi')
.addField(' !userinfo', 'Kullanıcı Bilgi')
.addField(' !kicklog', 'Kick Logunu Ayarlarsınız')
.setFooter('Dark List', client.user.avatarURL())
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};