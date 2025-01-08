import {Component, NgModule, OnDestroy} from '@angular/core';
import {
  NgbAccordionModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModal,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../../services/product.service";
import {QuestionsService} from "../../../services/questions.service";
import {QuestionType} from "../../../types/question.type";
import {PopupComponent} from "../../common/popup/popup.component";


@Component({
  selector: 'main',
  templateUrl: './main.component.html',
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

