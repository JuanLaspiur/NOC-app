import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSourceImpl } from "../infrastructure/datasource/file-system.datasource.impl";
import { LogRepositoryImpl } from "../infrastructure/repository/log.repository.impls";
import { CronService } from "./cron/cron-service";



const fileSystemRepostoty = new LogRepositoryImpl(new FileSystemDataSourceImpl());



export class Server {
    public static start() {

        CronService.createJob({
           cronTime: '*/5 * * * * *',
            onTick:()=>{
               new CheckService(fileSystemRepostoty).execute('http://localhost:3000/posts')
            },
            timeZone :'America/Argentina/Buenos_Aires'},

        )
            
    }
}
