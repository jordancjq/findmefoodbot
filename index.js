const Telegraf = require('telegraf')

const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT
const URL = process.env.URL

const app = new Telegraf(BOT_TOKEN)

app.start((ctx) => ctx.reply("Welcome to FindMeFood!"))
app.help((ctx) => ctx.reply("Commands available: just type '/' to find out more.\nFindMeFood Bot will respond to you."))

app.command('fmf', (ctx) => ctx.reply('Randomizing...'))
app.command('top', (ctx) => ctx.reply('Listing...'))
app.command('hot', (ctx) => ctx.reply('Finding...'))
app.command('nearby', (ctx) => ctx.reply("Locating..."))

app.on('text', (ctx) => {
    const userMessage = ctx.message.text
    return ctx.reply(`${ctx.message.from.username}: ${userMessage}`)
})

app.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`)
app.startWebhook(`/bot${BOT_TOKEN}`, null, PORT)
