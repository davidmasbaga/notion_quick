# notion_quick
## Configure the project
- Install dependencies on main folder: **npm i** 

## Create a data base in notion and link it to your api data
- Visit: https://www.notion.so/my-integrations
- Create a New Integration: + New Integration 
- Fill in all data
- Copy your secret Token: secret_...
- ![image](https://user-images.githubusercontent.com/79333401/226271605-11640d90-0577-4601-8a13-ff2aa1058df2.png)
- On your server folder, create a .env file and write 3 dependencie vars: NOTION_API_KEY,NOTION_DATABASE_ID,PORT
- Use your notion token in NOTION_API_KEY
- Now navigate to your notion. Create a new database with the headers: Name, Description(type:text) and Tags(type:Multi-select). 
- In notion Copy the ID of your database(remember you have to be INSIDE of your database(image). It's the code between notion.so/ and ?v=... For example https://www.notion.so/YOUR_ID_DATABASE?v=111111111111
- ![image](https://user-images.githubusercontent.com/79333401/226272604-5ee06d9a-ed77-4c8b-82ec-f16b0d9e2f58.png)
- Pase your ID database in your .dev file in NOTION_DATABASE_ID
- Choose the port you want. In my case I write 3001
- Now you just have to link your database with your api. To do this in notion, inside your database click on the 3 dots on the top right margin. In the menu, at the bottom you will see the option connections. Choose the integration you created in the second step.

## Use Notes to notion
- In the project file, go to server folder and run the server writting in terminal: npm start
- In the project file, go to frontend folder and run the client side writting in terminal: npm run dev



