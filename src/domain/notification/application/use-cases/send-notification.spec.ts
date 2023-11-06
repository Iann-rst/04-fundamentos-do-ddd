import { InMemorySendNotificationRepository } from 'test/repositories/in-memory-send-notification-repository'
import { SendNotificationUseCase } from './send-notification'

let inMemorySendNotificationRepository: InMemorySendNotificationRepository
let sut: SendNotificationUseCase

describe('Send Notification', () => {
  beforeEach(() => {
    inMemorySendNotificationRepository =
      new InMemorySendNotificationRepository()
    sut = new SendNotificationUseCase(inMemorySendNotificationRepository)
  })

  it('Should be able to create a notification', async () => {
    const notification = await sut.execute({
      content: 'Conteúdo da notificação',
      title: 'Titulo da notificação',
      recipientId: '1',
    })

    expect(notification.isRight()).toBe(true)
    expect(inMemorySendNotificationRepository.items[0]).toEqual(
      notification.value?.notification,
    )
  })
})
