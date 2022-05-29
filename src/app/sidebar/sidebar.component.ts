import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isActive: boolean = true;
  @Output() secondarySideOpen: EventEmitter<boolean> = new EventEmitter();

  isSecondarySideOpen: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.isSecondarySideOpen = !this.isSecondarySideOpen;
    this.secondarySideOpen.emit(this.isSecondarySideOpen);
  }

}

