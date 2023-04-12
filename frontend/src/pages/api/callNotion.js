const {Client} = require('@notionhq/client');
import {getSession} from 'next-auth/react'
// const { json } = require("body-parser");

const notion = new Client({auth:process.env.NOTION_API_KEY})
const dataBaseId = process.env.NOTION_DATABASE_ID


const callNotion = async(req,res)=>{
    const session = await getSession()
    console.log(session)

    const name = req.body.name;
    const description = req.body.description;
    const tag = req.body.tag
    
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
        // console.log(response);
        console.log("SUCCESS!")
        
    } catch (error) {
        console.log(error)
        
    }
}


export default callNotion

