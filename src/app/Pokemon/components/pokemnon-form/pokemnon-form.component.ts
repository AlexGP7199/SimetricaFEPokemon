import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Favorito } from '../../interfaces/pokemon-fav.interface';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

@Component({
  selector: 'app-pokemnon-form',
  templateUrl: './pokemnon-form.component.html',
  styleUrls: ['./pokemnon-form.component.css']
})
export class PokemnonFormComponent implements OnInit {
  pokeFavForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private dialogRef : MatDialogRef<PokemnonFormComponent>,@Inject(MAT_DIALOG_DATA) public editData : Favorito) {

  }

  ngOnInit(): void {

    this.pokeFavForm = this.formBuilder.group({
      id : [this.editData.id],
      name : ['', Validators.required],
      createdAt : ['', Validators.required],
      alias : ['', Validators.required],
    })


    if(this.editData){
      console.log(this.editData)
      //this.editData.createdAt = format(new Date( this.editData.createdAt), 'dd/MM/yyyy')
      this.pokeFavForm.controls['name'].setValue(this.editData.name);
      this.pokeFavForm.controls['name'].disable()
      this.pokeFavForm.controls['createdAt'].setValue(format(new Date( this.editData.createdAt), 'dd-MMM-yyyy'));
      this.pokeFavForm.controls['createdAt'].disable();
      this.pokeFavForm.controls['alias'].setValue(this.editData.alias);
      //this.pokeFavForm.controls['alias'].enable;
    }
    //console.log(this.editData.name);
  }

  ableForms(){
    this.pokeFavForm.controls['name'].enable();
    this.pokeFavForm.controls['createdAt'].enable();
    this.fixDate()
  }

  fixDate(){
    this.pokeFavForm.controls['createdAt'].setValue(this.editData.createdAt);
  }

  closeF(){
    this.dialogRef.close(null);
  }

  updateForm(){
    let tempAlias = this.pokeFavForm.controls['alias'].value;
    if(this.pokeFavForm.valid){
      Swal.fire({
        title: 'Estas seguro de ese Alias?',
        text: "Se guardara el siguiente alias: " + tempAlias + " de Favoritos?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!'
      }).then((result) => {
        if (result.isConfirmed) {
          //const date = new Date()
          //let fechaFormted = new Date(format(date, 'dd-MMM-yyyy'));
          this.ableForms();
          this.dialogRef.close(this.pokeFavForm.value);
        }
      })

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Favor rellenar todos los campos!',
      })
    }
  }




}
