const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var bot = "546323875068379137";
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "❌ **Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!**"
    );
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.get(args[0]) ||
    message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol)
    return message.channel.sendd(
      "❌ **Herkese Rol Verebilmem İçin Bir Rol Etiketlemelisin!**"
    );

  const embed = new Discord.RichEmbed()
    .setDescription(`✅ **Herkese ${rol} Adlı Rol Verildi!**`)
    .setColor(rol.hexColor);

  message.guild.members.forEach(u => {
    u.addRole(rol);
  });
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["toplurolver", "herkeserolver"],
  permLevel: 0
};

exports.help = {
  name: "herkese-rol-ver",
  description: "Belirlenen Rolü Herkese Verir!",
  usage: "herkese-rol-ver <rol>"
};