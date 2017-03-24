import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = 
    new EventEmitter<string>(); 

    ngOnChanges(): void {
        this.starWidth = this.rating * 85 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit('The rating ' + this.rating + 'was clicked');
    }
}
