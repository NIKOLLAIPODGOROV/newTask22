import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {QuestionType} from "../types/question.type";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private readonly questions: QuestionType[] = [
    {
      id: 1,
      question: 'Собираете ли вы подарочные боксы?',
      answer: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
    },
    {
      id: 2,
      question: ' Сколько у вас разновидностей чая?',
      answer: `Красный чай. Чай, который европейцы называют черным чаем. Самый понятный и привычный чай для русского
        человека. Ароматный, терпкий, согревающий.
        Зеленый чай. Богат витаминами, отлично охлаждает в жару. Свежий, яркий вкус.
        Белый чай. Самый задумчивый чай. Подходит под чтение книги или интересную беседу.
        Улун. Улунов существует великое множество, о них будет подробнее ниже.`,
    },
    {
      id: 3,
      question: 'В какой срок осуществляется доставка?',
      answer: `Время доставки зависит от Вашего города. В Москве и Санкт-Петербурге срок доставки 1-2 дня. В другие города
        5-7 дней.`,
    },
    {
      id: 4,
      question: 'У вас обновляется ассортимент?',
      answer: 'Да. Наш ассортимент обновляется каждые 6 месяцев.',
    },
    {
      id: 5,
      question: 'Какого объема у вас пачки чая?',
      answer: 'Мы упаковываем наш чай в пачки объемом по 100, 250 и 500 грамм.',
    },
  ]
  private questions$ = new BehaviorSubject<QuestionType[]>(this.questions);
  constructor() { }
  get allQuestions(): QuestionType[] {
    return this.questions$.getValue();
  }
}

