import { simpleGit, CleanOptions } from 'simple-git';

const git = simpleGit(({ method, stage, progress }) =>{
    console.log(`git.${method} ${stage} stage ${progress}% complete`);
}) 

git.clean(CleanOptions.FORCE);


const downloadTemplate =(name,url='https://github.com/zhoulinf/monorepo-temp-front.git')=>{
    return git.clone(url,name,{
        branch:"main",
        checkout: false, // 是否自动检出分支
    })
}


export {
    downloadTemplate
}