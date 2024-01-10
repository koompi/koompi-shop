const { Telegraf, Scenes } = require("telegraf");

const { message } = require("telegraf/filters");

const bot = new Telegraf();
bot.launch();

bot.command("inline", (ctx) => {
  ctx.reply("Hi there!", {
    reply_markup: {
      inline_keyboard: [
        /* Also, we can have URL buttons. */
        [
          {
            text: "Open in browser",
            url: "https://dpcszd-5173.csb.app/",
          },
        ],
      ],
    },
  });
});

bot.command("hello", async (ctx) => {
  // await ctx.replyWithPhoto({
  //   url: "https://images.unsplash.com/photo-1703701008461-ce64767019d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   caption: "Hello there! How are you doing today?",
  // });
  await ctx.replyWithHTML("Hello there! <b>How are you doing today?</b>");

  // await ctx.replywith(
  //   "Choose an option:",
  //   Keyboard.inline([["Option 1"], ["Option 2"]])
  // );
});
// bot.start((ctx) => {
//   ctx.reply("Hello! I am your new telegram bot. How can I help you today?");
// });

bot.help((ctx) => {
  ctx.reply("Send /start to receive a greeting");
  ctx.reply("Send /keyboard to receive a message with a keyboard");
  ctx.reply("Send /quit to stop the bot");
});

// bot.command("quit", async (ctx) => {
//   // Using context shortcut
//   await ctx.leaveChat();
// });

bot.on(message(), (ctx) => {
  return ctx.replyWithHTML(`<b>Welcome to Riverbase!</b>

Create your own ecommerce website effortlessly.

Empowers emerging entrepreneurs and businesses through seamless digital store platform.

Click t.me/riverbase_bot to get started.
`);
});

// // Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
