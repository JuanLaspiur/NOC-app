import { CronJob } from 'cron';

// adapter pattern

type createJobProps = {
    cronTime: string;
    onTick: () => void;
    onComplete?: (() => void) | null;
    start?: boolean;
    timeZone?: string;
}

export class CronService {

    static createJob(props: createJobProps): CronJob {
        const job = new CronJob(props.cronTime, props.onTick, props.onComplete, props.start, props.timeZone);
        job.start()
        return job;
    }
}