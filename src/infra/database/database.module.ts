import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notifications-repositoreis';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repositories';


@Module({
    providers: [
        PrismaService,
        {
            provide: InMemoryNotificationsRepository,
            useClass: PrismaNotificationRepository
        }
    ],
    exports: [
        NotificationRepository
    ]
})
export class DatabaseModule {}