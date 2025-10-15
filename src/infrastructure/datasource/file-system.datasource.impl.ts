import fs from "node:fs";
import { LogDataSource } from "../../domain/datasource/log.datasource"
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class FileSystemDataSourceImpl implements LogDataSource {

    private readonly logPath = 'logs/';
    private readonly allLogPath = 'logs/logs-all.log';
    private readonly mediumLogPath = 'logs/logs-medium.log';
    private readonly highLogPath = 'logs/logs-high.log';


    constructor() {
        this.createLogFiles();
    }

    private createLogFiles = () => {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath);
        }
        [this.allLogPath, this.mediumLogPath, this.highLogPath].forEach(path => {
            if (!fs.existsSync(path)) { fs.writeFileSync(path, '') }
        })
    }


    private getAllLogsByType = (path:string): LogEntity[]=> {
        const content = fs.readFileSync(path, 'utf-8');
        const logs = content.split('\n').map(log => LogEntity.fromJSON(log))      
        return logs;
    }


    async saveLog(log: LogEntity): Promise<void> {
        const logJSON = `${JSON.stringify(log)}\n`
        fs.appendFileSync(this.allLogPath, logJSON)
        if (log.level === LogSeverityLevel.medium) {
            fs.appendFileSync(this.mediumLogPath, logJSON)
        } else if (log.level === LogSeverityLevel.high) {
            fs.appendFileSync(this.highLogPath, logJSON)
        }

    }
   async getLogs(logSeverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
       switch(logSeverityLevel) {
        case LogSeverityLevel.low : return this.getAllLogsByType(this.allLogPath);
        case LogSeverityLevel.medium : return this.getAllLogsByType(this.mediumLogPath);
        case LogSeverityLevel.high : return this.getAllLogsByType(this.highLogPath);
        default: throw new Error(`${logSeverityLevel} is not implemented`)
       }
    }


}