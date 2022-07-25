require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let photos = [];
let contacts = [];

function update() {
  fetch(
    `https://discord.com/api/channels/${process.env.DISCORD_PHOTOS_CHANNEL}/messages`,
    {
      headers: {
        authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .then((messages) => {
      photos = messages;
    });

  fetch(
    `https://discord.com/api/channels/${process.env.DISCORD_CONTACTS_CHANNEL}/messages`,
    {
      headers: {
        authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .then((messages) => {
      contacts = messages;
    });
}

update();
setInterval(update, 1000 * 60);

module.exports = () => ({ photos, contacts });
