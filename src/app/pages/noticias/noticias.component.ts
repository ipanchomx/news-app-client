import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './../../globals/services/noticias.service'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticiasArr: Array<any>;
  constructor(private noticiasService: NoticiasService) { }


  ngOnInit(): void {
    let idSources: any  = document.getElementById('idSources');
    let idTextarea: any = document.getElementById('idTextarea');

    console.log(idSources)
    console.log(idTextarea)
    this.noticiasService.getSourcesNames().then( data => {
      for (let name in data) {
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(`${data[name]}`));
        option.value = `${data[name]}`;

        idSources.appendChild(option);
      }
    })


  }

  sendData(): void {
    let idSources: any  = document.getElementById('idSources');
    let idTextarea: any = document.getElementById('idTextarea');

    let sourceValue = idSources.value;
    let textValue = idTextarea.value;

    console.log('Sources: ',sourceValue)
    console.log('Textarea: ',textValue)
    let input : string = '';

    if(idSources) input += `?sources=${sourceValue}`;
    if(idTextarea) input += `&q=${textValue}`;

    this.noticiasService.getNoticiasBySource(input).then( data => {
      console.log(data);
      this.noticiasArr = data;
    }).catch((err) => {
      console.error(err);
    })

  }
}
