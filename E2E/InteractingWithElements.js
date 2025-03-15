const {chromium} = require('playwright');

(async() =>
{
    const browser = await chromium.launch({headless:false, slowMo: 500})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.fill('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"', { position: { x: 0, y: 0}, button: 'left', modifiers: ['Shift'], force: true, timeout: 45000})
    await page.dblclick('form >> "Sign in"')
    await page.focus('form >> "Sign in"')

}) ()


(async() =>
{
    const browser = await chromium.launch({headless:false, slowMo:500})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('http://todomvc.com/examples/react/#/')

    await page.fill('.new-todo', 'Task_1')
    await page.press('.new-todo', 'Enter')

    await page.fill('.new-todo', 'Task_2')
    await page.press('.new-todo', 'Enter')

    await page.check('.toggle')
    
    const elements = await page.$$('.toggle')
    elements.forEach(element => element.check())
    
}) ()