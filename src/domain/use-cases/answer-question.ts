import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";
import { UniqueEntityId } from './../../core/entities/unique-entity-id';

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) { }

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId)
    })

    await this.answerRepository.create(answer)

    return answer
  }
}