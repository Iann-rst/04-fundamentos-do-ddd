import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { AnswersRepository } from '../repositories/answers-repository'
import { AnswerComment } from './../../enterprise/entities/answer-comment'

interface CommentOnAnswerUseCaseRequest {
  answerId: string
  authorId: string
  content: string
}

interface CommentOnAnswerUseCaseResponse {
  answerComment: AnswerComment
}

export class CommentOnAnswerUseCase {
  constructor(
    private answersRepository: AnswersRepository,
    private answerCommentsRepository: AnswerCommentsRepository,
  ) {}

  async execute({
    authorId,
    content,
    answerId,
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    // Criar o comentário da pergunta
    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityId(authorId),
      content,
      answerId: new UniqueEntityId(answerId),
    })

    // Salva no BD
    await this.answerCommentsRepository.create(answerComment)

    return {
      answerComment,
    }
  }
}
