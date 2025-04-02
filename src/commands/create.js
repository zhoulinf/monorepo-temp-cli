import inquirer from 'inquirer'
import { downloadTemplate } from '../libs/download.js'

const action = ()=>{
    inquirer.prompt([
        {
            name:"name",
            message:"请输入项目描述"
        },{
            name:"author",
            message:"请输入作者名称",
            
        }
    ]).then(answers=>{
        downloadTemplate(answers.name)
    })
}

export{
    action
}