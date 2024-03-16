import { Component } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserCircleProfileComponent {
  dropdownOpen: boolean = false;
  selectedOption: string = "Select an option";
  dropdownOptions: string[] = ["Option 1", "Option 2", "Option 3"]; // Replace with your options

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }
}
