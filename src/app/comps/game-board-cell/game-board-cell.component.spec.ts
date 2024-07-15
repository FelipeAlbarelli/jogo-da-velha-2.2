import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardCellComponent } from './game-board-cell.component';

describe('GameBoardCellComponent', () => {
  let component: GameBoardCellComponent;
  let fixture: ComponentFixture<GameBoardCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBoardCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
