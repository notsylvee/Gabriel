const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 500;
        const taunts = [
          "You defy the light!",
          "A mere object!",
          "There can be only light!",
          "Foolishness, machine. Foolishness.",
          "An imperfection to be cleansed...",
          "Not. Even. Mortal.",
          "You are less than nothing.",
          "You're an error to be corrected!",
          "The light IS perfection!",
          "You are outclassed!",
          "Your crime is existence!",
          "You make even the DEVIL CRY!",
          "IS THIS WHAT I LOST TO!?",
          "YOU'RE GETTING RUSTY, MACHINE!",
          "LET'S SETTLE THIS!",
          "NOTHING BUT SCRAP!",
          "I'LL SHOW YOU DIVINE JUSTICE!",
          "TIME TO RIGHT MY WRONG!",
          "YOU NEED. MORE. POWER!",
          "I've never had a fight like this before!",
          "Show me what you were made for!",
          "Now THIS is a fight worthy of God's Will!",
          "What is this FEELING?",
          "Come get some BLOOD!",
          "Come on, machine! Fight me like an ANIMAL!",
          "I'll show you TRUE splendor!"
        ];
        const taunt = taunts[Math.floor(Math.random() * taunts.length)];
        if (chance < 497) {
            return;
          } else {
            message.channel.send(`${taunt}`);
          };
    },
};