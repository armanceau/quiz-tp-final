import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { CathegorieService } from '../shared/services/cathegorie.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false,
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categorieID = 0;
  categorieName = '';

  constructor(
    private quizService: QuizService,
    private categoriesService: CathegorieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.quizService.categorieID = params['categorieID'];
      this.quizService.getQuizContentByCategorie();

      this.categoriesService
        .getNameCategoryById(params['categorieID'])
        .subscribe((categoryName: string) => {
          this.categorieName = categoryName;
        });
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
