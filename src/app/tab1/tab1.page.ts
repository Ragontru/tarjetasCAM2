import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  formulario: FormGroup;
  grupoDatos: FormGroup;

  tipo = [
    { nombre: "American Express" },
    { nombre: "Discover" },
    { nombre: "MasterCard" },
    { nombre: "Visa" }
  ];

  validation_messages = {
    'numTarjeta': [
      { type: 'required', message: 'El número de tarjeta es necesario.' },
      { type: 'minlength', message: 'El número de tarjeta debe tener 16 caracteres.' },
      { type: 'maxlength', message: 'El número de tarjeta debe tener 16 caracteres.' },
      { type: 'pattern', message: 'El número de tarjeta sólo contiene números.' }
    ]
  }

  constructor(
    // public formBuilder: FormBuilder
    // private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.grupoDatos = new FormGroup({
      numTarjeta: new FormControl('', Validators.compose([
        Validators.maxLength(16),
        Validators.minLength(16),
        Validators.pattern('[0-9]'),
        Validators.required
      ]))
    })
  }

}

