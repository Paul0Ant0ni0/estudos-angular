import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  /**
   * Event Emitter é uma classe que permite 
   * criar eventos customizados dentro do Angular
   */

  @Output()//Output: Serve para permiter que a propriedade emita eventos para fora do componente
  uploadCompleto: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  fazerUpload(){
    alert("Upload Iniciado...")
    /**
     * O método emit() serve para iniciar a enissão do
     * evento personalizado
     */
    this.uploadCompleto.emit()
  }

  ngOnInit(): void {
  }

}
