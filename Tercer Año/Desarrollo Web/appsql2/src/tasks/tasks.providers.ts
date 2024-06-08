import { DataSource } from "typeorm";
import { Task } from "./entities/task.entity";

export const taskProviders = [
    {
        provide: 'TASKS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
        inject: ['DATA_SOURCE']
    }
]