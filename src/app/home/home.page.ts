import { Component } from '@angular/core';
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  value = "0";
  operation = "";
  memory = "0";

  viewValue(value) {
    if (this.value == "0") {
      this.value = value;
    }
    else {
      this.value += value;
    }
  }

  clear() {
    this.value = "0";
    this.memory = "0";
    this.operation = "";
  }

  dotAdd() {
    if (this.value.indexOf(".") == -1) {
      if (this.value == "0") {
        this.viewValue("0.");
      }
      else {
        this.viewValue(".");
      }
    }
  }

  calculate(paramenter) {
    if (this.operation != "") {
      if (this.operation == "+") {
        this.memory = (parseFloat(this.memory) + parseFloat(this.value)).toString();
      }
      else if (this.operation == "-") {
        this.memory = (parseFloat(this.memory) - parseFloat(this.value)).toString();
      }
      else if (this.operation == "*") {
        this.memory = (parseFloat(this.memory) * parseFloat(this.value)).toString();
      }
      else if (this.operation == "/") {
        if (parseFloat(this.value) != 0) {
          this.memory = (parseFloat(this.memory) / parseFloat(this.value)).toString();
        }
      }
      else if (this.operation == "%") {
        if (parseFloat(this.value) != 1) {
          this.memory = (parseFloat(this.memory)  * parseFloat(this.value ) /100).toString();
        }
      }
    }
    else {
      this.memory = this.value;
    }
    this.operation = paramenter;
    if (paramenter == "") {
      this.value = this.memory;
      this.memory = "0";
    }
    else {
      this.value = "0";
    }
  }

  constructor() { }

}
