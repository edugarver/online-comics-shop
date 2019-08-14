# scc-homework-senior-qre

This is the web app. It was done using React and it's accessible in [https://edugarver-scc-homework-senior-qre.netlify.com/](https://edugarver-scc-homework-senior-qre.netlify.com/)

### deploy locally
Checkout the project, and in the app folder execute:
> `npm start`
This will start the application in [http://localhost:3000](http://localhost:3000)

### ci/cd
With every code change, netlify will deploy the app in the previously mentioned URL, and it will reflect the changes

### data persistence
The app uses local storage for data persistence (for placed orders, mostly).

### user flow
The homescreen displays all the products that can be purchased.
Clicking on the cart button on the card's footer (1), the product will be added to the cart.
The icon will then change to show that the product is 'In Cart' (2).
Clicking on the 'My Cart' button, on the top right corner, will display the shopping cart.
![screenshot1](https://user-images.githubusercontent.com/28511092/63047353-95f95380-bed4-11e9-8e23-43761deb4ac3.png)

In the shopping cart, product information is displayed, as well as a 'Remove' button (4) that will remove the product from the cart.
'Clear cart' will remove all products from the cart, while 'Place order' will continue with the shopping process
![screenshot2](https://user-images.githubusercontent.com/28511092/63047359-985bad80-bed4-11e9-9b74-89048331c486.png)

After clicking the 'Place order' button, we will get the message that the order was successfully placed, as well as the 'Order ID' (5)
![screenshot3](https://user-images.githubusercontent.com/28511092/63047363-998cda80-bed4-11e9-8b22-bd8a3f498302.png)

Clicking in the 'Orders' link in the navbar (6) will display the Orders page. In here, we can filter the orders by the Order ID, typing it in the search field (7), as we as cancel the order by clicking on the 'Remove' button (8).
![screenshot4](https://user-images.githubusercontent.com/28511092/63047368-9bef3480-bed4-11e9-826b-e9b41aa41aaf.png)

Clicking on that button will remove the order and show us a message stating that the order was successfully deleted
![screenshot5](https://user-images.githubusercontent.com/28511092/63047374-9db8f800-bed4-11e9-93a6-6c2de517e593.PNG)
