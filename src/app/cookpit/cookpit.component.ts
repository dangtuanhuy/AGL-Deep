import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild(CookpitComponent) serverContentInput: ElementRef;
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    //  this.serverCreated.emit({
    //  serverName: nameInput.value,
    // serverContent: this.newServerContent });
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {

    this.bluePrintCreated.emit({
      serverName:  nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
