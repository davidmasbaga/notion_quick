require("dotenv").config();

const dataBaseId = process.env.NOTION_DATABASE_ID
const {Client} = require('@notionhq/client');



const notion = new Client({auth:process.env.NOTION_API_KEY})

async function addItem(Title, Description,Tag ) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: dataBaseId },
        properties: {
          "Name": {
            "title": [
              {
                "type": "text",
                "text": {
                  "content": Title
                }
              }
            ]
          },
          "Description": {
            "rich_text": [
              {
                "type": "text",
                "text": {
                  "content":  Description
                }
              }
            ]
          },
          "Tags": {
            "multi_select": [
              {
                "name":  Tag
              }
            ]
          }
        },
      });
      console.log(response);
      console.log("Success! Entry added.");
    } catch (error) {
      console.error(error.body);
    }
  }

addItem('David','Antonio',"Pedro")