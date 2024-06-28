
describe('Saucedemo Login Test', () => {
    it('User Success Login', async () => {
        await browser.url('https://www.saucedemo.com/')
        
        // element definition
        const usernameTextbox = await browser.$('#user-name')
        const passwordTextox = await browser.$('#password')
        const loginButton = await browser.$('//input[@value="Login"]')
        const productInventory = await browser.$('#inventory_container')
        
        
        // login page
        await usernameTextbox.setValue("standard_user")
        await passwordTextox.setValue("secret_sauce")
        console.log(await loginButton.getValue())
        await loginButton.click()
        
        // dashboard page
        await expect(productInventory).toBeDisplayed()
                
    });

});

describe('Add item to cart', () => {
    it('Item Successfully Added', async () => {
        await browser.url('https://www.saucedemo.com/inventory.html')

        const backpackAddTocart = await browser.$('#add-to-cart-sauce-labs-backpack')
        const cartIcon = await browser.$('#shopping_cart_container')
        const cartItem = await browser.$('//*[@id="cart_contents_container"]/div/div[1]/div[3]')


        await backpackAddTocart.click()
        await cartIcon.click()
        await expect(cartItem).toBeDisplayed()

        await browser.pause(3000)
        
    });
    
});