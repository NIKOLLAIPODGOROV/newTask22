import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {NgbAccordionModule, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../../services/product.service";
import {QuestionsService} from "../../../services/questions.service";
import {QuestionType} from "../../../types/question.type";
import {PopupComponent} from "../../common/popup/popup.component";
import {RouterLinkWithHref} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None,
//  standalone: true,

})
export class MainComponent implements OnDestroy {
  private timerPopup = setTimeout(() => {
    this.modalService.open(PopupComponent, {centered: true})
  }, 10000);
  public questions: QuestionType[] = this.questionService.allQuestions;

  constructor(private modalService: NgbModal,
              private questionService: QuestionsService,
              private productService: ProductService) {
  }

  ngOnDestroy() {
    clearTimeout(this.timerPopup);
    this.modalService.dismissAll();
  }

  public goToCatalogue(): void {
    this.productService.setSearchTitle('');
  }
}

