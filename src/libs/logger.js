import chalk from 'chalk'


class Logger {
    info(message){
        const info = chalk.bold.gray;
        console.info(info("【info】"),message)
    }

    success(message){
        const success = chalk.bold.green;
        console.info(success("【success】",message))
    }

    error(message){
        const error = chalk.bold.red;
        console.info(error("error"),message)
    }

    warning(message){
        const warning = chalk.bold.yellow;
        console.info(warning("【warning】",message))
    }
}




export default new Logger()