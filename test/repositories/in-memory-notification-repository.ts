import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export class InMemoryNotificationRepository implements NotificationsRepository {
  public items: Notification[] = []

  async create(notification: Notification): Promise<void> {
    this.items.push(notification)
  }

  findById(id: string): Promise<Notification | null> {
    throw new Error('Method not implemented.')
  }

  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
