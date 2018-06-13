const Telegraf = require('telegraf')

const app = new Telegraf(process.env.BOT_TOKEN)

app.start((ctx) => ctx.reply("Welcome to FindMeFood!"))
app.help((ctx) => ctx.reply("Commands available: /fmf"))

app.command('fmf', (ctx) => ctx.reply('Randomizing...'))
app.command('top', (ctx) => ctx.reply('Listing...'))
app.command('nearby', (ctx) => ctx.reply('Finding...'))

app.on('text', (ctx) => {
    const userMessage = ctx.message.text
    return ctx.reply(`${ctx.message.from.username}: ${userMessage}`)
})

app.startPolling()
