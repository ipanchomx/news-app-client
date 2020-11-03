import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './../../globals/services/noticias.service'

@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.scss']
})
export class TitularesComponent implements OnInit {

  noticiasArr: Array<any>;
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
  }

  sendData(): void {
    let idSelect: any  = document.getElementById('idSelect');

    let sourceValue = idSelect.options[idSelect.selectedIndex].value;

    console.log('Country: ',sourceValue);

    let input : string = '';

    if(sourceValue) input += `?country=${sourceValue}`;

    this.noticiasService.getTitutlares(input).then( data => {
      console.log(data);
      this.noticiasArr = data;
    }).catch((err) => {
      console.error(err);
    })

}

}