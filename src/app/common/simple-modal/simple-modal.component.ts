import { Component, ElementRef, Inject, Input, OnInit , ViewChild} from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title!: string
  @Input() elementId!: string
  @Input() closeOnBodyClick!: string
  @ViewChild('modalcontainer') containerEl!: ElementRef
  // eventId: any
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit(): void {
  }
  closeModal(){
    if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
      this.$(this.containerEl.nativeElement).modal('hide')
    }

  }

}
