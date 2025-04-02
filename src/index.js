#!/usr/bin/env node
import { Command } from 'commander';
import {commandConfigs} from './commands/index.js'

const program = new Command()

program.version(`monorepo-temp-cli: 123`, "-v, --version", "当前脚手架版本")

commandConfigs.forEach(config => {
    const currentCommand = program.command(config.command).description(config.description)
    if (config.argumentList.length) {
        config.argumentList.forEach(argument => {
            currentCommand.argument(argument.argument, argument.description, argument.transformParams, argument.default)
        });
    }
    if (config.arguments) {
        currentCommand.arguments(config.arguments)
    }
    currentCommand.action(config.action)
})

program.parse(process.argv)