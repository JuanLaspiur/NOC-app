import { LogDataSource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {

    constructor(private readonly datasource: LogDataSource) {
    }

    saveLog(log: LogEntity): Promise<void> {
        return this.datasource.saveLog(log);
    }
    getLogs(logSeverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.datasource.getLogs(logSeverityLevel);
    }

}