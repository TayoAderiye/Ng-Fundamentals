import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.css']
})
export class UpVoteComponent implements OnInit {
  @Input() count!: number
  @Input() set voted (val: any){
    this.iconColor = val ? 'red' : 'white'
  }
  @Output() vote = new EventEmitter()
  iconColor!: string
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.vote.emit({})
  }

}
