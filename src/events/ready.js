const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setPresence({
      status: "idle",
      activities: [
        {
          type: ActivityType.Custom,
          name: "customstatus",
          state: "BEHOLD! THE POWER OF AN ANGEL!",
        },
      ],
    });

    const updates = await client.channels.fetch("1344570100589662268");
    updates.send("I am now online/have been updated!");
  },
};