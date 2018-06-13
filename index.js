const Telegraf = require('telegraf')

const BOT_TOKEN = process.env.BOT_TOKEN

const app = new Telegraf(BOT_TOKEN)

app.start((ctx) => ctx.reply("Welcome to FindMeFood!"))
app.help((ctx) => ctx.reply("Commands available: /fmf"))

app.command('fmf', (ctx) => ctx.reply('Randomizing...'))
app.command('top', (ctx) => ctx.reply('Listing...'))
app.command('nearby', (ctx) => ctx.reply('Finding...'))

app.startPolling()
