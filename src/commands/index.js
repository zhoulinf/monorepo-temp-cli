import * as create from './create.js'

/**
 * commandConfigs 数组包含了一组命令配置，每个命令配置对象描述了一个可用的命令及其相关信息。
 * 每个命令配置对象包括命令的名称、描述、执行的动作、接受的参数和参数的转换等信息。
 *
 * @type {Array<{
*   command: string,               // 命令的名称，用户输入的命令
*   description: string,           // 命令的简要描述，说明该命令的功能
*   action: function,              // 执行该命令时调用的动作，通常是一个函数
*   arguments: string,             // 命令接受的参数（如果没有参数，通常为''）
*   argumentList: Array<{          // 命令的参数列表，数组中的每个对象表示一个参数
*     argument: string,            // 参数名称，通常用尖括号包裹表示必填
*     description: string          // 参数的简要描述，说明该参数的作用
*     default: any                 // 默认值
*     transformParams: ?function   //一个命令行参数的转换函数
*   }>,
*   transformParams: function|null // 可选的参数转换函数，用于对输入参数进行处理（如果为空则不做处理）
* }> }
*/

const commandConfigs = [
    {
        command:"create",
        description:"创建一个模板项目",
        action:create.action,
        arguments:'',
        argumentList:[
            // {
            //     argument:'<name>',
            //     description:"项目名称"
            // }
        ],
        transformParams:null
    }
]


export {
    commandConfigs
}