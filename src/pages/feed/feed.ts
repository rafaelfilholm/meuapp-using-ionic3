import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public obj_feed = {
    titulo: "Rafael Filho",
    data: "27 de Novembro",
    descricao: "Criar aplicações com Ionic é incrivelmente Fácil.",
    qntd_likes: 12,
    qntd_comments: 35,
    tempo_post: "20 min atrás"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
