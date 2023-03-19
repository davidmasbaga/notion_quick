require("dotenv").config();
const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json()
const {Client} = require('@notionhq/client');
const { json } = require("body-parser");


const port = process.env.PORT

const notion = new Client({auth:process.env.NOTION_API_KEY})
const dataBaseId = process.env.NOTION_DATABASE_ID





app.post('/submitToNotion', jsonParser, async(req,res)=>{
    const name = req.body.name;
    const description = req.body.description;
    const tag = req.body.tag
    console.log(name)
    console.log(req.body)
    try {
        const response = await notion.pages.create({
            parent: {database_id:dataBaseId},
            properties:{
                "Name":{
                    title:[
                        {
                            text:{
                                content: name
                            }
                        }
                    ]
                },
                "Description":{
                    rich_text:[
                        {
                            text:{
                                content:description
                            }
                        }
                    ]
                },
                "Tags": {
                    "multi_select": [
                      {
                        "name":tag
                      }
                    ]
                  }

            }
        })
        console.log(response);
        console.log("SUCCESS!")
        
    } catch (error) {
        console.log(error)
        
    }
})



app.use(cors());





const server = app.listen(port, () => {
    console.log(`Server is up and running at port ${port} ⚡`);
  });