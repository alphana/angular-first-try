import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../_services/people/people.service';
import {Person} from '../_models/person';
import {User} from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-zone',
  templateUrl: './secure-zone.component.html',
  styleUrls: ['./secure-zone.component.css']
})
export class SecureZoneComponent implements OnInit {

  currentUser: User;
  people: Person[] = [];

  constructor(private router: Router, private peopleService: PeopleService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllPeople();
  }

  deleteUser(id: number) {
    this.peopleService.delete(id).subscribe(() => { this.loadAllPeople(); });
  }

  private loadAllPeople() {
    this.peopleService.getAll().subscribe(people => { this.people = people; });
  }
}
