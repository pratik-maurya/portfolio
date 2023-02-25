import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLink(){
          const list =document.querySelectorAll('.list')
            list.forEach((item)=>
            item.classList.remove('active'));
            // this.classList.add('active');
            list.forEach((item)=>
            item.addEventListener('click',this.activeLink));
        }
}
