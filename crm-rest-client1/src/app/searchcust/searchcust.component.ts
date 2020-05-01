import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Employees } from 'src/Employees';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-searchcust',
  templateUrl: './searchcust.component.html',
  styleUrls: ['./searchcust.component.css']
})
export class SearchcustComponent implements OnInit {
  ELEMENT_DATA: Employees[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','action'];
  dataSource = new MatTableDataSource<Employees>(this.ELEMENT_DATA);
  id: number;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
    this.getAllCustomers();
  }

  public getAllCustomers(){
    let resp = this.service.getCustomers();
    resp.subscribe(report=>this.dataSource.data=report as Employees[]);
  }

  public deleteEmployee(id){
    let resp = this.service.deleteUser(id);
    resp.subscribe(report=>this.dataSource.data=report as Employees[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
