const {chromium} = require('playwright');

(async() =>
{
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://todomvc.com/examples/react/dist/')
    await page.screenshot({path:`todo.png`})
    await browser.close()
}) ()

//Para executar node nomeArquivo.js