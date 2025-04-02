import inquirer from 'inquirer'
import fs from 'fs'
import ora from 'ora'
import logger from '../libs/logger.js'
import { downloadTemplate } from '../libs/download.js'

const action = ()=>{
    inquirer.prompt([
        {
            name:"name",
            message:"请输入项目名称"
        }
        // todo 依照模板更改 package.json 文件内容，如author等
    ]).then(answers=>{
        if(fs.existsSync(answers.name)){
            logger.error('文件名已存在')
            return 
        }
        const spin = ora('模板拉取中').start();
        downloadTemplate(answers.name).then(res=>{
            spin.stop();
            logger.success('创建成功')
        })
    })
}

export{
    action
}