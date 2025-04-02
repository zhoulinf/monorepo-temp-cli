import { simpleGit, CleanOptions } from 'simple-git';
import fs from 'fs';
import path from 'path';

const git = simpleGit({
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
    trimmed: false,
})

// todo 改为配置化
const downloadTemplate = (name="test", url = 'https://github.com/zhoulinf/monorepo-temp-front.git') => {
    // todo 移除 .git 文件
    return git.clone(url, name).then(res=>{
        // 拼接 .git 文件夹的路径
        const gitFolderPath = path.join(process.cwd(), name, '.git');
        
        // 移除 .git 文件夹
        fs.rm(gitFolderPath, { recursive: true, force: true }, (err) => {
            if (err) {
                throw new Error("移除.git 文件失败")
            } else {
                return res;
            }
        });
    })
}


export {
    downloadTemplate
}