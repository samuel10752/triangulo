import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab2Page {
  
  Base: string
  Altura : string
  saida : string

  constructor(private alertController: AlertController) {}

  async presentAlert(op:string, nome: string) {
    const alert = await this.alertController.create({
      header: 'Area',
      subHeader: '',
      message: resultado,
      buttons: ['FECHAR'],
    });

    await alert.present();
  }

  analisar(){
  var b = parseFloat(this.Base)
  var h = parseFloat(this.Altura)
  if ((a + b) > c && (a + c) > b && (b + c) > a){
    
    }
  }
}
